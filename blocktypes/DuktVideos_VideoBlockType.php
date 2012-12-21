<?php
namespace Blocks;

class DuktVideos_VideoBlockType extends BaseBlockType
{
	/**
	 * Block type name
	 */
	public function getName()
	{
		return Blocks::t('Dukt Videos');
	}

	/**
	 * Save it as datetime
	 */
	public function defineContentAttribute()
	{
		return AttributeType::DateTime;
	}

	/**
	 * Show date field
	 */
	public function getInputHtml($name, $value)
	{
		if (empty($value)) $value = new DateTime;

		return blx()->templates->render('duktvideos/input', array(
			'name'       => $name,
			'videoValue'  => ""
		));
	}

	/**
	 * Change datestring to timestamp
	 */
	protected function prepPostData($value)
	{
		return strtotime($value);
	}

}