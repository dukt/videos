<?php


namespace Dukt\Videos\Vimeo;

use Dukt\Videos\Common\AbstractGateway;

class Gateway extends AbstractGateway
{
    public function initialize()
    {
        // init vimeo api
    }

    public function api($request)
    {
    	return;
    }

    public function getAccount($uri, array $parameters = array())
    {

    }

    public function getVideos($uri, array $parameters = array())
    {
        return $this->createRequest('\Dukt\Videos\Vimeo\Message\VideosRequest', $parameters);
    }
}