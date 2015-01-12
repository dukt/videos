<?php

namespace Dukt\Videos\App;

class YouTube {

    public static function getSections($source)
    {
        $sections = array(
            array(
                'name' => 'Library',
                'handle' => "library",
                'childs' => array(

                    // not supported in YouTube API v3
                    // array(
                    //     'name' => 'Explore',
                    //     'handle' => "explore",
                    //     'method' => 'explore',
                    //     'url' => '/'.$source->handle.'/explore',
                    //     'icon' => 'explore'
                    // ),

                    array(
                        'name' => 'Uploads',
                        'handle' => "uploads",
                        'method' => 'uploads',
                        'url' => '/'.$source->handle.'/uploads',
                        'icon' => 'uploads'
                    ),
                    array(
                        'name' => 'Favorites',
                        'handle' => "favorites",
                        'method' => 'favorites',
                        'url' => '/'.$source->handle.'/favorites',
                        'icon' => 'favorites'
                    ),
                    array(
                        'name' => 'History',
                        'handle' => "history",
                        'method' => 'history',
                        'url' => '/'.$source->handle.'/history',
                        'icon' => 'history'
                    ),
                ),
            )
        );

        // playlists section

        $playlists = $source->getCollectionsPlaylists();

        if(is_array($playlists))
        {
            $section = array(
                'name' => 'Playlists',
                'handle' => "playlists",
                'childs' => array(),
            );

            foreach($playlists as $playlist) {

                $child = array(
                    'method' => 'playlist',
                    'icon' => 'menu',
                    'name' => $playlist->title,
                    'id' => $playlist->id,
                    'totalVideos' => $playlist->totalVideos,
                    'videoUrl' => $playlist->url,
                    'url' => '/'.$source->handle.'/playlist/'.$playlist->id
                );

                array_push($section['childs'], $child);
            }

            array_push($sections, $section);
        }

        return $sections;
    }
}