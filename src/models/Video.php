<?php
/**
 * @link https://dukt.net/videos/
 *
 * @copyright Copyright (c) 2021, Dukt
 * @license https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\models;

use Craft;
use dukt\videos\base\Gateway;
use dukt\videos\helpers\VideosHelper;
use dukt\videos\Plugin as Videos;
use Twig_Markup;

/**
 * Video model class.
 *
 * @author Dukt <support@dukt.net>
 *
 * @since  2.0
 */
class Video extends AbstractVideo
{
    // Properties
    // =========================================================================

    /**
     * @var null|int The ID of the video
     */
    public $id;

    /**
     * @var null|mixed The raw response object
     */
    public $raw;

    /**
     * @var null|string The gateway’s handle
     */
    public $gatewayHandle;

    /**
     * @var null|string The gateway’s name
     */
    public $gatewayName;

    /**
     * @var null|\DateTime The date the video was uploaded
     */
    public $date;

    /**
     * @var null|int The number of times the video has been played
     */
    public $plays;

    /**
     * @var null|int Duration of the video in seconds
     */
    public $durationSeconds;

    /**
     * @var null|int Duration of the video in ISO 8601 format
     */
    public $duration8601;

    /**
     * @var null|string The author’s name
     */
    public $authorName;

    /**
     * @var null|string The author’s URL
     */
    public $authorUrl;

    /**
     * @var null|string The author’s username
     */
    public $authorUsername;

    /**
     * @var null|string The thumbnail’s source
     */
    public $thumbnailSource;

    /**
     * @var null|string The thumbnail’s large source
     *
     * @deprecated in 2.1. Use [[\dukt\videos\models\Video::$thumbnailSource]] instead.
     */
    public $thumbnailLargeSource;

    /**
     * @var null|string The video’s title
     */
    public $title;

    /**
     * @var null|string The video’s description
     */
    public $description;

    /**
     * @var bool Is this video private?
     */
    public $private = false;

    /**
     * @var null|int The video’s width
     */
    public $width;

    /**
     * @var null|int The video’s height
     */
    public $height;

    /**
     * @var bool the video is loaded if its data is filled
     */
    public bool $loaded = true;

    /**
     * @var null|Gateway Gateway
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
     * @throws \yii\base\InvalidConfigException
     *
     * @return Twig_Markup
     */
    public function getEmbed(array $opts = []): Twig_Markup
    {
        $embed = $this->getGateway()->getEmbedHtml($this->id, $opts);
        $charset = Craft::$app->getView()->getTwig()->getCharset();

        return new Twig_Markup($embed, $charset);
    }

    /**
     * Get the video’s embed URL.
     *
     * @param array $opts
     *
     * @throws \yii\base\InvalidConfigException
     *
     * @return string
     */
    public function getEmbedUrl(array $opts = []): string
    {
        return $this->getGateway()->getEmbedUrl($this->id, $opts);
    }

    /**
     * Get the video’s gateway.
     *
     * @throws \yii\base\InvalidConfigException
     *
     * @return null|Gateway
     */
    public function getGateway()
    {
        if (!$this->_gateway) {
            $this->_gateway = Videos::$plugin->getGateways()->getGateway($this->gatewayHandle);
        }

        return $this->_gateway;
    }

    /**
     * Get the video’s thumbnail.
     *
     * @param int $size
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws \craft\errors\ImageException
     * @throws \yii\base\Exception
     * @throws \yii\base\InvalidConfigException
     *
     * @return null|string
     */
    public function getThumbnail($size = 300)
    {
        return VideosHelper::getVideoThumbnail($this->gatewayHandle, $this->id, $size);
    }
}
