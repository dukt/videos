console.log('field.js');

var dkvideos = {};

dkvideos.currentVideo = false;
dkvideos.currentField = false;

// --------------------------------------------------------------------

// preview

dkvideos.preview = {
    init: function() {
        console.log('mcp.preview.init()');

        // cancel

        $('.dkv-player .cancel').click(function() {
            dkvideos.preview.hide();
            return false;
        });


        // select video

        $('.dkv-player .submit').click(function() {
            dkvideos.preview.hide();
            dkvideos.modal.hide();
            console.log('submit');
            $('input.text', dkvideos.currentField).attr('value', dkvideos.currentVideo.url);

            dkvideos.field.preview(dkvideos.currentVideo.url, dkvideos.currentField);

            return false;
        });

    },

    play: function(video)
    {
        dkvideos.currentVideo = video;

        dkvideos.preview.show();
    },

    resize: function() {
        var modalH = $('.dkv-modal').outerHeight();
        var modahW = $('.dkv-modal').outerWidth();


        var modalBottomH = $('.dkv-modal .modal-bottom').outerHeight();

        var playerH = modalH - modalBottomH;

        var iFrameHeight = playerH - $('.dkv-player .dkv-bottom').outerHeight();


        $('.dkv-player').css('height', playerH);

        $('.dkv-player .dkv-embed').css('height', iFrameHeight);
    },

    show : function() {
        $('.dkv-player').css('display', 'block');
        dkvideos.preview.resize();
    },

    hide: function() {
        $('.dkv-player .dkv-embed').html('');
        $('.dkv-player').css('display', 'none');
    }
};

dkvideos.field = {};

dkvideos.field.preview = function(videoUrl, field) {

    // request field preview embed

    Craft.postActionRequest('videos/ajax/fieldEmbed', {videoUrl:videoUrl}, function(response) {
        console.log('fieldEmbed', videoUrl);
        // load modal body

        var fieldPreview = $('.dkv-preview', field);

        fieldPreview.html('');

        fieldPreview.css('display', 'block');

        $(response['embed']).appendTo(fieldPreview);

        dkvideos.preview.init();

        $('.add', field).css('display', 'none');
        $('.change', field).css('display', 'inline-block');
        $('.remove', field).css('display', 'inline-block');

        // manual bootstrap

        //angular.bootstrap($('.dkv-modal'), ['videos']);
    });
}

// --------------------------------------------------------------------

// modal

dkvideos.modal = {
    init: function() {
        console.log('dkvideos.modal.init()');

        overlay = $('<div class="dkv-overlay"></div>');

        overlay.appendTo('body');

        overlay.click(function() {
            dkvideos.modal.hide();
        });
    },

    resize: function() {
        var winH = $(window).height();
        var winW = $(window).width();

        var modalH = $('.dkv-modal').outerHeight();
        var modalW = $('.dkv-modal').outerWidth();

        var modalT = (winH - modalH) / 2;
        var modalL = (winW - modalW) / 2;

        $('.dkv-modal').css('top', modalT);
        $('.dkv-modal').css('left', modalL);

        var modalBottomH = $('.dkv-modal .modal-bottom').outerHeight();

        var boxH = modalH - modalBottomH - 40;

        $('.dv-box').css('height', boxH);

        var videosH = modalH - 80;

        $('.dkv-videos').css('height', videosH);

    },

    show : function() {
        $('.dkv-overlay').css('display', 'block');
        $('.dkv-modal').css('display', 'block');

        dkvideos.modal.resize();
    },

    hide: function() {
        $('.dkv-overlay').css('display', 'none');
        $('.dkv-modal').css('display', 'none');

        dkvideos.preview.hide();
    }
};

// --------------------------------------------------------------------

// scroll

dkvideos.scroll = {
    init: function() {
        $('.dkv-videos').scroll(function () {
            //console.log('scroll', $('.dkv-videos').scrollTop(), $('.dkv-videos').height(), $(document).height());
            if ($('.dkv-videos').scrollTop() + $('.dkv-videos').height() >= $(document).height()) {
                // Works perfect for desktop browsers
                if($('.dkv-video-more').css('display') != "none")
                {
                    $('.dkv-video-more a').trigger('click');
                }
            }
        });
    }
};

// --------------------------------------------------------------------

// plugin definition

(function($) {

    $.fn.dukt_videos_field = function(options)
    {
        // build main options before element iteration
        // iterate and reformat each matched element

        return this.each(
            function()
            {
                field = $(this);

                $.fn.dukt_videos_field.init_field(field);
            }
        );
    };

    // --------------------------------------------------------------------

    // main init

    $.fn.dukt_videos_field.init = function()
    {
        console.log('hello', videos);
         dkvideos.modal.init();


        // get modal body

        Craft.postActionRequest('videos/ajax/modal', {}, function(response) {

            // load modal body

            $(response).appendTo('body');

            dkvideos.preview.init();

            // manual bootstrap

            console.log('angular bootstrap');

            angular.bootstrap($('.dkv-modal'), ['videos']);
        });
    };

    // --------------------------------------------------------------------

    // init field

    $.fn.dukt_videos_field.init_field = function(field)
    {
        // if a video is already set, load the iframe

        var input = $('input.text', field);
        var videoUrl = input.val();

        if(videoUrl !== "") {
            // a video is set

            dkvideos.field.preview(videoUrl, field);
        } else {
            $('.add', field).css('display', 'inline-block');
            $('.change', field).css('display', 'none');
            $('.remove', field).css('display', 'none');
        }


        // add & change button

        $('.add, .change', field).click(function() {
            dkvideos.currentField = field;
            dkvideos.modal.show();
        });


        // remove button

        $('.remove', field).click(function() {
            input.val('');

            $('.dkv-preview', field).css('display', 'none');
            $('.dkv-preview', field).html();

            $('.add', field).css('display', 'inline-block');
            $('.change', field).css('display', 'none');
            $('.remove', field).css('display', 'none');
        });
    }

    // --------------------------------------------------------------------

    // init on document ready

    $(document).ready(function() {
        $.fn.dukt_videos_field.init();
    });


})(jQuery);

// --------------------------------------------------------------------

// document ready

$(document).ready(function()
{
    console.log('Videos field on this page : ', $('.dkv-field').length);

    // init loop on each field

    $('.dkv-field').dukt_videos_field();
});


// --------------------------------------------------------------------

// window resize

$(window).resize(function() {
    dkvideos.preview.resize();
    dkvideos.modal.resize();
});
