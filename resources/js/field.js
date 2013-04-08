console.log('field.js');

var videos = {};

// --------------------------------------------------------------------

// preview

videos.preview = {
    init: function() {
        console.log('mcp.preview.init()');
        //$('#player').appendTo('.dv-modal');

        $('#player .player-close, #player .cancel').click(function() {
            videos.preview.hide();
            return false;
        });

    },

    resize: function() {
        var modalH = $('.dv-modal').outerHeight();
        var modahW = $('.dv-modal').outerWidth();


        var modalBottomH = $('.dv-modal .modal-bottom').outerHeight();

        var playerH = modalH - modalBottomH;

        var iFrameHeight = playerH - $('#player .top').outerHeight() - $('#player .bottom').outerHeight();
        

        $('#player').css('height', playerH);

        $('#player #videoDiv').css('height', iFrameHeight);

        // $('#player').css('left', playerLeft);
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
            
            angular.bootstrap(document, ['duktvideos']);
        });

    };

    // --------------------------------------------------------------------

    // init field

    $.fn.dukt_videos_field.init_field = function(field)
    {
        $('.add', field).click(function() {
            videos.modal.show();
        });
    }

    // --------------------------------------------------------------------
    
    // init on document ready

    $(document).ready(function() {
        $.fn.dukt_videos_field.init();
    });


})(jQuery);

// --------------------------------------------------------------------

$().ready(function()
{
    console.log('Videos field on this page : ', $('.dv-field').length);
    
    // init loop on each field

    $('.dv-field').dukt_videos_field();
});
