<?php
namespace Dukt\Videos\Gateways;

use \Google_Client;
use \Google_Service_YouTube;

class YouTube extends BaseGateway
{
    // Public Methods
    // =========================================================================

    public function getOAuthProvider()
    {
        return 'Google';
    }

    public function getOAuthScope()
    {
        return array(
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/youtube',
            'https://www.googleapis.com/auth/youtube.readonly'
        );
    }

    public function getOAuthParams()
    {
        return array(
            'access_type' => 'offline',
            'approval_prompt' => 'force'
        );
    }

    public function getName()
    {
        return "YouTube";
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


        // playlists

        $playlists = $this->getCollectionsPlaylists();

        if(is_array($playlists))
        {
            $items = array();

            foreach($playlists as $playlist)
            {
                $item = array(
                    'name' => $playlist['title'],
                    'method' => 'playlist',
                    'options' => array('id' => $playlist['id'])
                );

                $items[] = $item;
            }

            if(count($items) > 0)
            {
                $sections['Playlists'] = $items;
            }
        }

        return $sections;
    }

    public function getVideo($opts)
    {
        if(empty($opts['id']))
        {
            throw new \Exception('The video ID is required. (empty found)');
        }

        $client = $this->api();
        $videos = $client->videos->listVideos('snippet,statistics,contentDetails', array('id' => $opts['id']));
        $videos = $this->parseVideos($videos);

        if(count($videos) == 1)
        {
            return array_pop($videos);
        }
        else
        {
            throw new \Exception('Video not found');
        }
    }

    // Protected Methods
    // =========================================================================

    protected function getBoolParameters()
    {
        return array('autohide', 'cc_load_policy', 'controls', 'disablekb', 'fs', 'modestbranding', 'rel', 'showinfo');
    }

    protected function getEmbedFormat()
    {
        return "https://www.youtube.com/embed/%s?wmode=transparent";
    }

    protected static function getVideoId($url)
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

    protected function getVideosFavorites($params = array())
    {
        // if the account has no playlist or favorites, an exception is thrown.
        // catch the exception and return response with no videos

        try
        {
            return $this->performVideosRequest('favorites', $params);
        }
        catch(\Exception $e)
        {
           return array(
                    'videos' => array(),
                    'more' => false
                );
        }
    }

    protected function getVideosPlaylist($params = array())
    {
        $pagination = $this->_pagination($params);

        $client = $this->api();

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
        $videos = $this->parseVideos($videosResponse);

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

    protected function getVideosSearch($params = array())
    {
        $pagination = $this->_pagination($params);

        $client = $this->api();

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
            $videos = $this->parseVideos($videosResponse);

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

    protected function getVideosUploads($params = array())
    {
        return $this->performVideosRequest('uploads', $params);
    }

    // Private Methods
    // =========================================================================

    private function api()
    {
        // make token compatible with Google library
        $arrayToken = array();
        $arrayToken['created'] = 0;
        $arrayToken['access_token'] = $this->token->accessToken;
        $arrayToken['expires_in'] = $this->token->endOfLife;

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

    private function getCollectionsPlaylists($params = array())
    {
        $client = $this->api();

        $channelsResponse = $client->playlists->listPlaylists('snippet', array(
          'mine' => 'true',
        ));

        return $this->parseCollections($channelsResponse['items']);
    }

    private function pagination($params = array())
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
    private function parseCollection($item)
    {
        $collection = array();
        $collection['id']          = $item->id;
        $collection['title']       = $item->snippet->title;
        $collection['totalVideos'] = 0;
        $collection['url']         = 'title';

        return $collection;
    }

    private function parseCollections($items)
    {
        $collections = array();

        foreach($items as $item)
        {
            $collection = $this->parseCollection($item);

            array_push($collections, $collection);
        }

        return $collections;
    }
    private function parseUser()
    {
        $this->id = (string) $response->id;
        $this->id = substr($this->id, (strpos($this->id, ":user:") + 6));
        $this->name = (string) $response->author->name;
    }

    private function parseVideo($item)
    {
        $video['raw'] = $item;

        // populate video object
        $video['gatewayHandle'] = "youtube";
        $video['gatewayName']   = "YouTube";
        $video['id']            = $item->id;
        $video['plays']         = $item->statistics->viewCount;
        $video['title']         = $item->snippet->title;
        $video['url']           = 'http://youtu.be/'.$video['id'];
        $video['authorName']    = $item->snippet->channelTitle;
        $video['authorUrl']     = "http://youtube.com/channel/".$item->snippet->channelId;
        $video['date']          = strtotime($item->snippet->publishedAt);
        $video['description']   = $item->snippet->description;


        // thumbnail
        if(@$item->snippet->thumbnails->medium->url)
        {
            $video['thumbnail'] = $item->snippet->thumbnails->medium->url;
        }
        elseif(@$item->snippet->thumbnails->default->url)
        {
            $video['thumbnail'] = $item->snippet->thumbnails->default->url;
        }

        // thumbnailLarge
        if(@$item->snippet->thumbnails->maxres->url)
        {
            $video['thumbnailLarge'] = $item->snippet->thumbnails->maxres->url;
        }
        elseif(@$item->snippet->thumbnails->high->url)
        {
            $video['thumbnailLarge'] = $item->snippet->thumbnails->high->url;
        }
        elseif(@$item->snippet->thumbnails->standard->url)
        {
            $video['thumbnailLarge'] = $item->snippet->thumbnails->standard->url;
        }
        elseif(@$item->snippet->thumbnails->medium->url)
        {
            $video['thumbnailLarge'] = $item->snippet->thumbnails->medium->url;
        }
        elseif(@$item->snippet->thumbnails->default->url)
        {
            $video['thumbnailLarge'] = $item->snippet->thumbnails->default->url;
        }

        // duration
        $interval              = new \DateInterval($item->contentDetails->duration);
        $video['durationSeconds'] = ($interval->d * 86400) + ($interval->h * 3600) + ($interval->i * 60) + $interval->s;
        $video['duration']        = VideosHelper::getDuration($video['durationSeconds']);

        // aliases
        $video['embedUrl']             = $this->getEmbedUrl($video['id']);
        $video['embedHtml']            = $this->getEmbedHtml($video['id']);
        $video['thumbnailSource']      = $video['thumbnail'];
        $video['thumbnailSourceLarge'] = $video['thumbnailLarge'];

        return $video;
    }

    private function parseVideos($items)
    {
        $videos = array();

        foreach($items as $v)
        {
            $video = $this->parseVideo($v);

            array_push($videos, $video);
        }

        return $videos;
    }

    private function performVideosRequest($playlist, $params = array())
    {
        $pagination = $this->_pagination($params);

        $client = $this->api();

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
            $videos = $this->parseVideos($videosResponse);

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
}