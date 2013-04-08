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

        // get modal

        Craft.postActionRequest('duktvideos/ajax/modal', {}, function(response) {

            $(response).appendTo('body');
            
                // manual bootstrap
                
                angular.bootstrap(document, ['duktvideos']);
        });

    };


    $.fn.dukt_videos_field.init_field = function(field)
    {

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