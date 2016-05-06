<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_GatewaysService extends BaseApplicationComponent
{
    // Properties
    // =========================================================================

	/**
	 * @var array
	 */
	private $_gateways = array();

	/**
	 * @var array
	 */
	private $_allGateways = array();

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
	 * @return null
	 */
	public function getGateway($gatewayHandle, $enabledOnly = true)
    {
        $this->loadGateways();

        if($enabledOnly)
        {
            $gateways = $this->_gateways;
        }
        else
        {
            $gateways = $this->_allGateways;
        }

        foreach($gateways as $g)
        {
            if($g->getHandle() == $gatewayHandle)
            {
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

        if($enabledOnly)
        {
            return $this->_gateways;
        }
        else
        {
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
        if(!$this->_gatewaysLoaded)
        {
            $gateways = $this->_getGateways();

            foreach($gateways as $gateway)
            {
	            $oauthProviderHandle = strtolower($gateway->getOauthProviderHandle());

	            if($gateway->enableOauthFlow())
	            {
		            $token = craft()->videos_oauth->getToken($oauthProviderHandle);

		            if($token)
		            {
			            $gateway->authenticationSetToken($token);

			            $this->_gateways[] = $gateway;
		            }
	            }
	            else
	            {
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
        // fetch all OAuth provider types

        $gatewayTypes = array();

        foreach(craft()->plugins->call('getVideosGateways', [], true) as $pluginGatewayTypes)
        {
            $gatewayTypes = array_merge($gatewayTypes, $pluginGatewayTypes);
        }


        // instantiate providers

        $gateways = [];

        foreach($gatewayTypes as $gatewayType)
        {
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
        $gateway = new $gatewayType;

        return $gateway;
    }
}
