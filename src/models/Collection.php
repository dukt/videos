<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
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
