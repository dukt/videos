<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\models;

use craft\base\Model;

class Collection extends Model
{
    public $name;
    public $method;
    public $options;

    // Protected Methods
    // =========================================================================

    protected function defineAttributes()
    {
        return array(
            'name' => AttributeType::String,
            'method' => AttributeType::String,
            'options' => AttributeType::Mixed,
        );
    }
}
