<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use Craft;
use craft\web\Controller;
use dukt\videos\Plugin as Videos;

/**
 * Videos controller
 */
class VideosController extends Controller
{
    // Public Methods
    // =========================================================================
    
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
        }
        catch(\Exception $e)
        {
            $errorMsg = $e->getMessage();
        }

        if(isset($video))
        {
            $html = Craft::$app->getView()->renderTemplate('videos/_elements/player', array(
                'video' => $video
            ));

            return $this->asJson(array(
                'html' => $html
            ));
        }
        elseif(isset($errorMsg))
        {
            Craft::info('Couldn’t get videos: '.$errorMsg, __METHOD__);

            return $this->asErrorJson("Couldn't load video: ".$errorMsg);
        }
        else
        {
            Craft::info('Couldn’t get videos: Video not found', __METHOD__);

            return $this->asErrorJson("Video not found.");
        }
    }
}
