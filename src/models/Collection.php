<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\models;

use craft\base\Model;

/**
 * Collection model class.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Collection extends Model
{
    // Properties
    // =========================================================================

    /**
     * @var string|null Name
     */
    public $name;

    /**
     * @var string|null Method
     */
    public $method;

    /**
     * @var mixed|null Options
     */
    public $options;
}
