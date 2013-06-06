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

class Videos_ServiceModel extends BaseModel
{
    // --------------------------------------------------------------------

    /**
     * Define Attributes
     */
    public function defineAttributes()
    {
        $attributes = array(
                'id'    => AttributeType::Number,
                'providerClass' => array(AttributeType::String, 'required' => true),
                'token' => array(AttributeType::Mixed)
            );

        return $attributes;
    }

    public function tokenExpires()
    {
        $token = unserialize(base64_decode($this->token));

        $expires = $token->expires - time();

        return $expires;
    }
}