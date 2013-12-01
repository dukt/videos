
/**
 * EE Videos by Dukt
 *
 * @package   EE Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/ee/videos/license
 * @link      http://dukt.net/ee/videos
 */

 $(document).ready(function() {
    $('.dkv-settings-btn').appendTo('h2.edit');


        var testOpts = {
          lines: 9, // The number of lines to draw
          length: 3, // The length of each line
          width: 2, // The line thickness
          radius: 4, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          direction: 1, // 1: clockwise, -1: counterclockwise
          color: '#000', // #rgb or #rrggbb
          speed: 2, // Rounds per second
          trail: 60, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'dkv-spin1', // The CSS class to assign to the spinner
          zIndex: 2000, // The z-index (defaults to 2000000000)
          top: 'auto', // Top position relative to parent in px
          left: 'auto' // Left position relative to parent in px
        };

        $('.tspin').spin(testOpts);
});