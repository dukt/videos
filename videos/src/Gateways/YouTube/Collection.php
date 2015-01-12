<?php

namespace Dukt\Videos\YouTube;

use Dukt\Videos\Common\AbstractCollection;

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
