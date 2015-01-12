<?php

namespace Dukt\Videos\Common;

abstract class AbstractCollection
{
    public $id;
    public $title;

    public function getTitle()
    {
        return $this->title;
    }
}
