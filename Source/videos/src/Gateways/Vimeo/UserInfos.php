<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Dukt\Videos\Gateways\Vimeo;

use Dukt\Videos\Gateways\Common\AbstractUserInfos;

class UserInfos extends AbstractUserInfos
{
    public function instantiate($response)
    {
        $this->id = $response->id;
        $this->name = $response->display_name;
    }
}