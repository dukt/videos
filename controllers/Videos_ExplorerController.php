<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

/**
 * Videos controller
 */
class Videos_ExplorerController extends BaseController
{
	// Properties
	// =========================================================================

	private $explorerNav;

    // Public Methods
    // =========================================================================

    /**
     * Get Explorer Modal
     *
     * @return null
     */
    public function actionGetModal()
    {
	    $this->requireAjaxRequest();

        try
        {
	        $namespaceInputId = craft()->request->getPost('namespaceInputId');
            $nav = $this->getExplorerNav();

	        $gateways = [];
	        $allGateways = craft()->videos_gateways->getGateways();

	        foreach($allGateways as $_gateway)
	        {
				$gateway = [
					'name' => $_gateway->getName(),
					'handle' => $_gateway->getHandle(),
					'supportsSearch' => $_gateway->supportsSearch(),
				];

		        array_push($gateways, $gateway);
	        }

            $this->returnJson(array(
                'success' => true,
                'html' => craft()->templates->render('videos/_elements/explorer', [
                    'namespaceInputId' => $namespaceInputId,
                    'nav' => $nav,
	                'gateways' => $gateways
                ])
            ));
        }
        catch(\Exception $e)
        {
            // Don't need to log errors again as they are already logged by BaseGateway::api()
            $this->returnErrorJson('Couldn’t load explorer.');
        }
    }

    /**
     * Get Videos
     *
     * @return null
     */
    public function actionGetVideos()
    {
        $this->requireAjaxRequest();

        try
        {
            $gatewayHandle = craft()->request->getParam('gateway');
            $gatewayHandle = strtolower($gatewayHandle);

            $method = craft()->request->getParam('method');
            $options = craft()->request->getParam('options');

            $gateway = craft()->videos_gateways->getGateway($gatewayHandle);

            if($gateway)
            {
                $videosResponse = $gateway->getVideos($method, $options);

                $html = craft()->templates->render('videos/_elements/videos', array(
                    'videos' => $videosResponse['videos']
                ));

                $this->returnJson(array(
                    'html' => $html,
                    'more' => $videosResponse['more'],
                    'moreToken' => $videosResponse['moreToken']
                ));
            }
            else
            {
                throw new Exception("Gateway not available");
            }
        }
        catch(\Exception $e)
        {
            VideosPlugin::log('Couldn’t get videos: '.$e->getMessage(), LogLevel::Error);

            $this->returnErrorJson($e->getMessage());
        }
    }

	// Private Methods
	// =========================================================================


	/**
	 * Get Explorer Nav
	 *
	 * @return array
	 */
	private function getExplorerNav()
	{
		if(!$this->explorerNav)
		{
			$gatewaySections = [];

			$gateways = craft()->videos_gateways->getGateways();

			foreach ($gateways as $gateway)
			{
				$gatewaySections[] = $gateway->getExplorerSections();
			}

			$this->explorerNav = [
				'gateways' => $gateways,
				'gatewaySections' => $gatewaySections
			];
		}

		return $this->explorerNav;
	}
}
