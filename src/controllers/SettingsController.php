<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use craft\web\Controller;
use dukt\videos\Plugin as Videos;

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
        Videos::$plugin->videos->requireDependencies();
        
        $variables['gateways'] = Videos::$plugin->videos_gateways->getGateways(false);

        return $this->renderTemplate('videos/settings/_index', $variables);
    }
}
