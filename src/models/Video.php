<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\models;

use Craft;
use craft\base\Model;
use dukt\videos\base\Gateway;
use dukt\videos\helpers\VideosHelper;
use dukt\videos\Plugin as Videos;
use Twig_Markup;

/**
 * Video model class.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 *
 * @property string $duration
 * @property \dukt\videos\base\Gateway|null $gateway
 */
class Video extends Model
{
    // Properties
    // =========================================================================

    /**
     * @var int|null The ID of the video
     */
    public $id;

    /**
     * @var mixed|null The raw response object
     */
    public $raw;

    /**
     * @var string|null The URL of the video
     */
    public $url;

    /**
     * @var string|null The embed URL of the video
     */
    public $embedUrl;

    /**
     * @var string|null The gateway’s handle
     */
    public $gatewayHandle;

    /**
     * @var string|null The gateway’s name
     */
    public $gatewayName;

    /**
     * @var \DateTime|null The date the video was uploaded
     */
    public $date;

    /**
     * @var int|null The number of times the video has been played
     */
    public $plays;

    /**
     * @var int|null Duration of the video in seconds
     */
    public $durationSeconds;

    /**
     * @var int|null Duration of the video in ISO 8601 format
     */
    public $duration8601;

    /**
     * @var string|null The author’s name
     */
    public $authorName;

    /**
     * @var string|null The author’s URL
     */
    public $authorUrl;

    /**
     * @var string|null The author’s username
     */
    public $authorUsername;

    /**
     * @var string|null The thumbnail’s source
     */
    public $thumbnailSource;

    /**
     * @var string|null The thumbnail’s large source
     * @deprecated in 2.1. Use [[\dukt\videos\models\Video::$thumbnailSource]] instead.
     */
    public $thumbnailLargeSource;

    /**
     * @var string|null The video’s title
     */
    public $title;

    /**
     * @var string|null The video’s description
     */
    public $description;

    /**
     * @var bool Is this video private?
     */
    public $private = false;

    /**
     * @var int|null The video’s width
     */
    public $width;

    /**
     * @var int|null The video’s height
     */
    public $height;

    /**
     * @var Gateway|null Gateway
     */
    private $_gateway;

    // Public Methods
    // =========================================================================

    /**
     * Get the video’s duration.
     *
     * @return string
     */
    public function getDuration(): string
    {
        return VideosHelper::getDuration($this->durationSeconds);
    }

    /**
     * Get the video’s embed.
     *
     * @param array $opts
     *
     * @return Twig_Markup
     * @throws \yii\base\InvalidConfigException
     */
    public function getEmbed(array $opts = []): Twig_Markup
    {
        $embed = $this->getGateway()->getEmbedHtml($this, $opts);
        $charset = Craft::$app->getView()->getTwig()->getCharset();

        return new Twig_Markup($embed, $charset);
    }

    /**
     * Get the video’s embed URL.
     *
     * @param array $opts
     *
     * @return null|string
     * @throws \yii\base\InvalidConfigException
     */
    public function getEmbedUrl(array $opts = []): ?string
    {
        $gateway = $this->getGateway();

        if (!$gateway instanceof \dukt\videos\base\Gateway) {
            return null;
        }

        return $gateway->getEmbedUrl($this, $opts);
    }

    /**
     * Get the video’s gateway.
     *
     * @return Gateway|null
     * @throws \yii\base\InvalidConfigException
     */
    public function getGateway(): ?\dukt\videos\base\Gateway
    {
        if (!$this->_gateway instanceof \dukt\videos\base\Gateway) {
            $this->_gateway = Videos::$plugin->getGateways()->getGateway($this->gatewayHandle);
        }

        return $this->_gateway;
    }

    /**
     * Get the video’s thumbnail.
     *
     *
     * @return null|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws \craft\errors\ImageException
     * @throws \yii\base\Exception
     * @throws \yii\base\InvalidConfigException
     */
    public function getThumbnail(int $size = 300): ?string
    {
        return VideosHelper::getVideoThumbnail($this->gatewayHandle, $this->id, $size);
    }
}
