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

    /**
     * @var string The amount of time cache should last.
     *
     * @see http://www.php.net/manual/en/dateinterval.construct.php
     */
    public $cacheDuration = 'PT15M';

    /**
     * @var bool Whether request to APIs should be cached or not
     */
    public $enableCache = true;

    /**
     * @var int The number of videos per page in the explorer
     */
    public $videosPerPage = 30;

    /**
     * @var array OAuth provider options
     */
    public $oauthProviderOptions = [];
}