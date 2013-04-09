<?php

/**
 * Dukt Videos
 *
 * @package     Dukt Videos
 * @version     Version 1.0
 * @author      Benjamin David
 * @copyright   Copyright (c) 2013 - DUKT
 * @link        http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */
 
namespace Craft;

class DuktVideos_ServiceVimeoModel extends DuktVideos_ServiceModel
{    
    // --------------------------------------------------------------------
    
    /**
     * Define Attributes
     */ 
    public function defineAttributes()
    {
        $attributes = array(
                'id' => array(AttributeType::String, 'required' => true),
                'secret' => array(AttributeType::String, 'required' => true),
            );

        return $attributes;
    }
}