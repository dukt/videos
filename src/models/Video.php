<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\models;

use craft\base\Model;
use dukt\videos\helpers\VideosHelper;
use dukt\videos\Plugin as Videos;

class Video extends Model
{
    public $id;

    public $raw;

    public $url;

    public $gatewayHandle;

    public $gatewayName;

    public $date;

    public $plays;

    public $durationSeconds;

    public $authorName;

    public $authorUrl;

    public $authorUsername;

    public $thumbnailSource;

    public $thumbnailLargeSource;

    public $title;

    public $description;

    public $private;

    public $width;

    public $height;

    // Properties
    // =========================================================================

    private $_video;
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
        $charset = Craft::$app->templates->getTwig()->getCharset();

        return new \Twig_Markup($embed, $charset);
    }

    public function getEmbedUrl($opts = array())
    {
        return $this->getGateway()->getEmbedUrl($this->id, $opts);
    }

    public function getGateway()
    {
        if(!$this->_gateway)
        {
            $this->_gateway = Videos::$plugin->videos_gateways->getGateway($this->gatewayHandle);
        }

        return $this->_gateway;
    }

    public function getThumbnail($size = 300)
    {
        return UrlHelper::getResourceUrl('videosthumbnails/'.$this->gatewayHandle.'/'.$this->id.'/'.$size);
    }

    // Protected Methods
    // =========================================================================

    protected function defineAttributes()
    {
        return array(
            'id'      => AttributeType::Number,
            'raw'    => array(AttributeType::Mixed),
            'url'    => array(AttributeType::String),
            'gatewayHandle' => array(AttributeType::String),
            'gatewayName' => array(AttributeType::String),
            'date' => array(AttributeType::DateTime),
            'plays' => array(AttributeType::String),
            'durationSeconds' => array(AttributeType::String),
            'authorName' => array(AttributeType::String),
            'authorUrl' => array(AttributeType::String),
            'authorUsername' => array(AttributeType::String),
            'thumbnailSource' => array(AttributeType::String),
            'thumbnailLargeSource' => array(AttributeType::String),
            'title' => array(AttributeType::String),
            'description' => array(AttributeType::String, 'column' => ColumnType::Text),
            'private' => array(AttributeType::Bool, 'default' => false),
            'width' => AttributeType::Number,
            'height' => AttributeType::Number,
        );
    }

    // Private Methods
    // =========================================================================

    private function getVideoById()
    {
        if(!$this->_video)
        {
            $this->_video = Videos::$plugin->videos->requestVideoByUrl($this->url);
        }

        return $this->_video;
    }
}
