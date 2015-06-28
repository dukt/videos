<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
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

    public function getGateway()
    {
        if(!$this->_gateway)
        {
            $this->_gateway = craft()->videos->getGateway($this->gatewayHandle);
        }

        return $this->_gateway;
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

    public function getThumbnail($size = 100)
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
            'duration' => array(AttributeType::String),
            'durationSeconds' => array(AttributeType::String),
            'authorName' => array(AttributeType::String),
            'authorUrl' => array(AttributeType::String),
            'authorUsername' => array(AttributeType::String),
            // 'thumbnail' => array(AttributeType::String),
            // 'thumbnailLarge' => array(AttributeType::String),
            'thumbnailSource' => array(AttributeType::String),
            // 'thumbnailSourceLarge' => array(AttributeType::String),
            // 'thumbnails' => array(AttributeType::Mixed),
            'title' => array(AttributeType::String),
            'description' => array(AttributeType::String, 'column' => ColumnType::Text),
        );
    }

    // Private Methods
    // =========================================================================

    private function getVideo()
    {
        if(!$this->_video)
        {
            $this->_video = craft()->videos->requestVideoByUrl($this->url);
        }

        return $this->_video;
    }


    // TODO : support custom size thumbnails
    // =========================================================================

    // public function getAttributes($names = null, $flattenValues = false)
    // {
    //     $attributes = parent::getAttributes($names, $flattenValues);

    //     if ($flattenValues)
    //     {
    //         $attributes['thumbnail'] = $this->getThumbnail();
    //     }

    //     return $attributes;
    // }

    // public function getThumbnail($w = 350, $h = null)
    // {
    //     return craft()->videos->getVideoThumbnail($this->gatewayHandle, $this->id, $w, $h);
    // }
}
