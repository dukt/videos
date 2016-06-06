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
class VideosController extends BaseController
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
        $this->requireAjaxRequest();

        $url = craft()->request->getParam('url');

        try
        {
            $video = craft()->videos_cache->get(['fieldPreview', $url]);

            if(!$video)
            {
                $video = craft()->videos->getVideoByUrl($url);

                if(!$video)
                {
                    throw new Exception("Video not found");
                }

                craft()->videos_cache->set(['fieldPreview', $url], $video);
            }

            $this->returnJson(
                array(
                    'video' => $video,
                    'preview' => craft()->templates->render('videos/_elements/fieldPreview', array('video' => $video))
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
        $this->requireAjaxRequest();

        $gatewayHandle = craft()->request->getParam('gateway');
        $gatewayHandle = strtolower($gatewayHandle);

        $videoId = craft()->request->getParam('videoId');

        try {
            $video = craft()->videos->getVideoById($gatewayHandle, $videoId);
        }
        catch(\Exception $e)
        {
            $errorMsg = $e->getMessage();
        }

        if(isset($video))
        {
            $html = craft()->templates->render('videos/_elements/player', array(
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
