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
}