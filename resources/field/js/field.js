console.log('field.js');

var dkvideos = {};

dkvideos.currentVideo = false;
dkvideos.currentField = false;

// --------------------------------------------------------------------

// preview

dkvideos.preview = {
    init: function() {
        console.log('mcp.preview.init()');
        //$('#player').appendTo('.dv-modal');

        // cancel

        $('#player .player-close, #player .cancel').click(function() {
            dkvideos.preview.hide();
            return false;
        });


        // select video

        $('#player .submit').click(function() {
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
        var modalH = $('.dv-modal').outerHeight();
        var modahW = $('.dv-modal').outerWidth();


        var modalBottomH = $('.dv-modal .modal-bottom').outerHeight();

        var playerH = modalH - modalBottomH;

        var iFrameHeight = playerH - $('#player .top').outerHeight() - $('#player .bottom').outerHeight();


        $('#player').css('height', playerH);

        $('#player #videoDiv').css('height', iFrameHeight);
    },

    show : function() {
        $('#player').css('display', 'block');
        dkvideos.preview.resize();
    },

    hide: function() {
        $('#player #videoDiv').html('');
        $('#player .title').html('Loading...');
        $('#player').css('display', 'none');
    }
};

dkvideos.field = {};

dkvideos.field.preview = function(videoUrl, field) {

    // request field preview embed

    Craft.postActionRequest('videos/ajax/fieldEmbed', {videoUrl:videoUrl}, function(response) {
        console.log('fieldEmbed', videoUrl);
        // load modal body

        var fieldPreview = $('.dv-preview', field);

        fieldPreview.html('');

        fieldPreview.css('display', 'block');

        $(response['embed']).appendTo(fieldPreview);

        dkvideos.preview.init();

        $('.add', field).css('display', 'none');
        $('.change', field).css('display', 'inline-block');
        $('.remove', field).css('display', 'inline-block');

        // manual bootstrap

        //angular.bootstrap($('.dv-modal'), ['videos']);
    });
}

// --------------------------------------------------------------------

// modal

dkvideos.modal = {
    init: function() {
        console.log('dkvideos.modal.init()');

        overlay = $('<div class="dv-overlay"></div>');

        overlay.appendTo('body');

        overlay.click(function() {
            dkvideos.modal.hide();
        });
    },

    resize: function() {
        var winH = $(window).height();
        var winW = $(window).width();

        var modalH = $('.dv-modal').outerHeight();
        var modalW = $('.dv-modal').outerWidth();

        var modalT = (winH - modalH) / 2;
        var modalL = (winW - modalW) / 2;

        $('.dv-modal').css('top', modalT);
        $('.dv-modal').css('left', modalL);

        var modalBottomH = $('.dv-modal .modal-bottom').outerHeight();

        var boxH = modalH - modalBottomH - 40;

        $('.dv-box').css('height', boxH);

        var videosH = modalH - 80;

        $('.dv-videos-wrap').css('height', videosH);

    },

    show : function() {
        $('.dv-overlay').css('display', 'block');
        $('.dv-modal').css('display', 'block');

        dkvideos.modal.resize();
    },

    hide: function() {
        $('.dv-overlay').css('display', 'none');
        $('.dv-modal').css('display', 'none');

        dkvideos.preview.hide();
    }
};

console.log('hello modal');


// --------------------------------------------------------------------

// scroll

dkvideos.scroll = {
    init: function() {
        $('.dv-videos-wrap').scroll(function () {
            //console.log('scroll', $('.dv-videos-wrap').scrollTop(), $('.dv-videos-wrap').height(), $(document).height());
            if ($('.dv-videos-wrap').scrollTop() + $('.dv-videos-wrap').height() >= $(document).height()) {
                // Works perfect for desktop browsers
                if($('.dv-video-more').css('display') != "none")
                {
                    $('.dv-video-more a').trigger('click');
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

            angular.bootstrap($('.dv-modal'), ['videos']);
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

            $('.dv-preview', field).css('display', 'none');
            $('.dv-preview', field).html();

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

$(document).ready(function()
{
    console.log('Videos field on this page : ', $('.dv-field').length);

    // init loop on each field

    $('.dv-field').dukt_videos_field();
});


$(window).resize(function() {
    dkvideos.preview.resize();
    dkvideos.modal.resize();
});
