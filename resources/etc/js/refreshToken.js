
/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
 */

$(document).ready(function() {
    // console.log('refreshToken.js');

    // enable expire logic ?

    if($('.dkv-expires').length > 0)
    {
        var providerClass = $('.dkv-expires').data('providerclass');


        setInterval(function() {
            var expires = $('.dkv-expires').html();
            expires = expires - 1;
            $('.dkv-expires').html(expires);

            if(expires <= 0)
            {
                refreshToken();
            }
        }, 1000);
    }


    // send a refreshToken request

    function refreshToken()
    {
        var providerClass = $('.dkv-expires').data('providerclass');

        // send refresh request and expect seconds in result

        var data = {
            providerClass: providerClass
        };

        Craft.postActionRequest('videos/ajax/refreshToken', data, function(response) {
            // console.log('refreshToken response', response);

            $('.dkv-expires').html(response);
        });
    }
});