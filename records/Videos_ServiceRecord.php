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

class Videos_ServiceRecord extends BaseRecord
{
    /**
     * Get Table Name
     */
    public function getTableName()
    {
        return 'videos_services';
    }

    // --------------------------------------------------------------------

    /**
     * Define Attributes
     */
    public function defineAttributes()
    {
        return array(
            'providerClass' => array(AttributeType::String, 'required' => true, 'unique' => true),
            'params' => array(AttributeType::Mixed),
            'token' => array(AttributeType::String, 'column' => ColumnType::Text),
        );
    }

    public function create()
    {
        $class = get_class($this);

        $record = new $class();

        return $record;
    }
}