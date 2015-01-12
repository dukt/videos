<?php

namespace Dukt\Videos\Gateways\YouTube;

use \Google_Client;
use \Google_Service_YouTube;

use Dukt\Videos\Gateways\Common\AbstractService;
use Guzzle\Http\Client;

class Service extends AbstractService
{
    public $providerClass = "YouTube";
    public $name          = "YouTube";
    public $handle        = "youtube";
    public $oauthProvider = 'Google';
    public $oauthScope    = array(
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/youtube',
            'https://www.googleapis.com/auth/youtube.readonly'
        );

    public function getClient()
    {
        $storage = $this->providerSource->storage;
        $token = $storage->retrieveAccessToken($this->oauthProvider);

        // make token compatible with Google library
        $arrayToken = array();
        $arrayToken['created'] = 0;
        $arrayToken['access_token'] = $token->getAccessToken();
        $arrayToken['expires_in'] = $token->getEndOfLife();
        $arrayToken = json_encode($arrayToken);


        // client: client id, secret and redirect uri are fake because we already have a valid token
        $client = new Google_Client();
        $client->setApplicationName('Google+ PHP Starter Application');
        $client->setClientId("clientId");
        $client->setClientSecret("clientSecret");
        $client->setRedirectUri("redirectUri");

        $client->setAccessToken($arrayToken);

        $api = new Google_Service_YouTube($client);

        return $api;
    }

    public function getVideo($opts)
    {
        if(empty($opts['id']))
        {
            throw new \Exception('The video ID is required. (empty found)');
        }

        $client = $this->getClient();
        $videos = $client->videos->listVideos('snippet,statistics,contentDetails', array('id' => $opts['id']));
        $videos = $this->extractVideos($videos);

        if(count($videos) == 1)
        {
            return array_pop($videos);
        }
        else
        {
            throw new \Exception('Video not found');
        }
    }

