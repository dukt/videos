<?php

namespace Craft;

class VideosService extends BaseApplicationComponent
{
    public function getProviders()
    {

    }

    public function getVideos($provider, $request, $opts)
    {
        return craft()->{'videos_'.$provider}->getVideos($request, $opts);

        // craft()->videos_youtube->getVideos('favorites');
        // craft()->videos_youtube->getVideos('playlists/123');

        // craft()->videos_vimeo->getVideos('albums', '123');
        // craft()->videos_vimeo->getVideos('channels', '123');

        // craft.videos.vimeo.videos.albums('123')

        // craft.videos.videos('vimeo', 'albums', '123')
        // craft.videos.videos('vimeo', 'albums/123', opts)
    }

    // public function getVideos($provider, $request, $options)
    // {
    //     $videos = craft()->{'videos_'.$provider}->api($request);

    //     $videos = craft()->{'videos_youtube'}->api('playlist/123');

    //     $videos = craft()->{'videos_vimeo'}->api('', array('method' => 'vimeo.albums.getVideos'));
    //     $videos = craft()->{'videos_vimeo'}->api('', array('method' => 'vimeo.channels.getVideos'));

    //     return Videos_VideoModel::populateModels($videos);
    // }

    public function getCollection($provider, $request)
    {

    }
}