console.log('field.js');

var videos = {};

videos.currentVideo = false;
videos.currentField = false;

// --------------------------------------------------------------------

// preview

videos.preview = {
    init: function() {
        console.log('mcp.preview.init()');
        //$('#player').appendTo('.dv-modal');

        // cancel

        $('#player .player-close, #player .cancel').click(function() {
            videos.preview.hide();
            return false;
        });


        // select video

        $('#player .submit').click(function() {
            videos.preview.hide();
            videos.modal.hide();
            console.log('submit');
            $('input.text', videos.currentField).attr('value', videos.currentVideo.url);

            videos.field.preview(videos.currentVideo.url, videos.currentField);

            return false;
        });

    },

    play: function(video)
    {
        videos.currentVideo = video;

        videos.preview.show();
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
        videos.preview.resize();
    },

    hide: function() {
        $('#player #videoDiv').html('');
        $('#player .title').html('Loading...');
        $('#player').css('display', 'none');
    }
};

videos.field = {};

videos.field.preview = function(videoUrl, field) {
    
    // request field preview embed

    Craft.postActionRequest('duktvideos/ajax/fieldEmbed', {videoUrl:videoUrl}, function(response) {
        console.log('fieldEmbed', videoUrl);
        // load modal body

        var fieldPreview = $('.dv-preview', field);

        fieldPreview.html('');

        fieldPreview.css('display', 'block');

        $(response).appendTo(fieldPreview);

        videos.preview.init();

        $('.add', field).css('display', 'none');
        $('.change', field).css('display', 'inline-block');
        $('.remove', field).css('display', 'inline-block');
        
        // manual bootstrap
        
        //angular.bootstrap($('.dv-modal'), ['duktvideos']);
    });
}

// --------------------------------------------------------------------

// modal

videos.modal = {
    init: function() {
        console.log('videos.modal.init()');

        overlay = $('<div class="dv-overlay"></div>');

        overlay.appendTo('body');

        overlay.click(function() {
            videos.modal.hide();
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

        videos.modal.resize();
    },

    hide: function() {
        $('.dv-overlay').css('display', 'none');
        $('.dv-modal').css('display', 'none');

        videos.preview.hide();
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
         videos.modal.init();


        // get modal body

        Craft.postActionRequest('duktvideos/ajax/modal', {}, function(response) {

            // load modal body

            $(response).appendTo('body');

            videos.preview.init();
            
            // manual bootstrap
            
            angular.bootstrap($('.dv-modal'), ['duktvideos']);
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

            videos.field.preview(videoUrl, field);
        } else {
            $('.add', field).css('display', 'inline-block');
            $('.change', field).css('display', 'none');
            $('.remove', field).css('display', 'none');
        }
        // add & change button

        $('.add, .change', field).click(function() {
            videos.currentField = field;
            videos.modal.show();
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
    videos.preview.resize();
    videos.modal.resize();
});