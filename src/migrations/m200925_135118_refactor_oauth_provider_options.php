<?php

namespace dukt\videos\migrations;

use Craft;
use craft\db\Migration;
use craft\helpers\ProjectConfig;

/**
 * m200925_135118_refactor_oauth_provider_options migration.
 */
class m200925_135118_refactor_oauth_provider_options extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $projectConfig = Craft::$app->projectConfig;

        // Don't make the same config changes twice
        $schemaVersion = $projectConfig->get('plugins.videos.schemaVersion', true);

        if (version_compare($schemaVersion, '1.0.3', '<')) {
            // Get OAuth provider options
            $oauthProviderOptions = $projectConfig->get('plugins.videos.settings.oauthProviderOptions', true);

            if(!is_array($oauthProviderOptions)) {
                return true;
            }

            $oauthProviderOptions = ProjectConfig::unpackAssociativeArray($oauthProviderOptions);

            // Reset OAuth provider options
            $projectConfig->set('plugins.videos.settings.oauthProviderOptions', [], "Reset the oauth provider options");

            // Rebuild OAuth provider options
            foreach($oauthProviderOptions as $providerHandle => $provider) {
                $projectConfig->set('plugins.videos.settings.oauthProviderOptions.'.$providerHandle, $provider, "Save the “{$providerHandle}” provider");
            }
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m200925_135118_refactor_oauth_provider_options cannot be reverted.\n";
        return false;
    }
}
