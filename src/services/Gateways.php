<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\services;

use Craft;
use dukt\videos\base\Gateway;
use dukt\videos\events\RegisterGatewayTypesEvent;
use dukt\videos\Plugin;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use yii\base\Component;

/**
 * Class Gateways service.
 *
 * An instance of the Gateways service is globally accessible via [[Plugin::gateways `Videos::$plugin->getGateways()`]].
 *
 * @author Dukt <support@dukt.net>
 * @since  2.0
 */
class Gateways extends Component
{
    // Constants
    // =========================================================================

    /**
     * @event RegisterLoginProviderTypesEvent The event that is triggered when registering login providers.
     */
    const EVENT_REGISTER_GATEWAY_TYPES = 'registerGatewayTypes';

    // Properties
    // =========================================================================

    /**
     * @var array
     */
    private $_gateways = [];

    /**
     * @var array
     */
    private $_allGateways = [];

    /**
     * @var bool
     */
    private $_gatewaysLoaded = false;

    // Public Methods
    // =========================================================================

    /**
     * Get gateway by handle
     *
     * @param      $gatewayHandle
     * @param bool $enabledOnly
     *
     * @return Gateway
     */
    public function getGateway($gatewayHandle, $enabledOnly = true)
    {
        $this->loadGateways();

        if ($enabledOnly) {
            $gateways = $this->_gateways;
        } else {
            $gateways = $this->_allGateways;
        }

        foreach ($gateways as $g) {
            if ($g->getHandle() == $gatewayHandle) {
                return $g;
            }
        }

        return null;
    }

    /**
     * Get gateways
     *
     * @param bool $enabledOnly
     *
     * @return array
     */
    public function getGateways($enabledOnly = true)
    {
        $this->loadGateways();

        if ($enabledOnly) {
            return $this->_gateways;
        } else {
            return $this->_allGateways;
        }
    }

    // Private Methods
    // =========================================================================

    /**
     * Load gateways
     */
    private function loadGateways()
    {
        if (!$this->_gatewaysLoaded) {
            $gateways = $this->_getGateways();

            foreach ($gateways as $gateway) {
                if ($gateway->enableOauthFlow()) {
                    $gatewayHandle = $gateway->getHandle();
                    $plugin = Craft::$app->getPlugins()->getPlugin('videos');
                    $settings = $plugin->getSettings();
                    $tokens = $settings->tokens;

                    if (!empty($tokens[$gatewayHandle]) && is_array($tokens[$gatewayHandle])) {
                        try {
                            $this->_gateways[] = $gateway;
                        } catch (IdentityProviderException $e) {
                            $errorMsg = $e->getMessage();

                            $data = $e->getResponseBody();

                            if (isset($data['error_description'])) {
                                $errorMsg = $data['error_description'];
                            }

                            Craft::error('Couldn’t load gateway `'.$gatewayHandle.'`: '.$errorMsg, __METHOD__);
                        }
                    }
                } else {
                    $this->_gateways[] = $gateway;
                }

                $this->_allGateways[] = $gateway;
            }

            $this->_gatewaysLoaded = true;
        }
    }

    /**
     * Returns all gateway instances.
     *
     * @return array
     */
    private function _getGateways()
    {
        $gatewayTypes = $this->_getGatewayTypes();

        $gateways = [];

        foreach ($gatewayTypes as $gatewayType) {
            $gateways[$gatewayType] = $this->_createGateway($gatewayType);
        }

        ksort($gateways);

        return $gateways;
    }

    /**
     * Returns gateway types.
     *
     * @return array
     */
    private function _getGatewayTypes()
    {
        $gatewayTypes = [
            'dukt\videos\gateways\Vimeo',
            'dukt\videos\gateways\YouTube',
        ];

        $eventName = self::EVENT_REGISTER_GATEWAY_TYPES;

        $event = new RegisterGatewayTypesEvent([
            'gatewayTypes' => $gatewayTypes
        ]);

        $this->trigger($eventName, $event);

        return $event->gatewayTypes;
    }

    /**
     * Instantiates a gateway
     *
     * @param $gatewayType
     *
     * @return mixed
     */
    private function _createGateway($gatewayType)
    {
        return new $gatewayType;
    }
}
