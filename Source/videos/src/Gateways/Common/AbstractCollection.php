<?php

namespace Dukt\Videos\Gateways\Common;

abstract class AbstractCollection
{
    public $id;
    public $title;

    public function getTitle()
    {
        return $this->title;
    }
}
