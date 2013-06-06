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

class Videos_ServiceVimeoModel extends Videos_ServiceModel
{
    public function defineAttributes()
    {
        $attributes = array_merge(
                parent::defineAttributes(),
                array(
                    'params' => array(AttributeType::Mixed, 'model' => 'Videos_ServiceVimeoParametersModel'),
                )
            );

        return $attributes;
    }
}