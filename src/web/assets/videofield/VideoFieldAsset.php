<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\web\assets\videofield;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use dukt\videos\web\assets\videos\VideosAsset;

class VideoFieldAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = __DIR__.'/dist';

        // define the dependencies
        $this->depends = [
            CpAsset::class,
            VideosAsset::class
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
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