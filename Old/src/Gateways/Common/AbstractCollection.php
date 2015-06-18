<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

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
