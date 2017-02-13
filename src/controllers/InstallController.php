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
 * Install controller
 */
class InstallController extends Controller
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
		$missingDependencies = Videos::$plugin->videos->getMissingDependencies();

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
