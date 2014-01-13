<?php

namespace Craft;

class VideosVariable
{
    public function getVideoByUrl($videoUrl)
    {
        return craft()->videos->getVideoByUrl($videoUrl);
    }
}