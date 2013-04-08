console.log('hello field.js');

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


    $.fn.dukt_videos_field.init = function()
    {
         $.fn.dukt_videos_field.modal.init();


        // get modal body

        Craft.postActionRequest('duktvideos/ajax/modal', {}, function(response) {

            // load modal body

            $(response).appendTo('body');



            
            // manual bootstrap
            
            angular.bootstrap(document, ['duktvideos']);
        });

    };

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


    $.fn.dukt_videos_field.init_field = function(field)
    {
        $('.add', field).click(function() {
            $.fn.dukt_videos_field.modal.show();
        });
    }
    
    // Initialization

    $(document).ready(function() {
        $.fn.dukt_videos_field.init();
    });


})(jQuery);

$().ready(function()
{
    console.log('Videos field on this page : ', $('.dv-field').length);
    $('.dv-field').dukt_videos_field();
});

function build_modal()
{

}