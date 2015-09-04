<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_PluginController extends BaseController
{
    // Properties Methods
    // =========================================================================

    private $pluginHandle = 'videos';
    private $pluginService;

    // Public Methods
    // =========================================================================

    public function __construct()
    {
        $this->pluginService = craft()->{$this->pluginHandle.'_plugin'};
    }

    public function actionDownload()
    {

        $pluginHandle = craft()->request->getParam('plugin');


        // download plugin (includes download, unzip)

        $download = $this->pluginService->download($pluginHandle);

        if($download['success'] == true)
        {
            $this->redirect(
                UrlHelper::getActionUrl(
                    $this->pluginHandle.'/plugin/install',
                    array('plugin' => $pluginHandle, 'redirect' => craft()->request->getUrlReferrer())
                )
            );
        }
        else
        {
            // download failure

            $msg = 'Couldn’t install plugin.';

            if(isset($download['msg']))
            {
                $msg = $download['msg'];
            }

            Craft::log('Couldn’t download plugin: '.$msg, LogLevel::Error);

            craft()->userSession->setError(Craft::t($msg));
        }

        // redirect
        $this->redirect(craft()->request->getUrlReferrer());
    }

    public function actionEnable()
    {

        $pluginHandle = craft()->request->getParam('plugin');

        $this->pluginService->enable($pluginHandle);

        $this->redirect(craft()->request->getUrlReferrer());
    }

    public function actionInstall()
    {

        // pluginHandle

        $pluginHandle = craft()->request->getParam('plugin');
        $redirect = craft()->request->getParam('redirect');

        if (!$redirect)
        {
            $redirect = craft()->request->getUrlReferrer();
        }


        // install plugin

        if($this->pluginService->install($pluginHandle))
        {
            // install success
            Craft::log($pluginHandle.' plugin installed.', LogLevel::Error);
            craft()->userSession->setNotice(Craft::t('Plugin installed.'));
        }
        else
        {
            // install failure
            Craft::log("Couldn’t install ".$pluginHandle." plugin.", LogLevel::Error);
            craft()->userSession->setError(Craft::t("Couldn't install plugin."));
        }

        // redirect
        $this->redirect(craft()->request->getUrlReferrer());
    }
}