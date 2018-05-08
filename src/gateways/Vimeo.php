<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2018, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\gateways;

use dukt\videos\base\Gateway;
use dukt\videos\errors\CollectionParsingException;
use dukt\videos\errors\VideoNotFoundException;
use dukt\videos\models\Collection;
use dukt\videos\models\Section;
use dukt\videos\models\Video;
use GuzzleHttp\Client;

/**
 * Vimeo represents the Vimeo gateway
 *
 * @author    Dukt <support@dukt.net>
 * @since     1.0
 */
class Vimeo extends Gateway
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritDoc
     *
     * @return string
     */
    public function getIconAlias(): string
    {
        return '@dukt/videos/icons/vimeo.svg';
    }

    /**
     * @inheritDoc
     *
     * @return string
     */
    public function getName(): string
    {
        return 'Vimeo';
    }

    /**
     * Returns the OAuth provider’s API console URL.
     *
     * @return string
     */
    public function getOauthProviderApiConsoleUrl(): string
    {
        return 'https://developer.vimeo.com/apps';
    }

    /**
     * @inheritDoc
     *
     * @return array
     */
    public function getOauthScope(): array
    {
        return [
            'public',
            'private',
        ];
    }

    /**
     * Creates the OAuth provider.
     *
     * @param array $options
     *
     * @return \Dukt\OAuth2\Client\Provider\Vimeo
     */
    public function createOauthProvider(array $options): \Dukt\OAuth2\Client\Provider\Vimeo
    {
        return new \Dukt\OAuth2\Client\Provider\Vimeo($options);
    }

    /**
     * @inheritDoc
     *
     * @return array
     * @throws CollectionParsingException
     * @throws \dukt\videos\errors\ApiResponseException
     */
    public function getExplorerSections(): array
    {
        $sections = [];


        // Library

        $sections[] = new Section([
            'name' => 'Library',
            'collections' => [
                new Collection([
                    'name' => 'Uploads',
                    'method' => 'uploads',
                ]),
                new Collection([
                    'name' => 'Favorites',
                    'method' => 'favorites',
                ]),
            ]
        ]);


        // Albums

        $albums = $this->getCollectionsAlbums();

        if (\is_array($albums)) {
            $collections = [];

            foreach ($albums as $album) {
                $collections[] = new Collection([
                    'name' => $album['title'],
                    'method' => 'album',
                    'options' => ['id' => $album['id']]
                ]);
            }

            if (\count($collections) > 0) {
                $sections[] = new Section([
                    'name' => 'Playlists',
                    'collections' => $collections,
                ]);
            }
        }


        // channels

        $channels = $this->getCollectionsChannels();

        if (\is_array($channels)) {
            $collections = [];

            foreach ($channels as $channel) {
                $collections[] = new Collection([
                    'name' => $channel['title'],
                    'method' => 'channel',
                    'options' => ['id' => $channel['id']],
                ]);
            }

            if (\count($collections) > 0) {
                $sections[] = new Section([
                    'name' => 'Channels',
                    'collections' => $collections,
                ]);
            }
        }

        return $sections;
    }

    /**
     * @inheritDoc
     *
     * @param string $id
     *
     * @return Video
     * @throws VideoNotFoundException
     * @throws \dukt\videos\errors\ApiResponseException
     */
    public function getVideoById(string $id): Video
    {
        $data = $this->get('videos/'.$id, [
            'query' => [
                'fields' => 'created_time,description,duration,height,link,name,pictures,pictures,privacy,stats,uri,user,width,download,review_link,files'
            ],
        ]);

        if ($data) {
            return $this->parseVideo($data);
        }

        throw new VideoNotFoundException('Video not found.');
    }

    /**
     * @inheritDoc
     *
     * @return string
     */
    public function getEmbedFormat(): string
    {
        return 'https://player.vimeo.com/video/%s';
    }

    /**
     * @param string $url
     *
     * @return bool|string
     */
    public function extractVideoIdFromUrl(string $url)
    {
        // check if url works with this service and extract video_id

        $videoId = false;

        $regexp = ['/^https?:\/\/(www\.)?vimeo\.com\/([0-9]*)/', 2];

        if (preg_match($regexp[0], $url, $matches, PREG_OFFSET_CAPTURE) > 0) {

            // regexp match key
            $match_key = $regexp[1];


            // define video id
            $videoId = $matches[$match_key][0];


            // Fixes the youtube &feature_gdata bug
            if (strpos($videoId, '&')) {
                $videoId = substr($videoId, 0, strpos($videoId, '&'));
            }
        }

        // here we should have a valid video_id or false if service not matching
        return $videoId;
    }

    /**
     * @inheritDoc
     *
     * @return bool
     */
    public function supportsSearch(): bool
    {
        return true;
    }

    // Protected
    // =========================================================================

    /**
     * Returns an authenticated Guzzle client
     *
     * @return Client
     * @throws \yii\base\InvalidConfigException
     */
    protected function createClient(): Client
    {
        $options = [
            'base_uri' => $this->getApiUrl(),
            'headers' => [
                'Accept' => 'application/vnd.vimeo.*+json;version='.$this->getApiVersion(),
                'Authorization' => 'Bearer '.$this->getOauthToken()->getToken()
            ],
        ];

        return new Client($options);
    }

    /**
     * Returns a list of videos in an album
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosAlbum(array $params = []): array
    {
        $albumId = $params['id'];
        unset($params['id']);

        // albums/#album_id
        return $this->performVideosRequest('me/albums/'.$albumId.'/videos', $params);
    }

    /**
     * Returns a list of videos in a channel
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosChannel(array $params = []): array
    {
        $params['channel_id'] = $params['id'];
        unset($params['id']);

        return $this->performVideosRequest('channels/'.$params['channel_id'].'/videos', $params);
    }

    /**
     * Returns a list of favorite videos
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosFavorites(array $params = []): array
    {
        return $this->performVideosRequest('me/likes', $params);
    }

    /**
     * Returns a list of videos from a search request
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosSearch(array $params = []): array
    {
        return $this->performVideosRequest('videos', $params);
    }

    /**
     * Returns a list of uploaded videos
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosUploads(array $params = []): array
    {
        return $this->performVideosRequest('me/videos', $params);
    }

    // Private Methods
    // =========================================================================

    /**
     * @return string
     */
    private function getApiUrl(): string
    {
        return 'https://api.vimeo.com/';
    }

    /**
     * @return string
     */
    private function getApiVersion(): string
    {
        return '3.0';
    }

    /**
     * @param array $params
     *
     * @return array
     * @throws CollectionParsingException
     * @throws \dukt\videos\errors\ApiResponseException
     */
    private function getCollectionsAlbums(array $params = []): array
    {
        $data = $this->get('me/albums', [
            'query' => $this->queryFromParams($params)
        ]);

        return $this->parseCollections('album', $data['data']);
    }

    /**
     * @param array $params
     *
     * @return array
     * @throws CollectionParsingException
     * @throws \dukt\videos\errors\ApiResponseException
     */
    private function getCollectionsChannels(array $params = []): array
    {
        $data = $this->get('me/channels', [
            'query' => $this->queryFromParams($params)
        ]);

        return $this->parseCollections('channel', $data['data']);
    }

    /**
     * @param $type
     * @param $collections
     *
     * @return array
     * @throws CollectionParsingException
     */
    private function parseCollections($type, array $collections): array
    {
        $parseCollections = [];

        foreach ($collections as $collection) {

            switch ($type) {
                case 'album':
                    $parsedCollection = $this->parseCollectionAlbum($collection);
                    break;
                case 'channel':
                    $parsedCollection = $this->parseCollectionChannel($collection);
                    break;

                default:
                    throw new CollectionParsingException('Couldn’t parse collection of type ”'.$type.'“.');
            }

            $parseCollections[] = $parsedCollection;
        }

        return $parseCollections;
    }

    /**
     * @param $data
     *
     * @return array
     */
    private function parseCollectionAlbum($data): array
    {
        $collection = [];
        $collection['id'] = substr($data['uri'], strpos($data['uri'], '/albums/') + \strlen('/albums/'));
        $collection['url'] = $data['uri'];
        $collection['title'] = $data['name'];
        $collection['totalVideos'] = $data['stats']['videos'];

        return $collection;
    }

    /**
     * @param $data
     *
     * @return array
     */
    private function parseCollectionChannel($data): array
    {
        $collection = [];
        $collection['id'] = substr($data['uri'], strpos($data['uri'], '/channels/') + \strlen('/channels/'));
        $collection['url'] = $data['uri'];
        $collection['title'] = $data['name'];
        $collection['totalVideos'] = $data['stats']['videos'];

        return $collection;
    }

    /**
     * @param $data
     *
     * @return array
     */
    private function parseVideos(array $data): array
    {
        $videos = [];

        if (!empty($data)) {
            foreach ($data as $videoData) {
                $video = $this->parseVideo($videoData);

                $videos[] = $video;
            }
        }

        return $videos;
    }

    /**
     * @param $data
     *
     * @return Video
     */
    private function parseVideo($data): Video
    {
        $video = new Video;
        $video->raw = $data;
        $video->authorName = $data['user']['name'];
        $video->authorUrl = $data['user']['link'];
        $video->date = strtotime($data['created_time']);
        $video->durationSeconds = $data['duration'];
        $video->description = $data['description'];
        $video->gatewayHandle = 'vimeo';
        $video->gatewayName = 'Vimeo';
        $video->id = substr($data['uri'], \strlen('/videos/'));
        $video->plays = ($data['stats']['plays'] ?? 0);
        $video->title = $data['name'];
        $video->url = $data['link'];
        $video->width = $data['width'];
        $video->height = $data['height'];


        // privacy

        switch ($data['privacy']['view']) {
            case 'nobody':
            case 'contacts':
            case 'password':
            case 'users':
            case 'disable':
                $video->private = true;
                break;
        }


        // Retrieve largest thumbnail

        $largestSize = 0;
        $thumbSize = 0;

        if (\is_array($data['pictures'])) {
            foreach ($data['pictures'] as $picture) {
                if ($picture['type'] === 'thumbnail') {
                    if ($picture['width'] > $largestSize) {
                        $video->thumbnailLargeSource = $picture['link'];

                        $largestSize = $picture['width'];
                    }

                    if ($picture['width'] > $thumbSize && $thumbSize < 400) {
                        $video->thumbnailSource = $picture['link'];

                        $thumbSize = $picture['width'];
                    }
                }
            }
        }

        if (empty($video->thumbnailSource) && !empty($video->thumbnailLargeSource)) {
            $video->thumbnailSource = $video->thumbnailLargeSource;
        }

        return $video;
    }

    /**
     * @param $uri
     * @param $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    private function performVideosRequest($uri, $params): array
    {
        $query = $this->queryFromParams($params);

        $data = $this->get($uri, [
            'query' => $query
        ]);

        $videos = $this->parseVideos($data['data']);

        $more = false;
        $moreToken = null;

        if ($data['paging']['next']) {
            $more = true;
            $moreToken = $query['page'] + 1;
        }

        return [
            'videos' => $videos,
            'moreToken' => $moreToken,
            'more' => $more
        ];
    }

    /**
     * @param array $params
     *
     * @return array
     */
    private function queryFromParams(array $params = []): array
    {
        $query = [];

        $query['full_response'] = 1;

        if (!empty($params['moreToken'])) {
            $query['page'] = $params['moreToken'];
            unset($params['moreToken']);
        } else {
            $query['page'] = 1;
        }

        // $params['moreToken'] = $query['page'] + 1;

        if (!empty($params['q'])) {
            $query['query'] = $params['q'];
            unset($params['q']);
        }

        $query['per_page'] = $this->getVideosPerPage();

        if (\is_array($params)) {
            $query = array_merge($query, $params);
        }

        return $query;
    }
}
