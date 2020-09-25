<?php

namespace dukt\videos\migrations;

use craft\db\Migration;
use craft\db\Query;
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
        }

        // migrate OAuth client ID & secret
        $this->updateOauthClient();
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


    private function updateOauthClient()
    {
        if (!$this->db->tableExists('{{%oauth_providers}}')) {
            return true;
        }

        // Get OAuth clients for Dailymotion, YouTube and Vimeo, from `oauth_providers` table
        $providers = (new Query())
            ->select('*')
            ->from(['{{%oauth_providers}}'])
            ->where(['class' => ['google', 'vimeo']])
            ->all();

        // Get plugin settings
        $result = (new Query())
            ->select('*')
            ->from(['{{%plugins}}'])
            ->where(['handle' => 'videos'])
            ->one();

        if (!$result) {
            return true;
        }

        if (!isset($result['settings'])) {
            return true;
        }

        $settings = Json::decode($result['settings']);

        foreach ($providers as $provider) {
            switch ($provider['class']) {
                case 'dailymotion':
                    $providerHandle = 'dailymotion';
                    break;
                case 'vimeo':
                    $providerHandle = 'vimeo';
                    break;
                case 'google':
                    $providerHandle = 'youtube';
                    break;
                default:
                    $providerHandle = null;
            }

            if (!$providerHandle) {
                continue;
            }

            $settings['oauthProviderOptions'][$providerHandle]['clientId'] = $provider['clientId'];
            $settings['oauthProviderOptions'][$providerHandle]['clientSecret'] = $provider['clientSecret'];
        }

        $this->update('{{%plugins}}', ['settings' => Json::encode($settings)], ['handle' => 'videos']);
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
