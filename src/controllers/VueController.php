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
use dukt\videos\helpers\VideosHelper;
use dukt\videos\Plugin as Videos;
use dukt\videos\Plugin;
use dukt\videos\web\assets\videos\VideosAsset;
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
        Craft::$app->getView()->registerAssetBundle(VideosAsset::class);

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
        $options = $payload['options'] ?? [];

        $gateway = Videos::$plugin->getGateways()->getGateway($gatewayHandle);

        if (!$gateway) {
            throw new GatewayNotFoundException('Gateway not found.');
        }

        $videosResponse = $gateway->getVideos($method, $options);


        // Todo: Make this happen in the Video model toArray()

        $videos = array();

        foreach($videosResponse['videos'] as $video) {
            $videos[] = VideosHelper::videoToArray($video);
        }

        return $this->asJson([
            'videos' => $videos,
            'more' => $videosResponse['more'],
            'moreToken' => $videosResponse['moreToken']
        ]);
    }

    public function actionGetVideo()
    {
        $this->requireAcceptsJson();

        $rawBody = Craft::$app->getRequest()->getRawBody();
        $payload = Json::decodeIfJson($rawBody);
        $url = $payload['url'];

        $video = Plugin::getInstance()->getVideos()->getVideoByUrl($url);

        if (!$video) {
            return $this->asErrorJson("Video not found.");
        }

        $videoArray = VideosHelper::videoToArray($video);

        return $this->asJson($videoArray);
    }

    public function actionGetVideoEmbedHtml(): Response
    {
        $this->requireAcceptsJson();

        $rawBody = Craft::$app->getRequest()->getRawBody();
        $payload = Json::decodeIfJson($rawBody);

        $gatewayHandle = strtolower($payload['gateway']);
        $videoId = $payload['videoId'];

        $video = Videos::$plugin->getVideos()->getVideoById($gatewayHandle, $videoId);

        $html = Craft::$app->getView()->renderTemplate('videos/_elements/embedHtml', [
            'video' => $video
        ]);

        return $this->asJson([
            'html' => $html
        ]);
    }
}
