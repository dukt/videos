<?php

namespace Dukt\Videos\Vimeo;

use Dukt\Videos\Common\AbstractCollection;

class Collection extends AbstractCollection
{
    public function instantiateAlbum($response)
    {
        if($response)
        {
            $this->id = substr($response['uri'], (strpos($response['uri'], '/albums/') + strlen('/albums/')));
            $this->url = $response['uri'];
            $this->title = $response['name'];
            $this->totalVideos = $response['stats']['videos'];
        }
    }

    public function instantiateChannel($response)
    {
        if($response)
        {
            $this->id = substr($response['uri'], (strpos($response['uri'], '/channels/') + strlen('/channels/')));
            $this->url = $response['uri'];
            $this->title = $response['name'];
            $this->totalVideos = $response['stats']['videos'];
        }
    }
}
