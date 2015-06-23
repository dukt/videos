<?php
namespace Dukt\Videos\Gateways;

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

        $extraParameters = "";

        $disableSize = false;

        if(isset($options['disable_size']))
        {
            $disableSize = $options['disable_size'];
        }

        if(!$disableSize)
        {
            if(isset($options['width']))
            {
                $width = $options['width'];
                $extraParameters .= 'width="'.$width.'" ';
                unset($options['width']);
            }

            if(isset($options['height']))
            {
                $height = $options['height'];
                $extraParameters .= 'height="'.$height.'" ';
                unset($options['height']);
            }
        }

        $options = http_build_query($options);

        $format = $this->getEmbedFormat().$queryMark.$options;

        $embed = sprintf($format, $videoId);

        return $embed;
    }

    public function getEmbedHtml($videoId, $options = array())
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

        $extraParameters = "";

        $disableSize = false;

        if(isset($options['disable_size']))
        {
            $disableSize = $options['disable_size'];
        }

        if(!$disableSize)
        {
            if(isset($options['width']))
            {
                $width = $options['width'];
                $extraParameters .= 'width="'.$width.'" ';
                unset($options['width']);
            }

            if(isset($options['height']))
            {
                $height = $options['height'];
                $extraParameters .= 'height="'.$height.'" ';
                unset($options['height']);
            }
        }

        $iframeClass = false;

        if(!empty($options['iframeClass']))
        {
            $iframeClass = $options['iframeClass'];
            unset($options['iframeClass']);
        }

        $options = http_build_query($options);

        $embed = '<iframe'.($iframeClass ? ' class="'.$iframeClass.'"' : '').' src="'.sprintf($this->getEmbedFormat().$queryMark.$options, $videoId).'" '.$extraParameters.' frameborder="0" allowfullscreen="true" allowscriptaccess="true"></iframe>';

        return $embed;
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