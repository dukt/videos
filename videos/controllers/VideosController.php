<?php

/**
 * Videos plugin for Craft CMS
 *
 * @package   Videos
 * @author    Benjamin David
 * @copyright Copyright (c) 2014, Dukt
 * @link      https://dukt.net/craft/videos/
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

/**
 * Videos controller
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

            if(!$video)
            {
                throw new Exception("Video not found");

            }
            $this->returnJson(
                array(
                    'video' => $video,
                    'preview' => craft()->templates->render('videos/field/preview', array('video' => $video))
                )
            );
        } catch(\Exception $e) {
            $this->returnErrorJson($e->getMessage());
        }
    }

    /**
     * Get Videos from ko URL
     */

        // {gatewayHandle}/{method}/{id}

        // youtube/favorites
        // - gatewayHandle : youtube
        // - method : favorites
        // - params : {page:2}

        // youtube/uploaded
        // - gatewayHandle : youtube
        // - method : favorites
        // - params : {page:2}


        // youtube/search
        // - gatewayHandle : youtube
        // - method : search
        // - params : {q:"peter doherty"}

        // youtube/playlist/1
        // - gatewayHandle : youtube
        // - method : playlist
        // - params : {id:"1234"}

        // vimeo/album/1
        // - gatewayHandle : youtube
        // - method : playlist
        // - params : {id:"1234"}

    public function actionGetVideosFromUrl()
    {
        try
        {
            $gatewayHandle = false;
            $method = false;
            $id = false;

            // explode url

            $url = craft()->request->getPost('url');
            $url = trim($url, "/");
            $url = explode("/", $url);

            if(!empty($url[0]))
            {
                $gatewayHandle = $url[0];
            }

            if(!empty($url[1]))
            {
                $method = $url[1];
            }

            if(!empty($url[2]))
            {
                $id = $url[2];
            }

            // perform request

            $gateway = craft()->videos->getGateway($gatewayHandle);
            $response = array();

            if(!empty($gateway))
            {
                $realMethod = 'getVideos'.ucwords($method);
                $options = craft()->request->getPost('options');

                if($id)
                {
                    $options['id'] = $id;
                }

                $response = $gateway->{$realMethod}($options);
            }

            $this->returnJson($response);
        }
        catch(\Exception $e)
        {
            $this->returnErrorJson($e->getMessage());
        }
    }

    /**
     * Get gateways with sections
     */
    public function actionGetGatewaysWithSections()
    {
        try
        {
            $gateways = craft()->videos->getGatewaysWithSections();


            // filter gateway sections with childs only

            foreach($gateways as $k => $g)
            {
                foreach($g->sections as $k2 => $s)
                {
                    $g->sections[$k2]['name'] = Craft::t($s['name']);

                    if(count($s['childs']) == 0)
                    {
                        unset($g->sections[$k2]);
                    }
                    else
                    {
                        foreach($s['childs'] as $k3 => $c)
                        {
                            $g->sections[$k2]['childs'][$k3]['name'] = Craft::t($c['name']);
                        }
                    }
                }

                $gateways[$k] = $g;
            }

            // return json

            $this->returnJson(array(
                'gateways' => $gateways
            ));
        }
        catch(\Exception $e)
        {
            $this->returnErrorJson("Couldn't get gateways: ".$e->getMessage());
        }
    }
}