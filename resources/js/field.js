console.log('field.js');

var videos = {};

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

        var iFrameHeight = modalH - $('#player .top').outerHeight() - $('#player .bottom').outerHeight();

        $('#player').css('height', modalH);

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




(function($) {

    // plugin definition

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
         $.fn.dukt_videos_field.modal.init();


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

    // modal

    $.fn.dukt_videos_field.modal = {
        init: function() {
            console.log('videos.modal.init()');

            overlay = $('<div class="dv-overlay"></div>');

            overlay.appendTo('body');

            overlay.click(function() {
                $.fn.dukt_videos_field.modal.hide();
            });
        },

        resize: function() {

        },

        show : function() {
            $('.dv-overlay').css('display', 'block');
            $('.dv-modal').css('display', 'block');
        },

        hide: function() {
            $('.dv-overlay').css('display', 'none');
            $('.dv-modal').css('display', 'none');
        }
    };

    // --------------------------------------------------------------------

    // init field

    $.fn.dukt_videos_field.init_field = function(field)
    {
        $('.add', field).click(function() {
            $.fn.dukt_videos_field.modal.show();
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
