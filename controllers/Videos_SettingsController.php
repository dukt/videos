<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

/**
 * Videos Settings controller
 */
class Videos_SettingsController extends BaseController
{
    /**
     * Settings Index
     *
     * @return null
     */
    public function actionIndex()
    {
        craft()->videos->requireDependencies();
        
        $variables['gateways'] = craft()->videos_gateways->getGateways(false);

        $this->renderTemplate('videos/settings/_index', $variables);
    }
}
