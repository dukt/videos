<?php

/**
 * Videos plugin for Craft CMS
 *
 * @package   Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2014, Dukt
 * @link      https://dukt.net/craft/videos/
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_VideoModel extends BaseModel
{
    private $_video = false;

    protected function defineAttributes()
    {
        return array(
            'id'      => AttributeType::Number,
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
            'thumbnail' => array(AttributeType::String),
            'thumbnailLarge' => array(AttributeType::String),
            'thumbnails' => array(AttributeType::String),
            'title' => array(AttributeType::String),
            'description' => array(AttributeType::String, 'column' => ColumnType::Text),
        );
    }

    private function getVideo()
    {
        if(!$this->_video) {
            $this->_video = craft()->videos->getVideoObjectFromUrl($this->url);
        }

        return $this->_video;
    }

    public function getEmbed($opts)
    {
        $embed = craft()->videos->getEmbed($this->url, $opts);

        $charset = craft()->templates->getTwig()->getCharset();

        return new \Twig_Markup($embed, $charset);
    }

    public function getEmbedUrl($opts)
    {
        $video = $this->getVideo();

        if($video) {

            $embedUrl = $video->getEmbedUrl($opts);

            return $embedUrl;
        }
    }
}
