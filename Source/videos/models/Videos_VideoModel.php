<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_VideoModel extends BaseModel
{
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
        $charset = craft()->templates->getTwig()->getCharset();

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
            $this->_gateway = craft()->videos_gateways->getGateway($this->gatewayHandle);
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
            $this->_video = craft()->videos->requestVideoByUrl($this->url);
        }

        return $this->_video;
    }
}
