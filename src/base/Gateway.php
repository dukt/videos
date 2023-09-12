<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\base;

use Craft;
use craft\helpers\Json;
use craft\helpers\UrlHelper;
use dukt\videos\errors\ApiResponseException;
use dukt\videos\errors\GatewayMethodNotFoundException;
use dukt\videos\errors\JsonParsingException;
use dukt\videos\errors\VideoNotFoundException;
use dukt\videos\models\Video;
use dukt\videos\Plugin as Videos;
use dukt\videos\Plugin;
use dukt\videos\records\Token as TokenRecord;
use GuzzleHttp\Exception\BadResponseException;
use Exception;
use Psr\Http\Message\ResponseInterface;
use yii\web\Response;


/**
 * Gateway is the base class for classes representing video gateways.
 *
 * @author Dukt <support@dukt.net>
 * @since  1.0
 */
abstract class Gateway implements GatewayInterface
{
    // Public Methods
    // =========================================================================

    /**
     * Return the handle of the gateway based on its class name
     *
     * @return string
     */
    public function getHandle(): string
    {
        $handle = \get_class($this);

        return strtolower(substr($handle, strrpos($handle, "\\") + 1));
    }

    /**
     * Returns the icon URL.
     *
     * @return string|false|null
     */
    public function getIconUrl()
    {
        $iconAlias = $this->getIconAlias();

        if (file_exists(Craft::getAlias($iconAlias))) {
            return Craft::$app->assetManager->getPublishedUrl($iconAlias, true);
        }

        return null;
    }

    /**
     * OAuth Connect.
     *
     * @return Response
     * @throws \craft\errors\MissingComponentException
     * @throws \yii\base\InvalidConfigException
     */
    public function oauthConnect(): Response
    {
        $provider = $this->getOauthProvider();

        Craft::$app->getSession()->set('videos.oauthState', $provider->getState());

        $scope = $this->getOauthScope();
        $options = $this->getOauthAuthorizationOptions();

        if (!\is_array($options)) {
            $options = [];
        }

        $options['scope'] = $scope;

        $authorizationUrl = $provider->getAuthorizationUrl($options);

        return Craft::$app->getResponse()->redirect($authorizationUrl);
    }

    /**
     * Returns the gateway's OAuth provider.
     *
     * @return mixed
     * @throws \yii\base\InvalidConfigException
     */
    public function getOauthProvider()
    {
        $options = $this->getOauthProviderOptions();

        return $this->createOauthProvider($options);
    }

    /**
     * Returns the OAuth provider’s name.
     *
     * @return string
     */
    public function getOauthProviderName(): string
    {
        return $this->getName();
    }

    /**
     * Returns the redirect URI.
     *
     * @return string
     */
    public function getRedirectUri(): string
    {
        return UrlHelper::actionUrl('videos/oauth/callback');
    }

    /**
     * OAuth Scope
     *
     * @return array|null
     */
    public function getOauthScope()
    {
        return null;
    }

    /**
     * OAuth Authorization Options
     *
     * @return array|null
     */
    public function getOauthAuthorizationOptions()
    {
        return null;
    }

    /**
     * OAuth Callback
     *
     * @return Response
     * @throws \craft\errors\MissingComponentException
     * @throws \yii\base\InvalidConfigException
     */
    public function oauthCallback(): Response
    {
        $provider = $this->getOauthProvider();

        $code = Craft::$app->getRequest()->getParam('code');

        try {
            // Try to get an access token (using the authorization code grant)
            $token = $provider->getAccessToken('authorization_code', [
                'code' => $code
            ]);

            // Save token
            Videos::$plugin->getOauth()->saveToken($this->getHandle(), $token);

            // Reset session variables

            // Redirect
            Craft::$app->getSession()->setNotice(Craft::t('videos', 'Connected to {gateway}.', ['gateway' => $this->getName()]));
        } catch (Exception $exception) {
            Craft::error('Couldn’t connect to video gateway:' . "\r\n"
                . 'Message: ' . "\r\n" . $exception->getMessage() . "\r\n"
                . 'Trace: ' . "\r\n" . $exception->getTraceAsString(), __METHOD__);

            // Failed to get the token credentials or user details.
            Craft::$app->getSession()->setError($exception->getMessage());
        }

        $redirectUrl = UrlHelper::cpUrl('videos/settings');

        return Craft::$app->getResponse()->redirect($redirectUrl);
    }

