/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
 */var dkvideos={};dkvideos.currentVideo=!1;dkvideos.preview={init:function(){overlay=$('<div class="dkv-overlay"></div>');overlay.appendTo("body");$(".dkv-overlay, .dkv-modal .cancel").click(function(){dkvideos.preview.hide();return!1})},resize:function(){var e=$(window).height(),t=$(window).width(),n=e/2-$(".dkv-player").outerHeight()/2,r=t/2-$(".dkv-player").outerWidth()/2;$(".dkv-player").css("top",n);$(".dkv-player").css("left",r)},play:function(e){dkvideos.currentVideo=e;dkvideos.preview.show()},show:function(){$(".dkv-player").css("display","block");$(".dkv-overlay").css("display","block");dkvideos.preview.resize()},hide:function(){$(".dkv-overlay").css("display","none");$(".dkv-player .dkv-embed").html("");$(".dkv-player").css("display","none")}};dkvideos.scroll={init:function(){$(window).scroll(function(){$(window).scrollTop()+$(window).height()>=$(document).height()&&$(".dkv-video-more").css("display")!="none"&&$(".dkv-video-more a").trigger("click")})}};dkvideos.preview.init();$(document).ready(function(){angular.bootstrap($(".dkv-modal"),["videos"])});$(window).resize(function(){dkvideos.preview.resize()});