$(document).ready(function() {
    console.log('refreshToken.js');

    // enable expire logic ?

    if($('.dv-expires').length > 0)
    {
        var providerClass = $('.dv-expires').data('providerclass');


        setInterval(function() {
            var expires = $('.dv-expires').html();
            expires = expires - 1;
            $('.dv-expires').html(expires);

            if(expires <= 0)
            {
                refreshToken();
            }
        }, 1000);
    }


    // send a refreshToken request

    function refreshToken()
    {
        var providerClass = $('.dv-expires').data('providerclass');

        // send refresh request and expect seconds in result

        var data = {
            providerClass: providerClass
        };

        Craft.postActionRequest('videos/ajax/refreshToken', data, function(response) {
            console.log('refreshToken response', response);

            $('.dv-expires').html(response);
        });
    }
});