    /**
     * Has Token
     *
     * @return bool
     * @throws \yii\base\InvalidConfigException
     */
    public function hasToken(): bool
    {
        $token = Videos::$plugin->getOauth()->getToken($this->getHandle(), false);
        return (bool) $token;
    }

    /**
     * Returns the gateway's OAuth token.
     *
     * @return mixed
     * @throws \yii\base\InvalidConfigException
     */
    public function getOauthToken(): ?\League\OAuth2\Client\Token\AccessToken
    {
        return Videos::$plugin->getOauth()->getToken($this->getHandle());
    }

    /**
     * Whether the OAuth flow should be enable or not for this gateway.
     *
     * @return bool
     */
    public function enableOauthFlow(): bool
    {
        return true;
    }

    /**
     * Returns the HTML of the embed from a video ID.
     *
     * @param Video $video
     * @param array $options
     *
     * @return string
     */
    public function getEmbedHtml(Video $video, array $options = []): string
    {
        $embedAttributes = [
            'title' => 'External video from ' . $this->getHandle(),
            'frameborder' => '0',
            'allowfullscreen' => 'true',
            'allowscriptaccess' => 'true',
            'allow' => 'autoplay; encrypted-media',
        ];

        $disableSize = $options['disable_size'] ?? false;

        if (!$disableSize) {
            $this->parseEmbedAttribute($embedAttributes, $options, 'width', 'width');
            $this->parseEmbedAttribute($embedAttributes, $options, 'height', 'height');
        }

        $title = $options['title'] ?? false;

        if ($title) {
            $this->parseEmbedAttribute($embedAttributes, $options, 'title', 'title');
        }

        $this->parseEmbedAttribute($embedAttributes, $options, 'iframeClass', 'class');

        $embedUrl = $this->getEmbedUrl($video, $options);

        $embedAttributesString = '';

        foreach ($embedAttributes as $key => $value) {
            $embedAttributesString .= ' ' . $key . '="' . $value . '"';
        }

        return '<iframe src="' . $embedUrl . '"' . $embedAttributesString . '></iframe>';
    }

    /**
     * Returns the URL of the embed from a video ID.
     *
     * @param Video $video
     * @param array $options
     *
     * @return string
     */
    public function getEmbedUrl(Video $video, array $options = []): string
    {
        $embedUrl = $video->embedUrl ?: sprintf($this->getEmbedFormat(), $video->id);

        if ($options !== []) {
            $queryMark = '?';

            if (strpos($embedUrl, '?') !== false) {
                $queryMark = '&';
            }

            $options = http_build_query($options);

            $embedUrl .= $queryMark . $options;
        }

        return $embedUrl;
    }

    /**
     * Returns the javascript origin URL.
     *
     * @return string
     * @throws \craft\errors\SiteNotFoundException
     */
    public function getJavascriptOrigin(): string
    {
        return UrlHelper::baseUrl();
    }

    /**
     * Returns the account.
     *
     * @return mixed
     * @throws Exception
     */
    public function getAccount()
    {
        $token = $this->getOauthToken();

        if ($token !== null) {
            $account = Videos::$plugin->getCache()->get(['getAccount', $token]);

            if (!$account) {
                $oauthProvider = $this->getOauthProvider();
                $account = $oauthProvider->getResourceOwner($token);

                Videos::$plugin->getCache()->set(['getAccount', $token], $account);
            }

            if ($account) {
                return $account;
            }
        }

        return null;
    }

