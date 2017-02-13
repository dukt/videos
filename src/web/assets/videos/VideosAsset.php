<?php
namespace dukt\videos\web\assets\videos;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class VideosAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = '@dukt/videos/resources';

        // define the dependencies
        $this->depends = [
            CpAsset::class,
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/Videos.js',
            'js/VideosExplorer.js',
            'js/VideosField.js',
        ];

        $this->css = [
            'css/videos.css',
            'css/VideosExplorer.css',
            'css/VideosField.css',
        ];

        parent::init();
    }
}