<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\models;

use craft\base\Model;

/**
 * Settings model class.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Settings extends Model
{
    // Properties
    // =========================================================================

    /**
     * @var mixed|null YouTube parameters
     */
    public $youtubeParameters;

    /**
     * @var mixed|null Tokens
     */
    public $tokens;
}
