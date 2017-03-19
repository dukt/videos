<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
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
     * @var int|null
     */
    public $id;

    /**
     * @var mixed|null
     */
    public $raw;

    /**
     * @var string|null
     */
    public $url;

    /**
     * @var string|null
     */
    public $gatewayHandle;

    /**
     * @var string|null
     */
    public $gatewayName;

    /**
     * @var \DateTime|null Date
     */
    public $date;

    /**
     * @var int|null
     */
    public $plays;

    /**
     * @var int|null
     */
    public $durationSeconds;

    /**
     * @var string|null
     */
    public $authorName;

    /**
     * @var string|null
     */
    public $authorUrl;

    /**
     * @var string|null
     */
    public $authorUsername;

    /**
     * @var string|null
     */
    public $thumbnailSource;

    /**
     * @var string|null
     */
    public $thumbnailLargeSource;

    /**
     * @var string|null
     */
    public $title;

    /**
     * @var string|null
     */
    public $description;

    /**
     * @var bool
     */
    public $private = false;

    /**
     * @var int|null
     */
    public $width;

    /**
     * @var int|null
     */
    public $height;

    /**
     * @var string
     */
    private $_video;

    /**
     * @var Gateway|null Gateway
     */
    private $_gateway;

    // Public Methods
    // =========================================================================

    public function getDuration()
    {
        return VideosHelper::getDuration($this->durationSeconds);
    }

    public function getEmbed($opts = array())
    {
        $embed = $this->getGateway()->getEmbedHtml($this->id, $opts);
        $charset = Craft::$app->getView()->getTwig()->getCharset();

        return new Twig_Markup($embed, $charset);
    }

    public function getEmbedUrl($opts = array())
    {
        return $this->getGateway()->getEmbedUrl($this->id, $opts);
    }

    public function getGateway()
    {
        if(!$this->_gateway)
        {
            $this->_gateway = Videos::$plugin->getGateways()->getGateway($this->gatewayHandle);
        }

        return $this->_gateway;
    }

    public function getThumbnail($size = 300)
    {
        return UrlHelper::resourceUrl('videos/thumbnails/'.$this->gatewayHandle.'/'.$this->id.'/'.$size);
    }

    // Private Methods
    // =========================================================================

    private function getVideoById()
    {
        if(!$this->_video)
        {
            $this->_video = Videos::$plugin->getVideos()->requestVideoByUrl($this->url);
        }

        return $this->_video;
    }
}
