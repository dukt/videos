<?php

namespace Craft;

class Videos_VimeoService extends BaseApplicationComponent
{
    public function getDefaultParameters()
    {
        return array(
            'clientId'     => '',
            'clientSecret' => '',
            'token'        => '',
            'tokenSecret'  => ''
        );
    }

    public function getVideos($request, $opts = array())
    {
        $query = array();
        $query['full_response'] = 1;

        $request = explode("/", $request);

        switch($request[0]) {
            case 'album':
                $method = 'vimeo.albums.getVideos';
                $query['album_id'] = $request[1];
                break;
            case 'channel':
                $method = 'vimeo.channels.getVideos';
                $query['channel_id'] = $request[1];
                break;
            case 'likes':
                $method = 'vimeo.videos.getLikes';
                break;
        }


        $videos = $this->api($method, $query);

        return Videos_VideoModel::populateModels($videos);
    }

    public function api($method, $query)
    {
        $consumer_key = $this->provider->consumer->client_id;
        $consumer_secret = $this->provider->consumer->secret;

        $token = $this->provider->token->access_token;
        $token_secret = $this->provider->token->secret;

        $vimeo = new Vimeo($consumer_key, $consumer_secret);
        $vimeo->setToken($token, $token_secret);

        return $vimeo;
    }


    public function getCollection($provider, $request)
    {

    }

}