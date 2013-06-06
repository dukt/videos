
/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/craft/videos/license
 * @link      http://dukt.net/craft/videos
 */

 $(document).ready(function() {
    $('.dkv-settings-btn').appendTo('h2.edit');

    cpResize();
});


function cpResize() {
    var mainH = $('#main').outerHeight();
    var modalH = $('.dkv-modal').outerHeight();

    // console.log('timeout', mainH, modalH);

    if(modalH < mainH) {
        //$('.dkv-modal, .dkv-modal .dkv-sidebar, .dkv-modal .dkv-main').css('min-height', mainH);
    }
}