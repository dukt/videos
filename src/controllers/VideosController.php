<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use craft\web\Controller;

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
        // $this->requireAjaxRequest();

        $url = Craft::$app->request->getParam('url');

        try
        {
            $video = \dukt\videos\Plugin::getInstance()->videos_cache->get(['fieldPreview', $url]);

            if(!$video)
            {
                $video = \dukt\videos\Plugin::getInstance()->videos->getVideoByUrl($url);

                if(!$video)
                {
                    throw new Exception("Video not found");
                }

                \dukt\videos\Plugin::getInstance()->videos_cache->set(['fieldPreview', $url], $video);
            }

            $this->returnJson(
                array(
                    'video' => $video,
                    'preview' => Craft::$app->templates->render('videos/_elements/fieldPreview', array('video' => $video))
                )
            );
        }
        catch(\Exception $e)
        {
            VideosPlugin::log('Couldn’t get field preview: '.$e->getMessage(), LogLevel::Error);

            $this->returnErrorJson($e->getMessage());
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

        $gatewayHandle = Craft::$app->request->getParam('gateway');
        $gatewayHandle = strtolower($gatewayHandle);

        $videoId = Craft::$app->request->getParam('videoId');

        try {
            $video = \dukt\videos\Plugin::getInstance()->videos->getVideoById($gatewayHandle, $videoId);
        }
        catch(\Exception $e)
        {
            $errorMsg = $e->getMessage();
        }

        if(isset($video))
        {
            $html = Craft::$app->templates->render('videos/_elements/player', array(
                'video' => $video
            ));

            $this->returnJson(array(
                'html' => $html
            ));
        }
        elseif(isset($errorMsg))
        {
            VideosPlugin::log('Couldn’t get videos: '.$errorMsg, LogLevel::Error);

            $this->returnErrorJson("Couldn't load video: ".$errorMsg);
        }
        else
        {
            VideosPlugin::log('Couldn’t get videos: Video not found', LogLevel::Error);

            $this->returnErrorJson("Video not found.");
        }
    }
}
