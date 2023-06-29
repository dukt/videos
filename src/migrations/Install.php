<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\migrations;

use Craft;
use craft\db\Migration;
use dukt\videos\models\Info;
use dukt\videos\Plugin;

class Install extends Migration
{
    // Public Properties
    // =========================================================================

    /**
     * @var string The database driver to use
     */
    public $driver;

    // Public Methods
    // =========================================================================

    /**
     * This method contains the logic to be executed when applying this migration.
     * This method differs from [[up()]] in that the DB logic implemented here will
     * be enclosed within a DB transaction.
     * Child classes may implement this method instead of [[up()]] if the DB logic
     * needs to be within a transaction.
     *
     * @return boolean return a false value to indicate the migration fails
     * and should not proceed further. All other return values mean the migration succeeds.
     */
    public function safeUp(): bool
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        $this->createTables();
        $this->createIndexes();
        $this->addForeignKeys();
        $this->insertDefaultData();

        return true;
    }

    /**
     * This method contains the logic to be executed when removing this migration.
     * This method differs from [[down()]] in that the DB logic implemented here will
     * be enclosed within a DB transaction.
     * Child classes may implement this method instead of [[down()]] if the DB logic
     * needs to be within a transaction.
     *
     * @return boolean return a false value to indicate the migration fails
     * and should not proceed further. All other return values mean the migration succeeds.
     */
    public function safeDown(): bool
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        $this->removeTables();

        return true;
    }

    // Protected Methods
    // =========================================================================
    /**
     * Creates the tables needed for the Records used by the plugin
     */
    protected function createTables(): void
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
    }

    /**
     * Creates the indexes needed for the Records used by the plugin
     */
    protected function createIndexes(): void
    {
        $this->createIndex(null, '{{%videos_tokens}}', 'gateway', true);
    }

    /**
     * Creates the foreign keys needed for the Records used by the plugin
     */
    protected function addForeignKeys(): void
    {
    }

    /**
     * Populates the DB with the default data.
     */
    protected function insertDefaultData(): void
    {
    }

    /**
     * Removes the tables needed for the Records used by the plugin
     */
    protected function removeTables(): void
    {
        $this->dropTable('{{%videos_tokens}}');
    }
}
