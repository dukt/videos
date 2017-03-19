<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\models;

use craft\base\Model;

/**
 * Section model class.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Section extends Model
{
    // Properties
    // =========================================================================

    /**
     * @var string|null Name
     */
    public $name;

    /**
     * @var mixed|null Collections
     */
    public $collections;
}
