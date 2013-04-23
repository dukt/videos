
/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
 */

DkvEndpoint = {
    url: function(method, options) {
        return Craft.getActionUrl('videos/ajax/'+method, options);
    }
};