/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
 */$(document).ready(function(){function t(){var e=$(".dkv-expires").data("providerclass"),t={providerClass:e};Craft.postActionRequest("videos/ajax/refreshToken",t,function(e){$(".dkv-expires").html(e)})}if($(".dkv-expires").length>0){var e=$(".dkv-expires").data("providerclass");setInterval(function(){var e=$(".dkv-expires").html();e-=1;$(".dkv-expires").html(e);e<=0&&t()},1e3)}});