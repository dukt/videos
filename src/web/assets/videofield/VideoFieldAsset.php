<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2020, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\web\assets\videofield;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use dukt\videos\web\assets\videos\VideosAsset;

class VideoFieldAsset extends AssetBundle
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
            VideosAsset::class
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/VideosField'.$this->dotJs(),
        ];

        $this->css = [
            'css/VideosField.css',
        ];

        parent::init();
    }
}