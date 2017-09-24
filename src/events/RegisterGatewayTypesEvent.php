<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/videos/docs/license
 */

namespace dukt\videos\events;

use yii\base\Event;

/**
 * RegisterGatewayTypesEvent class.
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class RegisterGatewayTypesEvent extends Event
{
    // Properties
    // =========================================================================

    /**
     * @var array The registered login providers.
     */
    public $gatewayTypes = [];
}
