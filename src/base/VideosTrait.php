<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\base;

use Craft;

trait VideosTrait
{
	// Public Methods
	// =========================================================================

	/**
	 * Checks dependencies and redirects to install if one or more are missing
	 *
	 * @return bool
	 */
	public function requireDependencies()
	{
		if ($this->areDependenciesMissing())
		{
			$url = UrlHelper::getUrl('videos/install');
			Craft::$app->request->redirect($url);
			return false;
		}
		else
		{
			return true;
		}
	}

	/**
	 * Get Missing Dependencies
	 *
	 * @return array
	 */
	public function getMissingDependencies()
	{
		return $this->getDependencies(true);
	}

	// Private Methods
	// =========================================================================

	/**
	 * Returns `true` if dependencies are missing, and `false` otherwise
	 *
	 * @return bool
	 */
	private function areDependenciesMissing()
	{
		$missingDependencies = $this->getMissingDependencies();

		if(count($missingDependencies) > 0)
		{
			return true;
		}

		return false;
	}

	/**
	 * Get dependencies
	 *
	 * @return array
	 */
	private function getDependencies($missingOnly = false)
	{
		$dependencies = array();

		$plugin = Craft::$app->plugins->getPlugin('videos');
		$plugins = $plugin->getRequiredPlugins();

		foreach($plugins as $key => $plugin)
		{
			$dependency = $this->getPluginDependency($plugin);

			if($missingOnly)
			{
				if($dependency['isMissing'])
				{
					$dependencies[] = $dependency;
				}
			}
			else
			{
				$dependencies[] = $dependency;
			}
		}

		return $dependencies;
	}

	/**
	 * Get dependency
	 *
	 * @return array
	 */
	private function getPluginDependency($dependency)
	{
        $isMissing = true;

        $plugin = Craft::$app->plugins->getPlugin($dependency['handle'], false);

        if($plugin)
        {
            $currentVersion = $plugin->version;

            if(version_compare($currentVersion, $dependency['version']) >= 0)
            {
                $allPluginInfo = Craft::$app->plugins->getAllPluginInfo();

                if(isset($allPluginInfo[$dependency['handle']]))
                {
                    $pluginInfos = $allPluginInfo[$dependency['handle']];

                    if($pluginInfos['isInstalled'] && $pluginInfos['isEnabled'])
                    {
                        $isMissing = false;
                    }
                }
            }
        }

        $dependency['isMissing'] = $isMissing;
        $dependency['plugin'] = $plugin;
        $dependency['pluginLink'] = 'https://dukt.net/craft/'.$dependency['handle'];

        return $dependency;
	}
}
