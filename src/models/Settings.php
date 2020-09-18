<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
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
     * @var string The amount of time cache should last.
     *
     * @see http://www.php.net/manual/en/dateinterval.construct.php
     */
    public $cacheDuration = 'PT15M';

    /**
     * @var bool Whether request to APIs should be cached or not.
     */
    public $enableCache = true;

    /**
     * @var array OAuth provider options.
     */
    public $oauthProviderOptions = [];

    /**
     * @var int The number of videos per page in the explorer.
     */
    public $videosPerPage = 30;
}