<?php

namespace Dukt\Videos\Vimeo;

use Dukt\Videos\Common\AbstractUserInfos;

class UserInfos extends AbstractUserInfos
{
    public function instantiate($response)
    {
        $this->id = $response->id;
        $this->name = $response->display_name;
    }
}