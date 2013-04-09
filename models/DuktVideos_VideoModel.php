<?php

/**
 * Dukt Videos
 *
 * @package		Dukt Videos
 * @version		Version 1.0
 * @author		Benjamin David
 * @copyright	Copyright (c) 2013 - DUKT
 * @link		http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */
 
namespace Craft;

class DuktVideos_VideoModel extends BaseModel
{
    private $videoComponent;
	
	// --------------------------------------------------------------------
	
	public function __construct($videoComponent = false)
	{
        if($videoComponent)
        {
            $vars = get_object_vars($videoComponent);

            $attributes = $this->defineAttributes();


            foreach($vars as $k => $v)
            {
                if(isset($attributes[$k]))
                {
                    $this->{$k} = $v;
                }
            }

            $this->videoComponent = $videoComponent;
        }
	}
    
	// --------------------------------------------------------------------
	
	/**
	 * Define Attributes
	 */	
    public function defineAttributes()
    {
    	$attributes = array(
                'id' => AttributeType::String,
                'title' => AttributeType::String,
                'description' => AttributeType::String,
                'plays' => AttributeType::String,
                'authorName' => AttributeType::String,
                'authorUrl' => AttributeType::String,
                'authorUsername' => AttributeType::String,
                'date' => AttributeType::String,
                'duration' => AttributeType::String,
                'thumbnail' => AttributeType::String,
                'thumbnailLarge' => AttributeType::String,
                'thumbnails' => AttributeType::Mixed,
                'url' => AttributeType::String
            );

        return $attributes;
    }
    
	// --------------------------------------------------------------------
	
	/**
	 * Embed
	 */	
    public function embed($opts)
    {
        if($this->videoComponent)
        {
            $embed = $this->videoComponent->getEmbed($opts);
            
            return $embed;
        }

        return false;
    }
}