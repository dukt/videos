<?php

namespace Craft;

class Videos_YoutubeService extends BaseApplicationComponent
{
    public function __construct()
    {
        // authentication required

        if(!$this->provider) {
            return NULL;
        }


        // request

        $r = $this->apiCall('users/default');

        $userInfos = new UserInfos();

        $userInfos->instantiate($r);

        return $userInfos;
    }
}