    /**
     * Returns a video from its public URL.
     *
     * @param $url
     *
     * @return mixed
     * @throws VideoNotFoundException
     */
    public function getVideoByUrl($url): \dukt\videos\models\Video
    {
        $url = $url['url'];

        $videoId = $this->extractVideoIdFromUrl($url);

        if (!$videoId) {
            throw new VideoNotFoundException('Video not found with url given.');
        }

        return $this->getVideoById($videoId);
    }

    /**
     * Returns a list of videos.
     *
     * @param $method
     * @param $options
     *
     * @return mixed
     * @throws GatewayMethodNotFoundException
     */
    public function getVideos($method, $options)
    {
        $realMethod = 'getVideos' . ucwords($method);

        if (method_exists($this, $realMethod)) {
            return $this->{$realMethod}($options);
        }

        throw new GatewayMethodNotFoundException('Gateway method “' . $realMethod . '” not found.');
    }

    /**
     * Number of videos per page.
     *
     * @return mixed
     */
    public function getVideosPerPage()
    {
        return Videos::$plugin->getSettings()->videosPerPage;
    }

    /**
     * Returns the OAuth provider options.
     *
     * @param bool $parse
     * @throws \yii\base\InvalidConfigException
     * @return mixed[]|null
     */
    public function getOauthProviderOptions(bool $parse = true): array
    {
        return Plugin::getInstance()->getOauthProviderOptions($this->getHandle(), $parse);
    }

    /**
     * Whether the gateway supports search or not.
     *
     * @return bool
     */
    public function supportsSearch(): bool
    {
        return false;
    }

    // Protected Methods
    // =========================================================================

    /**
     * Performs a GET request on the API.
     *
     * @param       $uri
     * @param array $options
     *
     * @return array
     * @throws ApiResponseException
     */
    protected function get($uri, array $options = []): array
    {
        $client = $this->createClient();

        try {
            $response = $client->request('GET', $uri, $options);

            if (Videos::$plugin->getVideos()->pluginDevMode && $this->getHandle() === 'vimeo') {
                Craft::info('URI: '.Json::encode($uri), __METHOD__);
                Craft::info('Options: '.Json::encode($options), __METHOD__);
                Craft::info('Vimeo X-RateLimit-Limit: '.Json::encode($response->getHeader('X-RateLimit-Limit')), __METHOD__);
                Craft::info('Vimeo X-RateLimit-Remaining: '.Json::encode($response->getHeader('X-RateLimit-Remaining')), __METHOD__);
            }

            $body = (string)$response->getBody();
            $data = Json::decode($body);
        } catch (BadResponseException $badResponseException) {
            $response = $badResponseException->getResponse();
            $body = (string)$response->getBody();

            try {
                $data = Json::decode($body);
            } catch (JsonParsingException $jsonParsingException) {
                throw $badResponseException;
            }
        }

        $this->checkResponse($response, $data);

        return $data;
    }

    /**
     * Checks a provider response for errors.
     *
     * @param ResponseInterface $response
     * @param                   $data
     *
     * @throws ApiResponseException
     */
    protected function checkResponse(ResponseInterface $response, $data)
    {
        if (!empty($data['error'])) {
            $code = 0;
            $error = $data['error'];

            if (\is_array($error)) {
                $code = $error['code'];
                $error = $error['message'];
            }

            throw new ApiResponseException($error, $code);
        }
    }

    // Private Methods
    // =========================================================================

    /**
     * Parse embed attribute.
     *
     * @param $embedAttributes
     * @param $options
     * @param $option
     * @param $attribute
     *
     * @return null
     */
    private function parseEmbedAttribute(&$embedAttributes, &$options, $option, $attribute)
    {
        if (isset($options[$option])) {
            $embedAttributes[$attribute] = $options[$option];
            unset($options[$option]);
        }

        return null;
    }
}
