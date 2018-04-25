<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2018, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\models;

use Craft;
use craft\base\Model;
use dukt\videos\base\Gateway;
use dukt\videos\helpers\VideosHelper;
use dukt\videos\Plugin as Videos;
use craft\helpers\UrlHelper;
use Twig_Markup;

/**
 * Video model class.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Video extends Model
{
    // Properties
    // =========================================================================

    /**
     * @var int|null ID
     */
    public $id;

    /**
     * @var mixed|null Raw response object
     */
    public $raw;

    /**
     * @var string|null Video URL
     */
    public $url;

    /**
     * @var string|null Gateway Handle
     */
    public $gatewayHandle;

    /**
     * @var string|null Gateway Name
     */
    public $gatewayName;

    /**
     * @var \DateTime|null Date
     */
    public $date;

    /**
     * @var int|null Number of plays
     */
    public $plays;

    /**
     * @var int|null Duration in seconds
     */
    public $durationSeconds;

    /**
     * @var string|null Author Name
     */
    public $authorName;

    /**
     * @var string|null Author URL
     */
    public $authorUrl;

    /**
     * @var string|null Author Username
     */
    public $authorUsername;

    /**
     * @var string|null Thumbnail Source
     */
    public $thumbnailSource;

    /**
     * @var string|null Thumbnail Large Source
     */
    public $thumbnailLargeSource;

    /**
     * @var string|null Title
     */
    public $title;

    /**
     * @var string|null Description
     */
    public $description;

    /**
     * @var bool Is video private?
     */
    public $private = false;

    /**
     * @var int|null Width
     */
    public $width;

    /**
     * @var int|null Height
     */
    public $height;

    /**
     * @var string Video
     */
    private $_video;

    /**
     * @var Gateway|null Gateway
     */
    private $_gateway;

    // Public Methods
    // =========================================================================

    /**
     * @return string
     */
    public function getDuration()
    {
        return VideosHelper::getDuration($this->durationSeconds);
    }

    /**
     * @param array $opts
     *
     * @return Twig_Markup
     */
    public function getEmbed($opts = [])
    {
        $embed = $this->getGateway()->getEmbedHtml($this->id, $opts);
        $charset = Craft::$app->getView()->getTwig()->getCharset();

        return new Twig_Markup($embed, $charset);
    }

    /**
     * @param array $opts
     *
     * @return string
     */
    public function getEmbedUrl($opts = [])
    {
        return $this->getGateway()->getEmbedUrl($this->id, $opts);
    }

    /**
     * @return Gateway|null
     * @throws \yii\base\InvalidConfigException
     */
    public function getGateway()
    {
        if (!$this->_gateway) {
            $this->_gateway = Videos::$plugin->getGateways()->getGateway($this->gatewayHandle);
        }

        return $this->_gateway;
    }

    /**
     * @param int $size
     *
     * @return null|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws \craft\errors\ImageException
     * @throws \yii\base\Exception
     * @throws \yii\base\InvalidConfigException
     */
    public function getThumbnail($size = 300)
    {
        return VideosHelper::getVideoThumbnail($this->gatewayHandle, $this->id, $size);
    }

    // Private Methods
    // =========================================================================

    /**
     * @return bool|string
     * @throws \yii\base\InvalidConfigException
     */
    private function getVideoById()
    {
        if (!$this->_video) {
            $this->_video = Videos::$plugin->getVideos()->requestVideoByUrl($this->url);
        }

        return $this->_video;
    }
}
