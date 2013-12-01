<?php

namespace Craft;

class Videos_YoutubeService extends BaseApplicationComponent
{
    public function _construct($response)
    {

        $this->id = (string) $response->id;
        $this->id = substr($this->id, (strpos($this->id, ":user:") + 6));

        $this->name = (string) $response->author->name;

        // $this->id = $response->id;
        // $this->url = $response->url[0];
        // $this->title = $response->title;
        // $this->totalVideos = $response->total_videos;
    }

}