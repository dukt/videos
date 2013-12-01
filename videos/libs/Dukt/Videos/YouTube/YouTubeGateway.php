<?php


namespace Dukt\Videos\YouTube;

use Dukt\Videos\Common\AbstractGateway;

class Gateway extends AbstractGateway
{
    public function getAccount($provider, $request)
    {
        return $this->createRequest('\Dukt\Videos\YouTube\Message\AccountRequest', $parameters);
    }

    public function getVideos($method, array $parameters = array())
    {
    	$api = youtubeApi;
        // return $this->createRequest('\Dukt\Videos\YouTube\Message\VideosRequest', $method, $parameters);

        $obj = new VideosRequest($api);

        return $obj->initialize($method, $parameters);
    }
}