<?php

namespace Dukt\Videos\App;

class Vimeo {

    public static function getSections($gateway)
    {
        $sections = array(
            array(
                'name' => 'Library',
                'handle' => "library",
                'childs' => array(
                    array(
                        'name' => 'Uploads',
                        'handle' => "uploads",
                        'method' => 'uploads',
                        'url' => '/'.$gateway->handle.'/uploads',
                        'icon' => 'uploads'
                    ),
                    array(
                        'name' => 'Favorites',
                        'handle' => "favorites",
                        'method' => 'favorites',
                        'url' => '/'.$gateway->handle.'/favorites',
                        'icon' => 'favorites'
                    ),
                ),
            )
        );

        // albums section

        $albums = $gateway->getCollectionsAlbums();

        if(is_array($albums))
        {
            $section = array(
                'name' => 'Albums',
                'handle' => "albums",
                'childs' => array(),
            );

            foreach($albums as $album) {

                $child = array(
                    'method' => 'album',
                    'icon' => 'menu',
                    'name' => $album->title,
                    'id' => $album->id,
                    'url' => '/'.$gateway->handle.'/album/'.$album->id
                );

                array_push($section['childs'], $child);
            }

            if(count($section['childs']) > 0)
            {
                array_push($sections, $section);
            }
        }


        // channels section

        $channels = $gateway->getCollectionsChannels();

        if(is_array($channels))
        {
            $section = array(
                'name' => 'Channels',
                'handle' => "channels",
                'childs' => array(),
            );

            foreach($channels as $channel) {

                $child = array(
                    'method' => 'channel',
                    'icon' => 'menu',
                    'name' => $channel->title,
                    'id' => $channel->id,
                    'url' => '/'.$gateway->handle.'/channel/'.$channel->id
                );

                array_push($section['childs'], $child);
            }

            if(count($section['childs']) > 0)
            {
                array_push($sections, $section);
            }
        }

        return $sections;
    }
}