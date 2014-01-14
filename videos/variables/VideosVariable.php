<?php

namespace Craft;

class VideosVariable
{
    public function getVideoByUrl($videoUrl, $enableCache = true, $cacheExpiry = 3600)
    {
        try {
            return craft()->videos->getVideoByUrl($videoUrl, $enableCache, $cacheExpiry);
        } catch(\Exception $e) {
            Craft::log("Couldn't get video from URL : ".$videoUrl.'. '.$e->getMessage(), LogLevel::Info, true);
        }
    }
}