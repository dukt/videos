<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use Craft;
use craft\web\Controller;
use dukt\videos\Plugin as Videos;
use dukt\videos\web\assets\settings\SettingsAsset;

/**
 * Settings controller
 */
class SettingsController extends Controller
{
    /**
     * Settings Index
     *
     * @return null
     */
    public function actionIndex()
    {
        $gateways = Videos::$plugin->getGateways()->getGateways(false);

        Craft::$app->getView()->registerAssetBundle(SettingsAsset::class);

        return $this->renderTemplate('videos/settings/_index', [
            'gateways' => $gateways,
        ]);
    }
}
