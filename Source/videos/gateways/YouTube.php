<?php
namespace Dukt\Videos\Gateways;

use Craft\Craft;
use Craft\Videos_VideoModel;

class YouTube extends BaseGateway
{
    // Public Methods
    // =========================================================================

    public function getApiUrl()
    {
        return 'https://www.googleapis.com/youtube/v3/';
    }

    public function apiQuery()
    {
        return [
            'access_token' => $this->token->accessToken
        ];
    }

    public function getOauthProvider()
    {
        return 'Google';
    }

    public function getOauthScope()
    {
        return array(
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/youtube',
            'https://www.googleapis.com/auth/youtube.readonly'
        );
    }

    public function getOauthAuthorizationOptions()
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

        $response = $this->api('videos', array(
            'part' => 'snippet,statistics,contentDetails',
            'id' => $opts['id']
        ));

        $videos = $this->parseVideos($response['items']);

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
        return $this->performVideosRequest('favorites', $params);
    }

    protected function getVideosPlaylist($params = array())
    {
        $pagination = $this->pagination($params);

        $data = array(
            'part' => 'id,snippet',
            'playlistId' => $params['id'],
            'maxResults' => $pagination['perPage']
        );

        if(!empty($pagination['moreToken']))
        {
            $data['pageToken'] = $pagination['moreToken'];
        }

        $playlistItemsResponse = $this->api('playlistItems', $data);

        $videoIds = array();

        foreach($playlistItemsResponse['items'] as $item)
        {
            $videoId = $item['snippet']['resourceId']['videoId'];

            array_push($videoIds, $videoId);
        }

        $videoIds = implode(",", $videoIds);

        $videosResponse = $this->api('videos', array(
            'part' => 'snippet,statistics,contentDetails',
            'id' => $videoIds
        ));

        $videos = $this->parseVideos($videosResponse['items']);

        $more = false;

        if(!empty($playlistItemsResponse['nextPageToken']) && count($videos) > 0)
        {
            $more = true;
        }

        return array(
                'prevPage' => (isset($playlistItemsResponse['prevPageToken']) ? $playlistItemsResponse['prevPageToken'] : null),
                'moreToken' => (isset($playlistItemsResponse['nextPageToken']) ? $playlistItemsResponse['nextPageToken'] : null),
                'videos' => $videos,
                'more' => $more
            );
    }

    protected function getVideosSearch($params = array())
    {
        $pagination = $this->pagination($params);

        $data = array(
            'part' => 'id',
            'type' => 'video',
            'q' => $params['q'],
            'maxResults' => $pagination['perPage']
        );

        if(!empty($pagination['moreToken']))
        {
            $data['pageToken'] = $pagination['moreToken'];
        }

        $response = $this->api('search', $data);

        foreach($response['items'] as $item)
        {
            $videoIds[] = $item['id']['videoId'];
        }

        if(!empty($videoIds))
        {
            $videoIds = implode(",", $videoIds);

            $videosResponse = $this->api('videos', array(
                'part' => 'snippet,statistics,contentDetails',
                'id' => $videoIds
            ));

            $videos = $this->parseVideos($videosResponse['items']);

            $more = false;

            if(!empty($response['nextPageToken']) && count($videos) > 0)
            {
                $more = true;
            }

            return array(
                'prevPage' => (isset($response['prevPageToken']) ? $response['prevPageToken'] : null),
                'moreToken' => (isset($response['nextPageToken']) ? $response['nextPageToken'] : null),
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

    private function getCollectionsPlaylists($params = array())
    {
        $channelsResponse = $this->api('playlists', array(
                'part' => 'snippet',
                'mine' => 'true'
            ));

        return $this->parseCollections($channelsResponse['items']);
    }

    private function pagination($params = array())
    {
        $pagination = array(
            'page' => 1,
            'perPage' => Craft::app()->config->get('videosPerPage', 'videos'),
            'moreToken' => false
        );

        if(!empty($params['perPage']))
        {
            $pagination['perPage'] = $params['perPage'];
        }

        if(!empty($params['moreToken']))
        {
            $pagination['moreToken'] = $params['moreToken'];
        }

        return $pagination;
    }
    private function parseCollection($item)
    {
        $collection = array();
        $collection['id']          = $item['id'];
        $collection['title']       = $item['snippet']['title'];
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
        $video = new Videos_VideoModel;
        $video->authorName = $item['snippet']['channelTitle'];
        $video->authorUrl = "http://youtube.com/channel/".$item['snippet']['channelId'];
        $video->date = strtotime($item['snippet']['publishedAt']);
        $video->description = $item['snippet']['description'];
        $video->gatewayHandle = 'youtube';
        $video->gatewayName = 'YouTube';
        $video->id = $item['id'];
        $video->plays = $item['statistics']['viewCount'];
        $video->title = $item['snippet']['title'];
        $video->url = 'http://youtu.be/'.$video->id;

        // duration
        $interval              = new \DateInterval($item['contentDetails']['duration']);
        $video->durationSeconds = ($interval->d * 86400) + ($interval->h * 3600) + ($interval->i * 60) + $interval->s;

        // thumbnails


        // Retrieve largest thumbnail

        $largestSize = 0;

        if(is_array($item['snippet']['thumbnails']))
        {
            foreach($item['snippet']['thumbnails'] as $thumbnail)
            {
                if($thumbnail['width'] > $largestSize)
                {
                    $video->thumbnailSource = $thumbnail['url'];
                    $largestSize = $thumbnail['width'];
                }
            }
        }

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
        $pagination = $this->pagination($params);

        $channelsResponse = $this->api('channels', array(
            'part' => 'contentDetails',
            'mine' => 'true'
        ));

        foreach ($channelsResponse['items'] as $channel)
        {
            $uploadsListId = $channel['contentDetails']['relatedPlaylists'][$playlist];

            $data = array(
                'part' => 'id,snippet',
                'playlistId' => $uploadsListId,
                'maxResults' => $pagination['perPage']
            );

            if(!empty($pagination['moreToken']))
            {
                $data['pageToken'] = $pagination['moreToken'];
            }

            $playlistItemsResponse = $this->api('playlistItems', $data);

            $videoIds = array();

            foreach($playlistItemsResponse['items'] as $item)
            {
                $videoId = $item['snippet']['resourceId']['videoId'];

                array_push($videoIds, $videoId);
            }

            $videoIds = implode(",", $videoIds);

            $videosResponse = $this->api('videos', array(
                'part' => 'snippet,statistics,contentDetails',
                'id' => $videoIds
            ));

            $videos = $this->parseVideos($videosResponse['items']);

            $more = false;

            if(!empty($playlistItemsResponse['nextPageToken']) && count($videos) > 0)
            {
                $more = true;
            }

           return array(
                    'prevPage' => (isset($playlistItemsResponse['prevPageToken']) ? $playlistItemsResponse['prevPageToken'] : null),
                    'moreToken' => (isset($playlistItemsResponse['nextPageToken']) ? $playlistItemsResponse['nextPageToken'] : null),
                    'videos' => $videos,
                    'more' => $more
                );
        }
    }
}
