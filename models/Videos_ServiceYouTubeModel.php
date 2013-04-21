<?php

/**
 * Craft Videos
 *
 * @package     Craft Videos
 * @version     Version 1.0
 * @author      Benjamin David
 * @copyright   Copyright (c) 2013 - DUKT
 * @link        http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */

namespace Craft;

class Videos_ServiceYouTubeModel extends Videos_ServiceModel
{
    // --------------------------------------------------------------------

    /**
     * Define Attributes
     */
    public function defineAttributes()
    {
        $parentAttributes = parent::defineAttributes();

        $attributes = array(
                'id' => array(AttributeType::String, 'required' => true),
                'secret' => array(AttributeType::String, 'required' => true),
                'developerKey' => array(AttributeType::String, 'required' => true),
            );

        $attributes = array_merge($parentAttributes, $attributes);

        return $attributes;
    }
}