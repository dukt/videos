<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://docs.dukt.net/craft/videos/license
 * @link      http://dukt.net/craft/videos
 */

namespace Craft;

class Videos_ServiceYouTubeParametersModel extends Videos_ServiceParametersModel
{
    // --------------------------------------------------------------------

    /**
     * Define Attributes
     */
    public function defineAttributes()
    {
        $parentAttributes = parent::defineAttributes();

        $attributes = array(
                'developerKey' => array(AttributeType::String, 'required' => true)
            );

        $attributes = array_merge($parentAttributes, $attributes);

        return $attributes;
    }
}