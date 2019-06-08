<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2019, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\controllers;

use Craft;
use craft\helpers\Json;
use craft\web\Controller;
use dukt\videos\errors\GatewayNotFoundException;
use dukt\videos\Plugin as Videos;
use dukt\videos\web\assets\videosvue\VideosVueAsset;
use yii\base\InvalidConfigException;
use yii\web\Response;

/**
 * Vue controller
 */
class VueController extends Controller
{
    /**
     * Index.
     *
     * @return Response
     * @throws InvalidConfigException
     */
    public function actionIndex(): Response
    {
        Craft::$app->getView()->registerAssetBundle(VideosVueAsset::class);

        return $this->renderTemplate('videos/vue/_index');
    }

    /**
     * @return Response
     * @throws InvalidConfigException
     */
    public function actionGetGateways(): Response
    {
        $gateways = Videos::$plugin->getGateways()->getGateways();

        $gatewaysArray = [];

        foreach ($gateways as $gateway) {
            $gatewaysArray[] = [
                'name' => $gateway->getName(),
                'handle' => $gateway->getHandle(),
                'sections' => $gateway->getExplorerSections()
            ];
        }

        return $this->asJson($gatewaysArray);
    }

    /**
     * @return Response
     * @throws GatewayNotFoundException
     * @throws InvalidConfigException
     * @throws \dukt\videos\errors\GatewayMethodNotFoundException
     * @throws \yii\web\BadRequestHttpException
     */
    public function actionGetVideos(): Response
    {
        $this->requireAcceptsJson();

        $rawBody = Craft::$app->getRequest()->getRawBody();
        $payload = Json::decodeIfJson($rawBody);

        $gatewayHandle = strtolower($payload['gateway']);
        $method = $payload['method'];
        $options = $payload['options'];

        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle);

        if (!$gateway) {
            throw new GatewayNotFoundException('Gateway not found.');
        }

        $videosResponse = $gateway->getVideos($method, $options);

        $videos = array();

        foreach($videosResponse['videos'] as $video) {
            $videos[] = [
                'title' => $video->title,
                'thumbnailSource' => $video->thumbnailSource,
            ];
        }

        return $this->asJson([
            'videos' => $videos,
            'more' => $videosResponse['more'],
            'moreToken' => $videosResponse['moreToken']
        ]);
    }
}
