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
        $attributes = array_merge(
                parent::defineAttributes(),
                array(
                    'params' => array(AttributeType::Mixed, 'model' => 'Videos_ServiceYouTubeParametersModel'),
                )
            );

        return $attributes;
    }
}