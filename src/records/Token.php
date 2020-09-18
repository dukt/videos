<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\records;

use craft\db\ActiveRecord;

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
