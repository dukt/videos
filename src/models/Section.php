<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
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
