/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/craft/videos/license
 * @link      http://dukt.net/craft/videos
 */DuktVideosCms={getActionUrl:function(e,t){url=Craft.getActionUrl("videos/ajax/"+e,t);return url},getResourceUrl:function(e){e=Dukt_videos.resourceUrl+e;return e},postActionRequest:function(e,t,n){url=DuktVideosCms.getActionUrl(e);$.ajax({url:url,type:"POST",data:t,complete:function(e){response=e.responseText;try{response=$.parseJSON(response);n(response)}catch(t){n(response)}}})}};