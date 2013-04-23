<?php

/**
 * Craft Videos by Dukt
 *
 * @package   Craft Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2013, Dukt
 * @license   http://dukt.net/addons/craft/videos/license
 * @link      http://dukt.net/addons/craft/videos/
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