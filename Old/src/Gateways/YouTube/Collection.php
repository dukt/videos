<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Dukt\Videos\Gateways\YouTube;

use Dukt\Videos\Gateways\Common\AbstractCollection;

class Collection extends AbstractCollection
{
    public function instantiate($item)
    {
        $this->id          = $item->id;
        $this->title       = $item->snippet->title;
        $this->totalVideos = 0;
        $this->url         ='title';
    }
}
