<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use Craft;
use craft\web\Controller;
use dukt\videos\errors\GatewayNotFound;
use dukt\videos\errors\VideoNotFound;
use dukt\videos\Plugin as Videos;

/**
 * Explorer controller
 */
class ExplorerController extends Controller
{
    // Properties
    // =========================================================================

    /**
     * @var
     */
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
        $this->requireAcceptsJson();

        $namespaceInputId = Craft::$app->getRequest()->getBodyParam('namespaceInputId');
        $nav = $this->getExplorerNav();

        $gateways = [];
        $allGateways = Videos::$plugin->getGateways()->getGateways();

        foreach ($allGateways as $_gateway) {
            $gateway = [
                'name' => $_gateway->getName(),
                'handle' => $_gateway->getHandle(),
                'supportsSearch' => $_gateway->supportsSearch(),
            ];

            array_push($gateways, $gateway);
        }

        return $this->asJson([
            'success' => true,
            'html' => Craft::$app->getView()->renderTemplate('videos/_elements/explorer', [
                'namespaceInputId' => $namespaceInputId,
                'nav' => $nav,
                'gateways' => $gateways
            ])
        ]);
    }

    /**
     * Get Videos
     *
     * @return null
     */
    public function actionGetVideos()
    {
        $this->requireAcceptsJson();

        $gatewayHandle = Craft::$app->getRequest()->getParam('gateway');
        $gatewayHandle = strtolower($gatewayHandle);

        $method = Craft::$app->getRequest()->getParam('method');
        $options = Craft::$app->getRequest()->getParam('options', []);

        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle);

        if (!$gateway) {
            throw new GatewayNotFound("Gateway not available");
        }

        $videosResponse = $gateway->getVideos($method, $options);

        $html = Craft::$app->getView()->renderTemplate('videos/_elements/videos', [
            'videos' => $videosResponse['videos']
        ]);

        return $this->asJson([
            'html' => $html,
            'more' => $videosResponse['more'],
            'moreToken' => $videosResponse['moreToken']
        ]);

    }

    /**
     * Field Preview
     *
     * @return null
     */
    public function actionFieldPreview()
    {
        $this->requireAcceptsJson();

        $url = Craft::$app->getRequest()->getParam('url');

        try {
            $video = Videos::$plugin->getCache()->get(['fieldPreview', $url]);

            if (!$video) {
                $video = Videos::$plugin->getVideos()->getVideoByUrl($url);

                if (!$video) {
                    throw new VideoNotFound("Video not found");
                }

                Videos::$plugin->getCache()->set(['fieldPreview', $url], $video);
            }

            return $this->asJson(
                [
                    'video' => $video,
                    'preview' => Craft::$app->getView()->renderTemplate('videos/_elements/fieldPreview', ['video' => $video])
                ]
            );
        } catch (\Exception $e) {
            Craft::info('Couldn’t get field preview: '.$e->getMessage(), __METHOD__);

            return $this->asErrorJson($e->getMessage());
        }
    }

    /**
     * Player
     *
     * @return null
     */
    public function actionPlayer()
    {
        $this->requireAcceptsJson();

        $gatewayHandle = Craft::$app->getRequest()->getParam('gateway');
        $gatewayHandle = strtolower($gatewayHandle);

        $videoId = Craft::$app->getRequest()->getParam('videoId');

        try {
            $video = Videos::$plugin->getVideos()->getVideoById($gatewayHandle, $videoId);
        } catch (\Exception $e) {
            $errorMsg = $e->getMessage();
        }

        if (isset($video)) {
            $html = Craft::$app->getView()->renderTemplate('videos/_elements/player', [
                'video' => $video
            ]);

            return $this->asJson([
                'html' => $html
            ]);
        } elseif (isset($errorMsg)) {
            Craft::info('Couldn’t get videos: '.$errorMsg, __METHOD__);

            return $this->asErrorJson("Couldn't load video: ".$errorMsg);
        } else {
            Craft::info('Couldn’t get videos: Video not found', __METHOD__);

            return $this->asErrorJson("Video not found.");
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
        if (!$this->explorerNav) {
            $gatewaySections = [];

            $gateways = Videos::$plugin->getGateways()->getGateways();

            foreach ($gateways as $gateway) {
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
