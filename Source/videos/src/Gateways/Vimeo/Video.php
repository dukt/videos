<?php

namespace Dukt\Videos\Gateways\Vimeo;

use Dukt\Videos\Gateways\Common\AbstractVideo;

class Video extends AbstractVideo
{
    public function getEmbedFormat()
    {
        return "https://player.vimeo.com/video/%s";
    }

    public function getBoolParameters()
    {
        return array('portrait', 'title', 'byline');
    }

    public function instantiate($item)
    {
        $this->raw = $item;

        // populate video object
        $this->authorName    = $item['user']['name'];
        $this->authorUrl     = $item['user']['link'];
        $this->date          = strtotime($item['created_time']);
        $this->description   = $item['description'];
        $this->gatewayHandle = "vimeo";
        $this->gatewayName   = "Vimeo";
        $this->id            = substr($item['uri'], strlen('/videos/'));
        $this->plays         = (isset($item['stats']['plays']) ? $item['stats']['plays'] : 0);
        $this->title         = $item['name'];
        $this->url           = $item['link'];


        // duration
        $this->durationSeconds = $item['duration'];
        $this->duration        = $this->getDuration();


        // thumbnails

        $thumbnail = false;
        $thumbnailLarge = false;

        if(is_array($item['pictures']))
        {
            foreach($item['pictures'] as $picture)
            {
                if($picture['type'] == 'thumbnail')
                {
                    // largest thumbnail

                    if(!$thumbnailLarge)
                    {
                        $thumbnailLarge = $picture['link'];
                    }

                    // default thumbnail

                    if(!$thumbnail && $picture['width'] < 640)
                    {
                        $thumbnail = $picture['link'];
                    }
                }
            }
        }

        $this->thumbnail      = $thumbnail;
        $this->thumbnailLarge = $thumbnailLarge;

        // aliases
        $this->embedUrl             = $this->getEmbedUrl();
        $this->embedHtml            = $this->getEmbedHtml();
        $this->thumbnailSource      = $this->thumbnail;
        $this->thumbnailSourceLarge = $this->thumbnailLarge;
    }
}
