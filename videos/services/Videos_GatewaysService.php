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

    private $_gateways = array();
    private $_allGateways = array();
    private $_gatewaysLoaded = false;

    // Public Methods
    // =========================================================================

    /**
     * Get a gateway from its handle
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
            $files = IOHelper::getFiles(CRAFT_PLUGINS_PATH.'videos/gateways');

            foreach($files as $file)
            {
                require_once($file);

                $gatewayName = IOHelper::getFilename($file, false);

                $nsClass = '\\Dukt\\Videos\\Gateways\\'.$gatewayName;


                // gateway
                $gateway = new $nsClass;


                // provider
                $handle = strtolower($gateway->getOauthProvider());


                // token
                $token = craft()->videos_oauth->getToken($handle);

                if($token)
                {
                    $gateway->setToken($token);

                    // add to loaded gateways
                    $this->_gateways[] = $gateway;
                }


                // add to all gateways
                $this->_allGateways[] = $gateway;
            }

            $this->_gatewaysLoaded = true;
        }
    }
}
