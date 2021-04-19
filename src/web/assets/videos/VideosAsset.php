<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2019, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\web\assets\videos;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use craft\web\assets\vue\VueAsset;

class VideosAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    private $devServer = true;

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->depends = [
            CpAsset::class,
            VueAsset::class,
        ];

        if (!$this->devServer) {
            $this->sourcePath = __DIR__.'/dist';
            $this->js[] = 'js/videos.js';
            $this->js[] = 'js/explorer.js';
            $this->js[] = 'js/field.js';
            $this->js[] = 'js/player.js';
            $this->css[] = 'css/videos.css';
            $this->css[] = 'css/explorer.css';
            $this->css[] = 'css/field.css';
            $this->css[] = 'css/player.css';
        } else {
            $this->js[] = 'https://localhost:8090/js/chunk-vendors.js';
            $this->js[] = 'https://localhost:8090/js/videos.js';
            $this->js[] = 'https://localhost:8090/js/explorer.js';
            $this->js[] = 'https://localhost:8090/js/field.js';
            $this->js[] = 'https://localhost:8090/js/player.js';
        }

        parent::init();
    }
}