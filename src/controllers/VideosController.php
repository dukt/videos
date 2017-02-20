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
     * Field Preview
     *
     * @return null
     */
    public function actionFieldPreview()
    {
        $this->requireAcceptsJson();

        $url = Craft::$app->getRequest()->getParam('url');

        try
        {
            $video = Videos::$plugin->cache->get(['fieldPreview', $url]);

            if(!$video)
            {
                $video = Videos::$plugin->videos->getVideoByUrl($url);

                if(!$video)
                {
                    throw new Exception("Video not found");
                }

                Videos::$plugin->cache->set(['fieldPreview', $url], $video);
            }

            return $this->asJson(
                array(
                    'video' => $video,
                    'preview' => Craft::$app->getView()->renderTemplate('videos/_elements/fieldPreview', array('video' => $video))
                )
            );
        }
        catch(\Exception $e)
        {
            // VideosPlugin::log('Couldn’t get field preview: '.$e->getMessage(), LogLevel::Error);

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
        // $this->requireAjaxRequest();

        $gatewayHandle = Craft::$app->getRequest()->getParam('gateway');
        $gatewayHandle = strtolower($gatewayHandle);

        $videoId = Craft::$app->getRequest()->getParam('videoId');

        try {
            $video = Videos::$plugin->videos->getVideoById($gatewayHandle, $videoId);
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

            $this->returnJson(array(
                'html' => $html
            ));
        }
        elseif(isset($errorMsg))
        {
            // VideosPlugin::log('Couldn’t get videos: '.$errorMsg, LogLevel::Error);

            $this->returnErrorJson("Couldn't load video: ".$errorMsg);
        }
        else
        {
            // VideosPlugin::log('Couldn’t get videos: Video not found', LogLevel::Error);

            $this->returnErrorJson("Video not found.");
        }
    }
}
