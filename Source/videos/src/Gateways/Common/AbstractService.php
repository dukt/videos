<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Dukt\Videos\Gateways\Common;

abstract class AbstractService implements ServiceInterface
{
    public $provider;
    public $name;
    public $handle;

    public $paginationDefaults = array(
        'page' => 1,
        'perPage' => 30
    );

    protected $token;
    protected $parameters;

    public function setToken($token)
    {
        $this->token = $token;
    }

    public function getToken()
    {
        return $this->token;
    }

    public function getName()
    {
        return $this->name;
    }

    public function isAuthenticated()
    {
        try {
            $r = $this->favorites();

            if($r) {
                return true;
            }

            return false;

        } catch(\Exception $e) {
            return false;
        }
    }

    public function videoFromUrl($url)
    {
        $url = $url['url'];

        $videoId = $this->getVideoId($url);

        if(!$videoId) {
            throw new \Exception('Video not found with url given');
        }

        $params['id'] = $videoId;

        $video = $this->getVideo($params);

        return $video;
    }

    public function getShortName()
    {
        return Helper::getServiceShortName(get_class($this));
    }

    public function getProviderClass()
    {
        return $this->providerClass;
    }

    public function supports($method)
    {
        return method_exists($this, $method);
    }
}
