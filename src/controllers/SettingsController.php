<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\controllers;

use craft\web\Controller;

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
        \dukt\videos\Plugin::getInstance()->videos->requireDependencies();
        
        $variables['gateways'] = \dukt\videos\Plugin::getInstance()->videos_gateways->getGateways(false);

        return $this->renderTemplate('videos/settings/_index', $variables);
    }
}
