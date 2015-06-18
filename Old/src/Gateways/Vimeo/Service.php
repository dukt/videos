<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Dukt\Videos\Gateways\Vimeo;

use Dukt\Vimeo;
use Dukt\Videos\Gateways\Common\AbstractService;

class Service extends AbstractService
{
    public $providerClass = "Vimeo";
    public $name          = "Vimeo";
    public $handle        = "vimeo";
    public $oauthProvider = 'Vimeo';
    public $oauthScope    = array();

    public function api($uri, $query = array())
    {
        $query['access_token'] = $this->token->accessToken;
        $queryString = http_build_query($query);

        $url = 'https://api.vimeo.com/'.$uri.'?'.$queryString;
        $client = new \Guzzle\Http\Client();
        $request = $client->get($url);
        $response = $request->send()->json();

        return $response;
    }

    public function getSections()
    {
        $sections = array();
        $sections['Library'] = array(
            array(
                'name' => "Uploads",
                'method' => 'uploads'
            ),
            array(
                'name' => "Favorites",
                'method' => 'favorites'
            )
        );


        // albums

        $albums = $this->getCollectionsAlbums();

        if(is_array($albums))
        {
            $items = array();

            foreach($albums as $album)
            {
                $item = array(
                    'name' => $album->title,
                    'method' => 'album',
                    'options' => array('id' => $album->id)
                );

                $items[] = $item;
            }

            if(count($items) > 0)
            {
                $sections['Albums'] = $items;
            }
        }


        // channels

        $channels = $this->getCollectionsChannels();

        if(is_array($channels))
        {
            $items = array();

            foreach($channels as $channel)
            {
                $item = array(
                    'name' => $channel->title,
                    'method' => 'channel',
                    'options' => array('id' => $channel->id)
                );

                $items[] = $item;
            }

            if(count($items) > 0)
            {
                $sections['Channels'] = $items;
            }
        }

        return $sections;
    }

    protected function _api($method, $params = array())
    {
        $token = $this->token;
        // client id & secret are fake because we already have a valid token
        $vimeo = new Vimeo(
            "clientId",
            "clientSecret",
            $token->accessToken
        );

        $return = array();

        try
        {
            $return = $vimeo->request($method, $params);
        }
        catch(\Exception $e)
        {
            if($e->getMessage() != 'Page out of bounds')
            {
                throw $e;
            }
        }

        return $return;
    }

    public function getVideo($opts)
    {
        $method = '/videos/'.$opts['id'];
        $response = $this->_api($method);

        if(!empty($response['body']))
        {
            $video = new Video();

            if(!isset($response['body']['error']))
            {
                $video->instantiate($response['body']);

                return $video;
            }
            else
            {
                throw new \Exception($response['body']['error'], 1);

            }
        }
    }

    public static function getVideoId($url)
    {
        // check if url works with this service and extract video_id

        $video_id = false;

        $regexp = array('/^https?:\/\/(www\.)?vimeo\.com\/([0-9]*)/', 2);

        if(preg_match($regexp[0], $url, $matches, PREG_OFFSET_CAPTURE) > 0)
        {

            // regexp match key
            $match_key = $regexp[1];


            // define video id
            $video_id = $matches[$match_key][0];


            // Fixes the youtube &feature_gdata bug
            if(strpos($video_id, "&"))
            {
                $video_id = substr($video_id, 0, strpos($video_id, "&"));
            }
        }

        // here we should have a valid video_id or false if service not matching
        return $video_id;
    }

    public function _queryFromParams($params = array())
    {
        $query = array();

        $query['full_response'] = 1;

        if(!empty($params['nextPage']))
        {
            $query['page'] = $params['nextPage'];
            unset($params['nextPage']);
        }
        else
        {
            $query['page'] = $this->paginationDefaults['page'];
        }

        $params['nextPage'] = $query['page'] + 1;

        if(!empty($params['q']))
        {
            $query['query'] = $params['q'];
            unset($params['q']);
        }

        $query['per_page'] = $this->paginationDefaults['perPage'];

        $query = array_merge($query, $params);

        return $query;
    }

    public function _getVideosRequest($uri, $params, $requireAuthentication = true)
    {
        $query = $this->_queryFromParams($params);

        $response = $this->_api($uri, $query);

        $videosRaw = $response['body']['data'];
        $videos = $this->extractVideos($videosRaw);

        $more = true;

        if(count($videos) < $this->paginationDefaults['perPage'])
        {
            $more = false;
        }

        return array(
                'videos' => $videos,
                'nextPage' => $query['nextPage'],
                'more' => $more
            );
    }

    public function getVideosSearch($params = array())
    {
        return $this->_getVideosRequest('/videos', $params);
    }

    public function getVideosFavorites($params = array())
    {
        return $this->_getVideosRequest('/me/likes', $params);
    }

    public function getVideosUploads($params = array())
    {
        return $this->_getVideosRequest('/me/videos', $params);
    }

    public function getVideosChannel($params = array())
    {
        $params['channel_id'] = $params['id'];
        unset($params['id']);

        return $this->_getVideosRequest('/channels/'.$params['channel_id'].'/videos', $params);
    }

    public function getVideosAlbum($params = array())
    {
        $params['album_id'] = $params['id'];
        unset($params['id']);

         // albums/#album_id
        return $this->_getVideosRequest('/me/albums/'.$params['album_id'].'/videos', $params);
    }

    public function getCollectionsAlbums($params = array())
    {
        $query = $this->_queryFromParams();

        $response = $this->_api('/me/albums', $query);

        return $this->extractCollections($response['body']['data'], 'album');
    }

    public function getCollectionsChannels($params = array())
    {
        $query = $this->_queryFromParams();

        $response = $this->_api('/me/channels', $query);

        return $this->extractCollections($response['body']['data'], 'channel');
    }

    public function userInfos()
    {
        $api = $this->_api();

        $method = 'vimeo.people.getInfo';

        $params = array();

        $r = $api->request($method, $params);

        return $this->extractUserInfos($r);
    }

    protected function extractVideos($r)
    {
        $videos = array();

        if(!empty($r))
        {
            $responseVideos = $r;

            foreach($responseVideos as $responseVideo)
            {
                $video = new Video();
                $video->instantiate($responseVideo);

                array_push($videos, $video);
            }
        }

        return $videos;
    }

    private function extractCollections($r, $type='album')
    {
        $responseCollections = $r;

        $collections = array();

        foreach($responseCollections as $responseCollection)
        {
            $collection = new Collection();

            $collection->{'instantiate'.ucwords($type)}($responseCollection);

            array_push($collections, $collection);
        }

        return $collections;
    }

    private function extractUserInfos($r)
    {
        $response = $r->person;

        $userInfos = new UserInfos();
        $userInfos->instantiate($response);

        return $userInfos;
    }
}

