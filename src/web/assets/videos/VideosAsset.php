<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
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
            'js/Videos'.$this->dotJs(),
            'js/VideosExplorer'.$this->dotJs(),
        ];

        $this->css = [
            'css/videos.css',
            'css/VideosExplorer.css',
        ];

        parent::init();
    }
}