<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\gateways;

use dukt\videos\base\Gateway;
use dukt\videos\errors\CollectionParsingException;
use dukt\videos\errors\VideoNotFoundException;
use dukt\videos\helpers\VideosHelper;
use dukt\videos\models\Collection;
use dukt\videos\models\Section;
use dukt\videos\models\Video;
use GuzzleHttp\Client;
use DateTime;

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
                    'icon' => 'video-camera',
                ]),
                new Collection([
                    'name' => 'Likes',
                    'method' => 'likes',
                    'icon' => 'thumb-up'
                ]),
            ]
        ]);


        // Folders

        $folders = $this->getCollectionsFolders();

        $collections = [];

        foreach ($folders as $folder) {
            $collections[] = new Collection([
                'name' => $folder['title'],
                'method' => 'folder',
                'options' => ['id' => $folder['id']],
                'icon' => 'folder',
            ]);
        }

        if ($collections !== []) {
            $sections[] = new Section([
                'name' => 'Folders',
                'collections' => $collections,
            ]);
        }

        // Albums

        $albums = $this->getCollectionsAlbums();

        $collections = [];

        foreach ($albums as $album) {
            $collections[] = new Collection([
                'name' => $album['title'],
                'method' => 'album',
                'options' => ['id' => $album['id']],
                'icon' => 'layout'
            ]);
        }

        if ($collections !== []) {
            $sections[] = new Section([
                'name' => 'Showcases',
                'collections' => $collections,
            ]);
        }


        // channels

        $channels = $this->getCollectionsChannels();

        $collections = [];

        foreach ($channels as $channel) {
            $collections[] = new Collection([
                'name' => $channel['title'],
                'method' => 'channel',
                'options' => ['id' => $channel['id']],
            ]);
        }

        if ($collections !== []) {
            $sections[] = new Section([
                'name' => 'Channels',
                'collections' => $collections,
            ]);
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
        $data = $this->get('videos/' . $id, [
            'query' => [
                'fields' => 'created_time,description,duration,height,link,name,pictures,pictures,player_embed_url,privacy,stats,uri,user,width,download,review_link,files'
            ],
        ]);

        if ($data !== []) {
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
                'Accept' => 'application/vnd.vimeo.*+json;version=' . $this->getApiVersion(),
                'Authorization' => 'Bearer ' . $this->getOauthToken()->getToken()
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
        return $this->performVideosRequest('me/albums/' . $albumId . '/videos', $params);
    }

    /**
     * Returns a list of videos in an folder
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosFolder(array $params = []): array
    {
        $folderId = $params['id'];
        unset($params['id']);

        // folders/#folder_id
        return $this->performVideosRequest('me/folders/' . $folderId . '/videos', $params);
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

        return $this->performVideosRequest('channels/' . $params['channel_id'] . '/videos', $params);
    }

    /**
     * Returns a list of favorite videos
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosLikes(array $params = []): array
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
        $query = $this->queryFromParams($params);
        $query['fields'] = 'name,uri,stats';

        $data = $this->get('me/albums', [
            'query' => $query,
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
    private function getCollectionsFolders(array $params = []): array
    {
        $query = $this->queryFromParams($params);
        $query['fields'] = 'name,uri';

        $data = $this->get('me/folders', [
            'query' => $query
        ]);

        return $this->parseCollections('folder', $data['data']);
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
        $query = $this->queryFromParams($params);
        $query['fields'] = 'name,uri';

        $data = $this->get('me/channels', [
            'query' => $query
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
                case 'folder':
                    $parsedCollection = $this->parseCollectionFolder($collection);
                    break;
                case 'album':
                    $parsedCollection = $this->parseCollectionAlbum($collection);
                    break;
                case 'channel':
                    $parsedCollection = $this->parseCollectionChannel($collection);
                    break;

                default:
                    throw new CollectionParsingException('Couldn’t parse collection of type ”' . $type . '“.');
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
        $collection['totalVideos'] = $data['stats']['videos'] ?? 0;

        return $collection;
    }

    /**
     * @param $data
     *
     * @return array
     */
    private function parseCollectionFolder($data): array
    {
        $collection = [];
        $collection['id'] = substr($data['uri'], strpos($data['uri'], '/projects/') + \strlen('/projects/'));
        $collection['url'] = $data['uri'];
        $collection['title'] = $data['name'];
        $collection['totalVideos'] = $data['metadata']['connections']['videos']['total'] ?? 0;

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
        $collection['totalVideos'] = $data['stats']['videos'] ?? 0;

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
     * Parse video.
     *
     * @param array $data
     *
     * @return Video
     */
    private function parseVideo(array $data): Video
    {
        $video = new Video;
        $video->raw = $data;
        $video->authorName = $data['user']['name'];
        $video->authorUrl = $data['user']['link'];
        $video->date = new DateTime($data['created_time']);
        $video->description = $data['description'];
        $video->gatewayHandle = 'vimeo';
        $video->gatewayName = 'Vimeo';
        $video->id = (int)substr($data['uri'], \strlen('/videos/'));
        $video->plays = $data['stats']['plays'] ?? 0;
        $video->title = $data['name'];
        $video->url = $data['link'];
        $video->embedUrl = $data['player_embed_url'];
        $video->width = $data['width'];
        $video->height = $data['height'];

        // Video duration
        $video->durationSeconds = $data['duration'];
        $video->duration8601 = VideosHelper::getDuration8601($data['duration']);

        $this->parsePrivacy($video, $data);
        $this->parseThumbnails($video, $data);

        return $video;
    }

    /**
     * Parse video’s privacy data.
     *
     * @param Video $video
     * @param array $data
     * @return null
     */
    private function parsePrivacy(Video $video, array $data)
    {
        $privacyOptions = ['nobody', 'contacts', 'password', 'users', 'disable'];

        if (in_array($data['privacy']['view'], $privacyOptions, true)) {
            $video->private = true;
        }

        return null;
    }


    /**
     * Parse thumbnails.
     *
     * @param Video $video
     * @param array $data
     *
     * @return null
     */
    private function parseThumbnails(Video $video, array $data)
    {
        if (!\is_array($data['pictures'])) {
            return null;
        }

        $largestSize = 0;

        foreach ($this->getVideoDataPictures($data, 'thumbnail') as $picture) {
            // Retrieve highest quality thumbnail
            if ($picture['width'] > $largestSize) {
                $video->thumbnailSource = $picture['link'];
                $largestSize = $picture['width'];
            }
        }


        $video->thumbnailLargeSource = $video->thumbnailSource;

        return null;
    }

    /**
     * Get video data pictures.
     *
     * @param array $data
     * @param string $type
     * @return array
     */
    private function getVideoDataPictures(array $data, string $type = 'thumbnail'): array
    {
        $pictures = [];

        foreach ($data['pictures'] as $picture) {
            if ($picture['type'] === $type) {
                $pictures[] = $picture;
            }
        }

        return $pictures;
    }

    /**
     * @param $uri
     * @param $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    private function performVideosRequest($uri, array $params): array
    {
        $query = $this->queryFromParams($params);
        $query['fields'] = 'created_time,description,duration,height,link,name,pictures,pictures,player_embed_url,privacy,stats,uri,user,width,download,review_link,files';

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
        $query = [
            'full_response' => 1,
            'page' => 1,
            'per_page' => $this->getVideosPerPage(),
        ];

        if (!empty($params['moreToken'])) {
            $query['page'] = $params['moreToken'];
            unset($params['moreToken']);
        }

        if (!empty($params['q'])) {
            $query['query'] = $params['q'];
            unset($params['q']);
        }

        return array_merge($query, $params);
    }
}
