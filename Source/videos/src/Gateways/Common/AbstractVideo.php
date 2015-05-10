<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Dukt\Videos\Gateways\Common;

abstract class AbstractVideo implements VideoInterface
{
    public $raw;
    public $authorName;
    public $authorUrl;
    public $date;
    public $description;
    public $duration;
    public $durationSeconds;
    public $gatewayHandle;
    public $gatewayName;
    public $id;
    public $plays;
    public $thumbnail;
    public $thumbnailLarge;
    public $title;
    public $url;

    public function getDate($format = false)
    {
        if($format)
        {
            return strftime($format, $this->date);
        }
        return $this->date;
    }

    public function getAuthorName()
    {
        return $this->authorName;
    }

    public function getAuthorUrl()
    {
        return $this->authorUrl;
    }

    public function getAuthorUsername()
    {
        return $this->authorUsername;
    }

    public function getThumbnail()
    {
        return $this->thumbnail;
    }
    public function getThumbnailLarge()
    {
        return $this->thumbnailLarge;
    }

    /**
     * Duration from seconds to h:m:s
     *
     * @access  public
     * @return  array
     */
    public function getDuration()
    {
        $hours = intval(intval($this->durationSeconds) / 3600);
        $minutes = intval(($this->durationSeconds / 60) % 60);
        $seconds = intval($this->durationSeconds % 60);

        // hh:mm:ss

        $hms = "";

        if($hours > 0)
        {
            $hms .= str_pad($hours, 2, "0", STR_PAD_LEFT).":";
        }

        $hms .= str_pad($minutes, 2, "0", STR_PAD_LEFT). ":";

        $hms .= str_pad($seconds, 2, "0", STR_PAD_LEFT);

        return $hms;
    }

    public function getEmbed($options = array())
    {
        return $this->getEmbedHtml($options);
    }

    public function getEmbedUrl($options = array())
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

        $embed = sprintf($format, $this->id);

        return $embed;
    }

    public function getEmbedHtml($options = array())
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

        $embed = '<iframe'.($iframeClass ? ' class="'.$iframeClass.'"' : '').' src="'.sprintf($this->getEmbedFormat().$queryMark.$options, $this->id).'" '.$extraParameters.' frameborder="0" allowfullscreen="true" allowscriptaccess="true"></iframe>';

        return $embed;
    }
}
