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
            $video = Videos::$plugin->getCache()->get(['fieldPreview', $url]);

            if(!$video)
            {
                $video = Videos::$plugin->getVideos()->getVideoByUrl($url);

                if(!$video)
                {
                    throw new Exception("Video not found");
                }

                Videos::$plugin->getCache()->set(['fieldPreview', $url], $video);
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
