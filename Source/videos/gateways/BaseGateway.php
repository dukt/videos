<?php
namespace Dukt\Videos\Gateways;

use Craft\Craft;
use Craft\LogLevel;
use Craft\VideosPlugin;

abstract class BaseGateway implements GatewayInterface
{
    public function getHandle()
    {
        $handle = get_class($this);
        $handle = substr($handle, strrpos($handle, "\\") + 1);
        $handle = strtolower($handle);

        return $handle;
    }

    public function authenticationSetToken($token)
    {
        $this->token = $token;
    }
    
    public function getOauthScope()
    {
    }
    
    public function getOauthAuthorizationOptions()
    {
    }
    
    protected function apiPerformGetRequest($uri, $query = array(), $headers = null)
    {
        $client = $this->apiCreateClient();
        
        $request = $client->get($uri, $headers, ['query' => $query]);

        VideosPlugin::log("GuzzleRequest: ".(string) $request, LogLevel::Info);

        try
        {
            $response = $request->send();

            VideosPlugin::log("GuzzleResponse: ".(string) $response, LogLevel::Info);

            return $response->json();
        }
        catch(\Exception $e)
        {
            VideosPlugin::log("GuzzleError: ".$e->getMessage(), LogLevel::Error);

            if(method_exists($e, 'getResponse'))
            {
                VideosPlugin::log("GuzzleErrorResponse: ".$e->getResponse()->getBody(true), LogLevel::Error);
            }

            throw $e;
        }
    }

    public function getEmbedUrl($videoId, $options = array())
    {
        $queryMark = '?';

        if(strpos($this->getEmbedFormat(), "?") !== false)
        {
            $queryMark = "&";
        }

        $options = http_build_query($options);

        $format = $this->getEmbedFormat().$queryMark.$options;

        $embedUrl = sprintf($format, $videoId);

        return $embedUrl;
    }

    public function getEmbedHtml($videoId, $options = array())
    {
        $embedAttributes = array(
            'frameborder' => "0",
            'allowfullscreen' => "true" ,
            'allowscriptaccess' => "true"
        );

        $disableSize = false;

        if(isset($options['disable_size']))
        {
            $disableSize = $options['disable_size'];
        }

        if(!$disableSize)
        {
            if(isset($options['width']))
            {
                $embedAttributes['width'] = $options['width'];
                unset($options['width']);
            }

            if(isset($options['height']))
            {
                $embedAttributes['height'] = $options['height'];
                unset($options['height']);
            }
        }

        if(!empty($options['iframeClass']))
        {
            $embedAttributes['class'] = $options['iframeClass'];
            unset($options['iframeClass']);
        }

        $embedUrl = $this->getEmbedUrl($videoId, $options);

        $embedAttributesString = '';

        foreach($embedAttributes as $key => $value)
        {
            $embedAttributesString .= ' '.$key.'="'.$value.'"';
        }

        return '<iframe src="'. $embedUrl.'"'.$embedAttributesString.'></iframe>';
    }

    public function getVideoByUrl($url)
    {
        $url = $url['url'];

        $videoId = $this->extractVideoIdFromUrl($url);

        if(!$videoId)
        {
            throw new \Exception('Video not found with url given');
        }

        return $this->getVideoById($videoId);
    }
}
