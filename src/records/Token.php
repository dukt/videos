<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\records;

use craft\db\ActiveRecord;

/**
 * Token record.
 *
 * @property int $id
 * @property string $gateway
 * @property string $accessToken
 */
class Token extends ActiveRecord
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the associated database table.
     *
     * @return string
     */
    public static function tableName(): string
    {
        return '{{%videos_tokens}}';
    }
}
