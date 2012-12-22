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
		return AttributeType::String;
	}

	/**
	 * Show date field
	 */
	public function getInputHtml($name, $value)
	{
		return blx()->templates->render('duktvideos/field', array(
			'name'       => $name,
			'videoValue'  => $value
		));
	}


}