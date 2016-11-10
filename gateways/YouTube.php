<?php
namespace Dukt\Videos\Gateways;

use Craft\Craft;
use Craft\VideosPlugin;
use Craft\LogLevel;
use Craft\Videos_CollectionModel;
use Craft\Videos_SectionModel;
use Craft\Videos_VideoModel;
use Guzzle\Http\Client;

class YouTube extends BaseGateway implements IGateway
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritDoc IGateway::getName()
     *
     * @return string
     */
    public function getName()
    {
        return "YouTube";
    }

    /**
     * @inheritDoc IGateway::getOauthProviderHandle()
     *
     * @return string
     */
    public function getOauthProviderHandle()
    {
        return 'google';
    }

    /**
     * @inheritDoc IGateway::getOauthScope()
     *
     * @return array
     */
    public function getOauthScope()
    {
        return array(
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/youtube',
            'https://www.googleapis.com/auth/youtube.readonly'
        );
    }

    /**
     * @inheritDoc IGateway::getOauthAurizationOptions()
     *
     * @return array
     */
    public function getOauthAuthorizationOptions()
    {
        return array(
            'access_type' => 'offline',
            'approval_prompt' => 'force'
        );
    }

    /**
     * @inheritDoc IGateway::getExplorerSections()
     *
     * @return array
     */
    public function getExplorerSections()
    {
        $sections = array();


        // Library

        $sections[] = new Videos_SectionModel([
            'name' => "Library",
            'collections' => [
                new Videos_CollectionModel([
                    'name' => "Uploads",
                    'method' => 'uploads',
                ])
            ]
        ]);


        // Playlists

        $playlists = $this->getCollectionsPlaylists();

        if(is_array($playlists))
        {
            $collections = array();

            foreach($playlists as $playlist)
            {
                $collections[] = new Videos_CollectionModel([
                    'name' => $playlist['title'],
                    'method' => 'playlist',
                    'options' => array('id' => $playlist['id']),
                ]);
            }

            if(count($collections) > 0)
            {
                $sections[] = new Videos_SectionModel([
                    'name' => "Playlists",
                    'collections' => $collections,
                ]);
            }
        }

        return $sections;
    }

    /**
     * @inheritDoc IGateway::getVideoById()
     *
     * @param $id
     *
     * @return Videos_VideoModel
     * @throws \Exception
     */
    public function getVideoById($id)
    {
        $response = $this->apiGet('videos', array(
            'part' => 'snippet,statistics,contentDetails',
            'id' => $id
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

    /**
     * @inheritDoc IGateway::getEmbedFormat()
     *
     * @return string
     */
    public function getEmbedFormat()
    {
        return "https://www.youtube.com/embed/%s?wmode=transparent";
    }

    /**
     * @inheritDoc IGateway::extractVideoIdFromUrl()
     *
     * @param $url
     *
     * @return bool|int
     */
    public function extractVideoIdFromUrl($url)
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


    // Protected Methods
    // =========================================================================

	/**
	 * Returns a list of favorite videos
	 *
	 * @param array $params
	 *
	 * @return array
	 */
    protected function getVideosFavorites($params = array())
    {
        return $this->performVideosRequest('favorites', $params);
    }

	/**
	 * Returns a list of videos in a playlist
	 *
	 * @param array $params
	 *
	 * @return array
	 */
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

        $playlistItemsResponse = $this->apiGet('playlistItems', $data);

        $videoIds = array();

        foreach($playlistItemsResponse['items'] as $item)
        {
            $videoId = $item['snippet']['resourceId']['videoId'];

            array_push($videoIds, $videoId);
        }

        $videoIds = implode(",", $videoIds);

        $videosResponse = $this->apiGet('videos', array(
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

	/**
	 * Returns a list of videos from a search request
	 *
	 * @param array $params
	 *
	 * @return array
	 */
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

        $response = $this->apiGet('search', $data);

        foreach($response['items'] as $item)
        {
            $videoIds[] = $item['id']['videoId'];
        }

        if(!empty($videoIds))
        {
            $videoIds = implode(",", $videoIds);

            $videosResponse = $this->apiGet('videos', array(
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

	/**
	 * Returns a list of uploaded videos
	 *
	 * @param array $params
	 *
	 * @return array
	 */
    protected function getVideosUploads($params = array())
    {
        return $this->performVideosRequest('uploads', $params);
    }

	/**
	 * Returns an authenticated Guzzle client
	 *
	 * @return Client
	 */
	protected function createClient()
	{
		$apiUrl = $this->getApiUrl();

		$client = new Client($apiUrl, array(
			'request.options' => array(
				'headers' => [],
				'query' => [
					'access_token' => $this->token->accessToken
				],
			)
		));

		return $client;
	}

    // Private Methods
    // =========================================================================

	/**
	 * @return string
	 */
	private function getApiUrl()
    {
        return 'https://www.googleapis.com/youtube/v3/';
    }

	/**
	 * @param array $params
	 *
	 * @return array
	 * @throws \Exception
	 */
	private function getCollectionsPlaylists($params = array())
    {
    	try
	    {
		    $channelsResponse = $this->apiGet('playlists', array(
			    'part' => 'snippet',
			    'mine' => 'true'
		    ));

		    return $this->parseCollections($channelsResponse['items']);
	    }
	    catch(\Exception $e)
	    {
		    VideosPlugin::log('Couldn’t get playlists: '.$e->getMessage(), LogLevel::Warning);
	    }
    }

	/**
	 * @param array $params
	 *
	 * @return array
	 */
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

	/**
	 * @param $item
	 *
	 * @return array
	 */
	private function parseCollection($item)
    {
        $collection = array();
        $collection['id']          = $item['id'];
        $collection['title']       = $item['snippet']['title'];
        $collection['totalVideos'] = 0;
        $collection['url']         = 'title';

        return $collection;
    }

	/**
	 * @param $items
	 *
	 * @return array
	 */
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

	/**
	 * @param $data
	 *
	 * @return Videos_VideoModel
	 */
	private function parseVideo($data)
    {
        $video = new Videos_VideoModel;
        $video->raw = $data;
        $video->authorName = $data['snippet']['channelTitle'];
        $video->authorUrl = "http://youtube.com/channel/".$data['snippet']['channelId'];
        $video->date = strtotime($data['snippet']['publishedAt']);
        $video->description = $data['snippet']['description'];
        $video->gatewayHandle = 'youtube';
        $video->gatewayName = 'YouTube';
        $video->id = $data['id'];
        $video->plays = $data['statistics']['viewCount'];
        $video->title = $data['snippet']['title'];
        $video->url = 'http://youtu.be/'.$video->id;


        // Video Duration

        $interval = new \DateInterval($data['contentDetails']['duration']);
        $video->durationSeconds = ($interval->d * 86400) + ($interval->h * 3600) + ($interval->i * 60) + $interval->s;


        // Thumbnails

        $largestSize = 0;

        if(is_array($data['snippet']['thumbnails']))
        {
            foreach($data['snippet']['thumbnails'] as $thumbnail)
            {
                if($thumbnail['width'] > $largestSize)
                {
                    // Set thumbnail source with the largest thumbnail
                    $video->thumbnailSource = $thumbnail['url'];
                    $largestSize = $thumbnail['width'];
                }
            }
        }


	    // Privacy

        if(isset($data['status']['privacyStatus']))
        {
            switch($data['status']['privacyStatus'])
            {
                case 'private':
                    $video->private = true;
                    break;
            }
        }

        return $video;
    }

	/**
	 * @param $data
	 *
	 * @return array
	 */
	private function parseVideos($data)
    {
        $videos = array();

        foreach($data as $videoData)
        {
            $video = $this->parseVideo($videoData);

            array_push($videos, $video);
        }

        return $videos;
    }

	/**
	 * @param       $playlist
	 * @param array $params
	 *
	 * @return array
	 * @throws \Exception
	 */
	private function performVideosRequest($playlist, $params = array())
    {
        $pagination = $this->pagination($params);

        $channelsResponse = $this->apiGet('channels', array(
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

            $playlistItemsResponse = $this->apiGet('playlistItems', $data);

            $videoIds = array();

            foreach($playlistItemsResponse['items'] as $item)
            {
                $videoId = $item['snippet']['resourceId']['videoId'];

                array_push($videoIds, $videoId);
            }

            $videoIds = implode(",", $videoIds);

            $videosResponse = $this->apiGet('videos', array(
                'part' => 'snippet,statistics,contentDetails,status',
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
