<?php

namespace Craft;

class Videos_YoutubeService extends BaseApplicationComponent
{
    public function api($request)
    {
    	return;
    }

    public function getVideos($request)
    {
        $videos = craft()->videos_youtube->api($request);

        return Videos_VideoModel::populateModels($videos);
    }

    public function getCollection($provider, $request)
    {

    }

}