<?php

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
