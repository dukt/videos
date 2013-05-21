/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
 */function cpResize(){var e=$("#main").outerHeight(),t=$(".dkv-modal").outerHeight();console.log("timeout",e,t);t<e}$(document).ready(function(){$(".dkv-settings-btn").appendTo("h2.edit");cpResize()});