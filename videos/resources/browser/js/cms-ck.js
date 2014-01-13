/**
 * EE Videos by Dukt
 *
 * @package   EE Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/ee/videos/license
 * @link      http://dukt.net/ee/videos
 */DuktVideosCms={getActionUrl:function(e,t){url=Dukt_videos.endpointUrl+"&method="+e+"&"+http_build_query(t);return url},getResourceUrl:function(e){e=Dukt_videos.resourceUrl+e;return e},postActionRequest:function(e,t,n){url=DuktVideosCms.getActionUrl(e);$.ajax({url:url,type:"POST",data:t,complete:function(e){response=e.responseText;try{response=$.parseJSON(response);n(response)}catch(t){n(response)}}})}};