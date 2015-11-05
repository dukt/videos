<?php
namespace Dukt\Videos\Gateways;

use Craft\Craft;
use Craft\Videos_VideoModel;

class Vimeo extends BaseGateway
{
    // Public Methods
    // =========================================================================

    public function getApiUrl()
    {
        return 'https://api.vimeo.com/';
    }

    public function apiQuery()
    {
        return [
            'access_token' => $this->token->accessToken
        ];
    }

    public function getApiVersion()
    {
        return '3.0';
    }

    public function getHeaders()
    {
        return [
            'Accept' => 'application/vnd.vimeo.*+json;version='.$this->getApiVersion()
        ];
    }

    public function getOauthProvider()
    {
        return 'Vimeo';
    }

    public function getName()
    {
        return "Vimeo";
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
                    'name' => $album['title'],
                    'method' => 'album',
                    'options' => array('id' => $album['id'])
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
                    'name' => $channel['title'],
                    'method' => 'channel',
                    'options' => array('id' => $channel['id'])
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

    public function getVideo($opts)
    {
        $response = $this->api('videos/'.$opts['id']);

        if($response)
        {
            return $this->parseVideo($response);
        }
    }

    // Protected Methods
    // =========================================================================

    protected function getEmbedFormat()
    {
        return "https://player.vimeo.com/video/%s";
    }

    protected function getBoolParameters()
    {
        return array('portrait', 'title', 'byline');
    }

    protected static function getVideoId($url)
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

    protected function getVideosAlbum($params = array())
    {
        $albumId = $params['id'];
        unset($params['id']);

         // albums/#album_id
        return $this->performVideosRequest('me/albums/'.$albumId.'/videos', $params);
    }

    protected function getVideosChannel($params = array())
    {
        $params['channel_id'] = $params['id'];
        unset($params['id']);

        return $this->performVideosRequest('channels/'.$params['channel_id'].'/videos', $params);
    }

    protected function getVideosFavorites($params = array())
    {
        return $this->performVideosRequest('me/likes', $params);
    }

    protected function getVideosSearch($params = array())
    {
        return $this->performVideosRequest('videos', $params);
    }

    protected function getVideosUploads($params = array())
    {
        return $this->performVideosRequest('me/videos', $params);
    }

    // Private Methods
    // =========================================================================

    private function getCollectionsAlbums($params = array())
    {
        $query = $this->queryFromParams();
        $response = $this->api('me/albums', $query);

        return $this->parseCollections('album', $response['data']);
    }

    private function getCollectionsChannels($params = array())
    {
        $query = $this->queryFromParams();
        $response = $this->api('me/channels', $query);

        return $this->parseCollections('channel', $response['data']);
    }

    private function parseCollectionAlbum($data)
    {
        $collection = array();
        $collection['id'] = substr($data['uri'], (strpos($data['uri'], '/albums/') + strlen('/albums/')));
        $collection['url'] = $data['uri'];
        $collection['title'] = $data['name'];
        $collection['totalVideos'] = $data['stats']['videos'];

        return $collection;
    }

    private function parseCollectionChannel($data)
    {
        $collection = array();
        $collection['id'] = substr($data['uri'], (strpos($data['uri'], '/channels/') + strlen('/channels/')));
        $collection['url'] = $data['uri'];
        $collection['title'] = $data['name'];
        $collection['totalVideos'] = $data['stats']['videos'];

        return $collection;
    }

    private function parseCollections($type, $data)
    {
        $collections = array();

        foreach($data as $channel)
        {
            $collection = $this->{'parseCollection'.ucwords($type)}($channel);

            array_push($collections, $collection);
        }

        return $collections;
    }

    private function parseUser()
    {
        $this->id = $response->id;
        $this->name = $response->display_name;
    }

    private function parseVideo($data)
    {
        $video = new Videos_VideoModel;
        $video->authorName = $data['user']['name'];
        $video->authorUrl = $data['user']['link'];
        $video->date = strtotime($data['created_time']);
        $video->durationSeconds = $data['duration'];
        $video->description = $data['description'];
        $video->gatewayHandle = "vimeo";
        $video->gatewayName = "Vimeo";
        $video->id = substr($data['uri'], strlen('/videos/'));
        $video->plays = (isset($data['stats']['plays']) ? $data['stats']['plays'] : 0);
        $video->title = $data['name'];
        $video->url = $data['link'];


        // Retrieve largest thumbnail

        $largestSize = 0;
        $thumbSize = 0;

        if(is_array($data['pictures']))
        {
            foreach($data['pictures'] as $picture)
            {
                if($picture['type'] == 'thumbnail')
                {
                    if($picture['width'] > $largestSize)
                    {
                        $video->thumbnailLargeSource = $picture['link'];

                        $largestSize = $picture['width'];
                    }

                    if($picture['width'] > $thumbSize && $thumbSize < 400)
                    {
                        $video->thumbnailSource = $picture['link'];

                        $thumbSize = $picture['width'];
                    }
                }
            }
        }

        if(empty($video->thumbnailSource) && !empty($video->thumbnailLargeSource))
        {
            $video->thumbnailSource = $video->thumbnailLargeSource;
        }

        return $video;
    }

    private function parseVideos($r)
    {
        $videos = array();

        if(!empty($r))
        {
            $responseVideos = $r;

            foreach($responseVideos as $responseVideo)
            {
                $video = $this->parseVideo($responseVideo);

                array_push($videos, $video);
            }
        }

        return $videos;
    }

    private function performVideosRequest($uri, $params, $requireAuthentication = true)
    {
        $query = $this->queryFromParams($params);

        $videosRaw = $this->api($uri, $query);
        $videos = $this->parseVideos($videosRaw['data']);

        $more = false;
        $moreToken = null;

        if($videosRaw['paging']['next'])
        {
            $more = true;
            $moreToken = $query['page'] + 1;
        }

        return array(
            'videos' => $videos,
            'moreToken' => $moreToken,
            'more' => $more
        );
    }

    private function queryFromParams($params = array())
    {
        $query = array();

        $query['full_response'] = 1;

        if(!empty($params['moreToken']))
        {
            $query['page'] = $params['moreToken'];
            unset($params['moreToken']);
        }
        else
        {
            $query['page'] = 1;
        }

        // $params['moreToken'] = $query['page'] + 1;

        if(!empty($params['q']))
        {
            $query['query'] = $params['q'];
            unset($params['q']);
        }

        $query['per_page'] = Craft::app()->config->get('videosPerPage', 'videos');

        if(is_array($params))
        {
            $query = array_merge($query, $params);
        }

        return $query;
    }
}
