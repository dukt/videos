<?php

/**
 * Videos plugin for Craft CMS
 *
 * @package   Twitter
 * @author    Benjamin David
 * @copyright Copyright (c) 2014, Dukt
 * @link      https://dukt.net/craft/videos/
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

/**
 * Twitter controller
 */
class VideosController extends BaseController
{
    /**
     * Returns a video by its URL.
     */
    public function actionLookupVideo()
    {
        $this->requireAjaxRequest();

        $url = craft()->request->getParam('url');

        try {
            $video = craft()->videos->getVideoByUrl($url);
            $this->returnJson($video);
        } catch(\Exception $e) {
            $this->returnErrorJson($e->getMessage());
        }
    }
}