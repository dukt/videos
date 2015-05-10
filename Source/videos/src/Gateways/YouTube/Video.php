<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Dukt\Videos\Gateways\YouTube;

use Dukt\Videos\Gateways\Common\AbstractVideo;

class Video extends AbstractVideo
{
    public function getEmbedFormat()
    {
        return "https://www.youtube.com/embed/%s?wmode=transparent";
    }

    public function getBoolParameters()
    {
        return array('autohide', 'cc_load_policy', 'controls', 'disablekb', 'fs', 'modestbranding', 'rel', 'showinfo');
    }

    public function instantiate($item)
    {
        $this->raw = $item;

        // populate video object
        $this->gatewayHandle = "youtube";
        $this->gatewayName   = "YouTube";
        $this->id            = $item->id;
        $this->plays         = $item->statistics->viewCount;
        $this->title         = $item->snippet->title;
        $this->url           = 'http://youtu.be/'.$this->id;
        $this->authorName    = $item->snippet->channelTitle;
        $this->authorUrl     = "http://youtube.com/channel/".$item->snippet->channelId;
        $this->date          = strtotime($item->snippet->publishedAt);
        $this->description   = $item->snippet->description;


        // thumbnail
        if(@$item->snippet->thumbnails->medium->url)
        {
            $this->thumbnail = $item->snippet->thumbnails->medium->url;
        }
        elseif(@$item->snippet->thumbnails->default->url)
        {
            $this->thumbnail = $item->snippet->thumbnails->default->url;
        }

        // thumbnailLarge
        if(@$item->snippet->thumbnails->maxres->url)
        {
            $this->thumbnailLarge = $item->snippet->thumbnails->maxres->url;
        }
        elseif(@$item->snippet->thumbnails->high->url)
        {
            $this->thumbnailLarge = $item->snippet->thumbnails->high->url;
        }
        elseif(@$item->snippet->thumbnails->standard->url)
        {
            $this->thumbnailLarge = $item->snippet->thumbnails->standard->url;
        }
        elseif(@$item->snippet->thumbnails->medium->url)
        {
            $this->thumbnailLarge = $item->snippet->thumbnails->medium->url;
        }
        elseif(@$item->snippet->thumbnails->default->url)
        {
            $this->thumbnailLarge = $item->snippet->thumbnails->default->url;
        }

        // duration
        $interval              = new \DateInterval($item->contentDetails->duration);
        $this->durationSeconds = ($interval->d * 86400) + ($interval->h * 3600) + ($interval->i * 60) + $interval->s;
        $this->duration        = $this->getDuration(true);

        // aliases
        $this->embedUrl             = $this->getEmbedUrl();
        $this->embedHtml            = $this->getEmbedHtml();
        $this->thumbnailSource      = $this->thumbnail;
        $this->thumbnailSourceLarge = $this->thumbnailLarge;
    }
}
