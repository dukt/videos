// document ready

$(document).ready(function()
{
    videosApp.log('Videos field on this page : ', $('.dkv-field').length);


    // request modal

    DuktVideosCms.postActionRequest('app', {}, function(response) {


        // append modal to body

        $(response.html).appendTo('body');


        // manual bootstrap

        videosApp.log('angular bootstrap');

        angular.bootstrap($('.dkv-app'), ['videosapp']);
    });


    // init loop on each field

    $('.dkv-field').videosField();


    // matrix compatibility

    if(typeof(Matrix) != "undefined")
    {
        Matrix.bind("dukt_videos", "display", function(cell) {

            // we remove event triggers because they are all going to be redefined
            // will be improved with single field initialization

            if (cell.row.isNew)
            {
                var field = $('> .dkv-field', cell.dom.$td);

                videosApp.field.init(field);
            }
        });
    }
});

