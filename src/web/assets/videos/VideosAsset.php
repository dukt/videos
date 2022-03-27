<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\web\assets\videos;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use craft\web\assets\vue\VueAsset;
use dukt\videos\Plugin;

class VideosAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================
    /**
     * @var bool
     */
    private $devServer = true;

    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->depends = [
            CpAsset::class,
            VueAsset::class,
        ];

        if (!Plugin::getInstance()->getVideos()->useDevServer) {
            $this->sourcePath = __DIR__ . '/dist';
            $this->js[] = 'main.js';
            $this->css[] = 'css/main.css';
        } else {
            $this->css[] = 'https://localhost:8090/css/main.css';
            $this->js[] = 'https://localhost:8090/main.js';
        }

        parent::init();
    }
}