<?php
namespace Dukt\Videos\Gateways;

use Craft\Craft;
use Craft\LogLevel;
use Guzzle\Http\Client;

abstract class BaseGateway
{
    public function getOAuthProvider()
    {
    }

    public function getOAuthScope()
    {
        
    }

    public function getOAuthParams()
    {
    }

    public function api($uri, $query = array())
    {
        $query = array_merge($this->apiQuery(), $query);

        $apiUrl = $this->getApiUrl();
        $client = new Client($apiUrl);
        $request = $client->get($uri, [], ['query' => $query]);

        Craft::log("Videos.Debug.GuzzleRequest\r\n".(string) $request, LogLevel::Info, true);

        try
        {
            $response = $request->send();

            Craft::log("Videos.Debug.GuzzleResponse\r\n".(string) $response, LogLevel::Info, true);

            return $response->json();
        }
        catch(\Exception $e)
        {
            Craft::log("Videos.Debug.GuzzleError\r\n".$e->getMessage().'\r\n'.$e->getTraceAsString(), LogLevel::Info, true);

            if(method_exists($e, 'getResponse'))
            {
                    Craft::log("Videos.Debug.GuzzleErrorResponse\r\n".$e->getResponse(), LogLevel::Info, true);
            }

            throw $e;
        }
    }

    public function getHandle()
    {
        $handle = get_class($this);
        $handle = substr($handle, strrpos($handle, "\\") + 1);
        $handle = strtolower($handle);

        return $handle;
    }

    public function getEmbedUrl($videoId, $options = array())
    {
        $boolParameters = array('disable_size', 'autoplay', 'loop');

        $boolParameters = array_merge($boolParameters, $this->getBoolParameters());

        foreach($options as $k => $o)
        {
            foreach($boolParameters as $k2)
            {
                if($k == $k2)
                {
                    if($o === 1 || $o === "1" || $o === true || $o === "yes")
                    {
                        $options[$k] = 1;
                    }

                    if($o === 0 || $o === "0" || $o === false || $o === "no")
                    {
                        $options[$k] = 0;
                    }
                }
            }
        }

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

    public function getVideos($method, $options)
    {
        $realMethod = 'getVideos'.ucwords($method);

        if(method_exists($this, $realMethod))
        {
            return $this->{$realMethod}($options);
        }
        else
        {
            throw new \Exception("Method ".$realMethod." not found");
        }
    }

    public function setToken($token)
    {
        $this->token = $token;
    }

    public function getVideoByUrl($url)
    {
        $url = $url['url'];

        $videoId = $this->getVideoId($url);

        if(!$videoId)
        {
            throw new \Exception('Video not found with url given');
        }

        $params['id'] = $videoId;

        $video = $this->getVideo($params);

        return $video;
    }
}
