$(document).ready(function(){function t(){var e=$(".dv-expires").data("providerclass"),t={providerClass:e};console.log("datax",t);Craft.postActionRequest("duktvideos/ajax/refreshToken",t,function(e){console.log("refreshToken response",e);$(".dv-expires").html(e)})}console.log("refreshToken.js");if($(".dv-expires").length>0){var e=$(".dv-expires").data("providerclass");setInterval(function(){var e=$(".dv-expires").html();e-=1;$(".dv-expires").html(e);e<=0&&t()},1e3)}});