<?php

namespace dukt\videos\migrations;

use Craft;
use craft\db\Migration;
use dukt\videos\fields\Video;

/**
 * m180910_103838_craft3_upgrade migration.
 */
class m180910_103838_craft3_upgrade extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Place migration code here...
        $this->update('{{%fields}}', [
            'type' => Video::class
        ], ['type' => 'Videos_Video']);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m180910_103838_craft3_upgrade cannot be reverted.\n";
        return false;
    }
}
