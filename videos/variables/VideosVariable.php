<?php

namespace Craft;

class VideosVariable
{
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        try {
            $video = craft()->videos->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);

            return $video;
        }
        catch(\Exception $e)
        {
            if(craft()->config->get('devMode'))
            {
                throw $e;
            }
            else
            {
                Craft::log("Couldn't get video from URL : ".$videoUrl.'. '.$e->getMessage(), LogLevel::Info, true);
            }
        }
    }
}