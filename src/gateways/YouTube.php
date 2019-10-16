<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2019, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\gateways;

use dukt\videos\base\Gateway;
use dukt\videos\errors\VideoNotFoundException;
use dukt\videos\models\Collection;
use dukt\videos\models\Section;
use dukt\videos\models\Video;
use GuzzleHttp\Client;

/**
 * YouTube represents the YouTube gateway
 *
 * @author    Dukt <support@dukt.net>
 * @since     1.0
 */
class YouTube extends Gateway
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
        return '@dukt/videos/icons/youtube.svg';
    }

    /**
     * @inheritDoc
     *
     * @return string
     */
    public function getName(): string
    {
        return 'YouTube';
    }

    /**
     * Returns the OAuth provider’s name.
     *
     * @return string
     */
    public function getOauthProviderName(): string
    {
        return 'Google';
    }

    /**
     * Returns the OAuth provider’s API console URL.
     *
     * @return string
     */
    public function getOauthProviderApiConsoleUrl(): string
    {
        return 'https://console.developers.google.com/';
    }

    /**
     * @inheritDoc
     *
     * @return array
     */
    public function getOauthScope(): array
    {
        return [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/youtube',
            'https://www.googleapis.com/auth/youtube.readonly'
        ];
    }

    /**
     * @inheritDoc
     *
     * @return array
     */
    public function getOauthAuthorizationOptions(): array
    {
        return [
            'access_type' => 'offline',
            'prompt' => 'consent',
        ];
    }

    /**
     * @inheritdoc
     */
    public function getOauthProviderOptions(): array
    {
        $options = parent::getOauthProviderOptions();

        if(!isset($options['useOidcMode'])) {
            $options['useOidcMode'] = true;
        }

        return $options;
    }

    /**
     * @inheritDoc
     *
     * @param array $options
     *
     * @return \League\OAuth2\Client\Provider\Google
     */
    public function createOauthProvider(array $options): \League\OAuth2\Client\Provider\Google
    {
        return new \League\OAuth2\Client\Provider\Google($options);
    }

    /**
     * @inheritDoc
     *
     * @return array
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
                    'name' => 'Liked videos',
                    'method' => 'likes',
                ])
            ]
        ]);


        // Playlists

        $playlists = $this->getCollectionsPlaylists();

        $collections = [];

        foreach ($playlists as $playlist) {
            $collections[] = new Collection([
                'name' => $playlist['title'],
                'method' => 'playlist',
                'options' => ['id' => $playlist['id']],
            ]);
        }

        if (\count($collections) > 0) {
            $sections[] = new Section([
                'name' => 'Playlists',
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
        $data = $this->get('videos', [
            'query' => [
                'part' => 'snippet,statistics,contentDetails',
                'id' => $id
            ]
        ]);

        $videos = $this->parseVideos($data['items']);

        if (\count($videos) === 1) {
            return array_pop($videos);
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
        return 'https://www.youtube.com/embed/%s?wmode=transparent';
    }

    /**
     * @inheritDoc
     *
     * @param $url
     *
     * @return bool|string
     */
    public function extractVideoIdFromUrl(string $url)
    {
        // check if url works with this service and extract video_id

        $video_id = false;

        $regexp = ['/^https?:\/\/(www\.youtube\.com|youtube\.com|youtu\.be).*\/(watch\?v=)?(.*)/', 3];

        if (preg_match($regexp[0], $url, $matches, PREG_OFFSET_CAPTURE) > 0) {
            // regexp match key
            $match_key = $regexp[1];

            // define video id
            $video_id = $matches[$match_key][0];

            // Fixes the youtube &feature_gdata bug
            if (strpos($video_id, '&')) {
                $video_id = substr($video_id, 0, strpos($video_id, '&'));
            }
        }

        // here we should have a valid video_id or false if service not matching
        return $video_id;
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

    // Protected Methods
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
                'Authorization' => 'Bearer '.$this->getOauthToken()->getToken()
            ]
        ];

        return new Client($options);
    }

    /**
     * Returns a list of liked videos.
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosLikes(array $params = []): array
    {
        $query = [];
        $query['part'] = 'snippet,statistics,contentDetails';
        $query['myRating'] = 'like';
        $query = array_merge($query, $this->paginationQueryFromParams($params));

        $videosResponse = $this->get('videos', ['query' => $query]);

        $videos = $this->parseVideos($videosResponse['items']);

        return array_merge([
            'videos' => $videos,
        ], $this->paginationResponse($videosResponse, $videos));
    }

    /**
     * Returns a list of videos in a playlist.
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosPlaylist(array $params = []): array
    {
        // Get video IDs from playlist items

        $videoIds = [];

        $query = [];
        $query['part'] = 'id,snippet';
        $query['playlistId'] = $params['id'];
        $query = array_merge($query, $this->paginationQueryFromParams($params));

        $playlistItemsResponse = $this->get('playlistItems', ['query' => $query]);

        foreach ($playlistItemsResponse['items'] as $item) {
            $videoId = $item['snippet']['resourceId']['videoId'];
            $videoIds[] = $videoId;
        }


        // Get videos from video IDs

        $query = [];
        $query['part'] = 'snippet,statistics,contentDetails';
        $query['id'] = implode(',', $videoIds);

        $videosResponse = $this->get('videos', ['query' => $query]);
        $videos = $this->parseVideos($videosResponse['items']);

        return array_merge([
            'videos' => $videos,
        ], $this->paginationResponse($playlistItemsResponse, $videos));
    }

    /**
     * Returns a list of videos from a search request.
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosSearch(array $params = []): array
    {
        // Get video IDs from search results
        $videoIds = [];

        $query = [];
        $query['part'] = 'id';
        $query['type'] = 'video';
        $query['q'] = $params['q'];
        $query = array_merge($query, $this->paginationQueryFromParams($params));

        $searchResponse = $this->get('search', ['query' => $query]);

        foreach ($searchResponse['items'] as $item) {
            $videoIds[] = $item['id']['videoId'];
        }


        // Get videos from video IDs

        if (\count($videoIds) > 0) {

            $query = [];
            $query['part'] = 'snippet,statistics,contentDetails';
            $query['id'] = implode(',', $videoIds);

            $videosResponse = $this->get('videos', ['query' => $query]);

            $videos = $this->parseVideos($videosResponse['items']);

            return array_merge([
                'videos' => $videos,
            ], $this->paginationResponse($searchResponse, $videos));
        }

        return [];
    }

    /**
     * Returns a list of uploaded videos.
     *
     * @param array $params
     *
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    protected function getVideosUploads(array $params = []): array
    {
        $uploadsPlaylistId = $this->getSpecialPlaylistId('uploads');

        if (!$uploadsPlaylistId) {
            return [];
        }


        // Retrieve video IDs

        $query = [];
        $query['part'] = 'id,snippet';
        $query['playlistId'] = $uploadsPlaylistId;
        $query = array_merge($query, $this->paginationQueryFromParams($params));

        $playlistItemsResponse = $this->get('playlistItems', ['query' => $query]);

        $videoIds = [];

        foreach ($playlistItemsResponse['items'] as $item) {
            $videoId = $item['snippet']['resourceId']['videoId'];
            $videoIds[] = $videoId;
        }


        // Retrieve videos from video IDs

        $query = [];
        $query['part'] = 'snippet,statistics,contentDetails,status';
        $query['id'] = implode(',', $videoIds);

        $videosResponse = $this->get('videos', ['query' => $query]);

        $videos = $this->parseVideos($videosResponse['items']);

        return array_merge([
            'videos' => $videos,
        ], $this->paginationResponse($playlistItemsResponse, $videos));
    }

    // Private Methods
    // =========================================================================

    /**
     * @return string
     */
    private function getApiUrl(): string
    {
        return 'https://www.googleapis.com/youtube/v3/';
    }

    /**
     * @return array
     * @throws \dukt\videos\errors\ApiResponseException
     */
    private function getCollectionsPlaylists(): array
    {
        $data = $this->get('playlists', [
            'query' => [
                'part' => 'snippet',
                'mine' => 'true'
            ]
        ]);

        return $this->parseCollections($data['items']);
    }

    /**
     * @return null|mixed
     * @throws \dukt\videos\errors\ApiResponseException
     */
    private function getSpecialPlaylists()
    {
        $channelsQuery = [
            'part' => 'contentDetails',
            'mine' => 'true'
        ];

        $channelsResponse = $this->get('channels', ['query' => $channelsQuery]);

        if (isset($channelsResponse['items'][0])) {
            $channel = $channelsResponse['items'][0];

            return $channel['contentDetails']['relatedPlaylists'];
        }

        return null;
    }

    /**
     * Retrieves playlist ID for special playlists of type: likes, favorites, uploads.
     *
     * @param string $type
     *
     * @return null|mixed
     * @throws \dukt\videos\errors\ApiResponseException
     */
    private function getSpecialPlaylistId(string $type)
    {
        $specialPlaylists = $this->getSpecialPlaylists();

        if (isset($specialPlaylists[$type])) {
            return $specialPlaylists[$type];
        }

        return null;
    }

    /**
     * @param array $params
     *
     * @return array
     */
    private function paginationQueryFromParams(array $params = []): array
    {
        // Pagination

        $pagination = [
            'page' => 1,
            'perPage' => $this->getVideosPerPage(),
            'moreToken' => false
        ];

        if (!empty($params['perPage'])) {
            $pagination['perPage'] = $params['perPage'];
        }

        if (!empty($params['moreToken'])) {
            $pagination['moreToken'] = $params['moreToken'];
        }


        // Query

        $query = [];
        $query['maxResults'] = $pagination['perPage'];

        if (!empty($pagination['moreToken'])) {
            $query['pageToken'] = $pagination['moreToken'];
        }

        return $query;
    }

    /**
     * @param $response
     * @param $videos
     *
     * @return array
     */
    private function paginationResponse($response, $videos): array
    {
        $more = false;

        if (!empty($response['nextPageToken']) && \count($videos) > 0) {
            $more = true;
        }

        return [
            'prevPage' => $response['prevPageToken'] ?? null,
            'moreToken' => $response['nextPageToken'] ?? null,
            'more' => $more
        ];
    }

    /**
     * @param $item
     *
     * @return array
     */
    private function parseCollection($item): array
    {
        $collection = [];
        $collection['id'] = $item['id'];
        $collection['title'] = $item['snippet']['title'];
        $collection['totalVideos'] = 0;
        $collection['url'] = 'title';

        return $collection;
    }

    /**
     * @param $items
     *
     * @return array
     */
    private function parseCollections($items): array
    {
        $collections = [];

        foreach ($items as $item) {
            $collection = $this->parseCollection($item);
            $collections[] = $collection;
        }

        return $collections;
    }

    /**
     * @param $data
     *
     * @return Video
     * @throws \Exception
     */
    private function parseVideo($data): Video
    {
        $video = new Video;
        $video->raw = $data;
        $video->authorName = $data['snippet']['channelTitle'];
        $video->authorUrl = 'http://youtube.com/channel/'.$data['snippet']['channelId'];
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
        $video->durationSeconds = (int) date_create('@0')->add($interval)->getTimestamp();
        $video->duration8601 = $data['contentDetails']['duration'];

        // Thumbnails
        $video->thumbnailSource = $this->getThumbnailSource($data['snippet']['thumbnails']);

        // Privacy
        if (!empty($data['status']['privacyStatus']) && $data['status']['privacyStatus'] === 'private') {
            $video->private = true;
        }

        return $video;
    }

    /**
     * Get the thumbnail source.
     *
     * @param array $thumbnails
     * @return null|string
     */
    private function getThumbnailSource(array $thumbnails)
    {
        if (!isset($thumbnails['medium'])) {
            return $this->getLargestThumbnail($thumbnails);
        }

        return $thumbnails['medium']['url'];
    }

    /**
     * Get the largest thumbnail from an array of thumbnails.
     *
     * @param array $thumbnails
     * @return null|string
     */
    private function getLargestThumbnail(array $thumbnails)
    {
        $largestSize = 0;
        $largestThumbnail = null;

        foreach ($thumbnails as $thumbnail) {
            if ($thumbnail['width'] > $largestSize) {
                // Set thumbnail source with the largest thumbnail
                $largestThumbnail = $thumbnail['url'];
                $largestSize = $thumbnail['width'];
            }
        }

        return $largestThumbnail;
    }

    /**
     * @param $data
     *
     * @return array
     * @throws \Exception
     */
    private function parseVideos($data): array
    {
        $videos = [];

        foreach ($data as $videoData) {
            $video = $this->parseVideo($videoData);
            $videos[] = $video;
        }

        return $videos;
    }
}
