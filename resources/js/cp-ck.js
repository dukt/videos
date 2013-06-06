/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/craft/videos/license
 * @link      http://dukt.net/craft/videos
 */function cpResize(){var e=$("#main").outerHeight(),t=$(".dkv-modal").outerHeight();t<e}$(document).ready(function(){$(".dkv-settings-btn").appendTo("h2.edit");cpResize()});