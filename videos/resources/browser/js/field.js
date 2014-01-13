// document ready

$(document).ready(function()
{
    videosApp.log('Videos field on this page : ', $('.dkv-field').length);


    // request modal

    DuktVideosCms.postActionRequest('app', {}, function(response) {

        // if(typeof(response.error) != 'undefined') {

        //     $('.dkv-field .error').html(response.error);

        //     return;
        // }

        videosApp.loaded['app'] = true;

        // append modal to body

        $(response.html).appendTo('body');


        // manual bootstrap

        videosApp.log('angular bootstrap');

        angular.bootstrap($('.dkv-app'), ['videosapp']);
    });
});

