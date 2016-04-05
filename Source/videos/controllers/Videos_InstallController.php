<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_InstallController extends BaseController
{
	// Public Methods
	// =========================================================================

	/**
	 * Install Index
	 *
	 * @return null
	 */
	public function actionIndex()
	{
		$missingDependencies = craft()->videos->getMissingDependencies();

		if (count($missingDependencies) > 0)
		{
			$this->renderTemplate('videos/_special/install/dependencies', [
				'pluginDependencies' => $missingDependencies
			]);
		}
		else
		{
			$this->redirect('videos/settings');
		}
	}
}
