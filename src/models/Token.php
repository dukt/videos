<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/master/LICENSE.md
 */

namespace dukt\videos\models;

use craft\base\Model;
use craft\helpers\Json;

class Token extends Model
{
    // Properties
    // =========================================================================

    /**
     * @var int|null ID
     */
    public $id;

    /**
     * @var string|null Gateway
     */
    public $gateway;


    /**
     * @var string|null Access token
     */
    public $accessToken;

    /**
     * @var \DateTime|null Date updated
     */
    public $dateUpdated;

    /**
     * @var \DateTime|null Date created
     */
    public $dateCreated;

    /**
     * @var string|null Uid
     */
    public $uid;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();

        if (is_string($this->accessToken)) {
            $this->accessToken = Json::decode($this->accessToken);
        }
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'number', 'integerOnly' => true],
        ];
    }
}
