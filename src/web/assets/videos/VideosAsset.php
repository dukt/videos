<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2018, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\web\assets\videos;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class VideosAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = __DIR__.'/dist';

        // define the dependencies
        $this->depends = [
            CpAsset::class,
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/Videos.js',
            'js/VideosExplorer.js',
        ];

        $this->css = [
            'css/videos.css',
            'css/VideosExplorer.css',
        ];

        parent::init();
    }
}