    public static function getVideoId($url)
    {
        // check if url works with this service and extract video_id

        $video_id = false;

        $regexp = array('/^https?:\/\/(www\.youtube\.com|youtube\.com|youtu\.be).*\/(watch\?v=)?(.*)/', 3);

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

    public function _pagination($params = array())
    {
        $pagination = array(
            'page' => $this->paginationDefaults['page'],
            'perPage' => $this->paginationDefaults['perPage'],
            'nextPageToken' => false
        );

        if(!empty($params['perPage']))
        {
            $pagination['perPage'] = $params['perPage'];
        }

        if(!empty($params['nextPageToken']))
        {
            $pagination['nextPageToken'] = $params['nextPageToken'];
        }

        return $pagination;
    }

    public function _getVideosRequest($playlist, $params = array())
    {
        $pagination = $this->_pagination($params);

        $client = $this->getClient();

        $channelsResponse = $client->channels->listChannels('contentDetails', array(
          'mine' => 'true',
        ));

        foreach ($channelsResponse['items'] as $channel)
        {
            $uploadsListId = $channel['contentDetails']['relatedPlaylists'][$playlist];

            $data = array(
                'playlistId' => $uploadsListId,
                'maxResults' => $pagination['perPage']
            );

            if(!empty($pagination['nextPageToken']))
            {
                $data['pageToken'] = $pagination['nextPageToken'];
            }

            $playlistItemsResponse = $client->playlistItems->listPlaylistItems('id,snippet', $data);


            $videoIds = array();

            foreach($playlistItemsResponse['items'] as $item)
            {
                $videoId = $item['snippet']['resourceId']['videoId'];

                array_push($videoIds, $videoId);
            }

            $videoIds = implode(",", $videoIds);

            $videosResponse = $client->videos->listVideos('snippet,statistics,contentDetails', array('id' => $videoIds));
            $videos = $this->extractVideos($videosResponse);

            $more = false;

            if(!empty($playlistItemsResponse->nextPageToken) && count($videos) > 0)
            {
                $more = true;
            }

           return array(
                    'videos' => $videos,
                    'prevPageToken' => $playlistItemsResponse->prevPageToken,
                    'nextPageToken' => $playlistItemsResponse->nextPageToken,
                    'more' => $more
                );
        }
    }

    public function getVideosFavorites($params = array())
    {
        return $this->_getVideosRequest('favorites', $params);
    }
    public function getVideosUploads($params = array())
    {
        return $this->_getVideosRequest('uploads', $params);
    }

    public function getVideosHistory($params = array())
    {
        return $this->_getVideosRequest('watchHistory', $params);
    }

    public function getVideosPlaylist($params = array())
    {
        $pagination = $this->_pagination($params);

        $client = $this->getClient();

        $playlistId = $params['id'];

        $data = array(
            'playlistId' => $playlistId,
            'maxResults' => $pagination['perPage']
        );

        if(!empty($pagination['nextPageToken']))
        {
            $data['pageToken'] = $pagination['nextPageToken'];
        }

        $playlistItemsResponse = $client->playlistItems->listPlaylistItems('id,snippet', $data);

        $videoIds = array();

        foreach($playlistItemsResponse['items'] as $item)
        {
            $videoId = $item['snippet']['resourceId']['videoId'];

            array_push($videoIds, $videoId);
        }

        $videoIds = implode(",", $videoIds);

        $videosResponse = $client->videos->listVideos('snippet,statistics,contentDetails', array('id' => $videoIds));
        $videos = $this->extractVideos($videosResponse);

        $more = false;

        if(!empty($playlistItemsResponse->nextPageToken) && count($videos) > 0)
        {
            $more = true;
        }

        return array(
                'prevPageToken' => $playlistItemsResponse->prevPageToken,
                'nextPageToken' => $playlistItemsResponse->nextPageToken,
                'videos' => $videos,
                'more' => $more
            );
    }

    public function getVideosSearch($params = array())
    {
        $pagination = $this->_pagination($params);

        $client = $this->getClient();

        $data = array(
            'q' => $params['q'],
            'maxResults' => $pagination['perPage']
        );

        if(!empty($pagination['nextPageToken']))
        {
            $data['pageToken'] = $pagination['nextPageToken'];
        }

        $response = $client->search->listSearch('id', $data);

        foreach($response['items'] as $item)
        {
            $videoIds[] = $item->id->videoId;
        }

        if(!empty($videoIds))
        {
            $videoIds = implode(",", $videoIds);

            $videosResponse = $client->videos->listVideos('snippet,statistics,contentDetails', array('id' => $videoIds));
            $videos = $this->extractVideos($videosResponse);

            $more = false;

            if(!empty($playlistItemsResponse->nextPageToken) && count($videos) > 0)
            {
                $more = true;
            }

            return array(
                'prevPageToken' => $response->prevPageToken,
                'nextPageToken' => $response->nextPageToken,
                'videos' => $videos,
                'more' => $more
            );
        }

        return array();
    }

    // available playlists
    // favorites
    // likes
    // uploads
    // watchHistory
    // watchLater

    public function getCollectionsPlaylists($params = array())
    {

        $client = $this->getClient();

        $channelsResponse = $client->playlists->listPlaylists('snippet', array(
          'mine' => 'true',
        ));

        return $this->extractCollections($channelsResponse['items']);
    }

    public function userInfos()
    {
        $r = $this->apiCall('users/default');
        $userInfos = new UserInfos();
        $userInfos->instantiate($r);

        return $userInfos;
    }

    private function extractVideos($items)
    {
        $videos = array();

        foreach($items as $v)
        {
            $video = new Video();
            $video->instantiate($v);

            array_push($videos, $video);
        }

        return $videos;
    }

    private function extractCollections($items)
    {
        $collections = array();

        foreach($items as $item)
        {
            $collection = new Collection();
            $collection->instantiate($item);

            array_push($collections, $collection);
        }

        return $collections;
    }

    private function extractUserInfos($response)
    {
        $userInfos = new UserInfos();
        $userInfos->instantiate($response);

        return $userInfos;
    }
}
