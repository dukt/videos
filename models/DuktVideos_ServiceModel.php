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

class DuktVideos_ServiceModel extends BaseModel
{    
    // --------------------------------------------------------------------
    
    /**
     * Define Attributes
     */ 
    public function defineAttributes()
    {
        $attributes = array(
                'token' => array(AttributeType::String, 'required' => false),
            );

        return $attributes;
    }
}