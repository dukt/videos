<?php

namespace dukt\videos\migrations;

use Craft;
use craft\db\Migration;
use yii\helpers\Json;

/**
 * m190601_092217_tokens migration.
 */
class m190601_092217_tokens extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if (!$this->db->tableExists('{{%videos_tokens}}')) {
            $this->createTables();
            $this->insertDefaultData();
        }
    }

    public function createTables()
    {
        $this->createTable(
            '{{%videos_tokens}}',
            [
                'id' => $this->primaryKey(),
                'gateway' => $this->string()->notNull(),
                'accessToken' => $this->text(),

                'dateCreated' => $this->dateTime()->notNull(),
                'dateUpdated' => $this->dateTime()->notNull(),
                'uid' => $this->uid()
            ]
        );

        $this->createIndex(null, '{{%videos_tokens}}', 'gateway', true);
    }

    public function insertDefaultData()
    {
        // Get tokens from plugin settings
        $info = Craft::$app->getInfo();
        $config = $info->config ? unserialize($info->config, ['allowed_classes' => false]) : [];
        $tokens = !empty($config['plugins']['videos']['settings']['tokens']) ? $config['plugins']['videos']['settings']['tokens'] : [];

        foreach($tokens as $gatewayHandle => $token) {
            // Populate videos_tokens with tokens
            Craft::$app->getDb()->createCommand()
                ->insert('{{%videos_tokens}}', [
                    'gateway' => $gatewayHandle,
                    'accessToken' => Json::encode($token),
                ])
                ->execute();
        }

        if (Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            // Save plugin settings so that tokens stored using the old plugin settings technique get deleted
            $plugin = Craft::$app->getPlugins()->getPlugin('videos');
            $pluginSettings = (array) $plugin->getSettings();
            Craft::$app->getPlugins()->savePluginSettings($plugin, $pluginSettings);
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m190601_092217_tokens cannot be reverted.\n";
        return false;
    }
}
