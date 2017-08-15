<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\services;

use Craft;
use dukt\videos\base\Gateway;
use yii\base\Component;
use dukt\videos\Plugin as Videos;
use League\OAuth2\Client\Token\AccessToken;
use League\OAuth2\Client\Grant\RefreshToken;

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
                        $token = $gateway->createTokenFromData($tokens[$gatewayHandle]);

                        $gateway->setAuthenticationToken($token);

                        $this->_gateways[] = $gateway;
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
     * Real get gateways
     *
     * @return array
     */
    private function _getGateways()
    {
        // fetch all video gateways

        $gatewayTypes = [];

        foreach (Craft::$app->getPlugins()->getAllPlugins() as $plugin) {
            if (method_exists($plugin, 'getVideosGateways')) {
                $gatewayTypes = array_merge($gatewayTypes, $plugin->getVideosGateways());
            }
        }


        // instantiate gateways

        $gateways = [];

        foreach ($gatewayTypes as $gatewayType) {
            $gateways[$gatewayType] = $this->_createGateway($gatewayType);
        }

        ksort($gateways);

        return $gateways;
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
