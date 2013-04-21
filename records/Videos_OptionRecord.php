<?php

/**
 * Craft Videos
 *
 * @package		Craft Videos
 * @version		Version 1.0
 * @author		Benjamin David
 * @copyright	Copyright (c) 2013 - DUKT
 * @link		http://dukt.net/add-ons/expressionengine/dukt-videos/
 *
 */

namespace Craft;

class Videos_OptionRecord extends BaseRecord
{
	/**
	 * Get Table Name
	 */
    public function getTableName()
    {
        return 'videos_options';
    }

	// --------------------------------------------------------------------

	/**
	 * Define Attributes
	 */
    public function defineAttributes()
    {
        return array(
            'option_name' => AttributeType::String,
            'option_value' => array(AttributeType::String, 'column' => ColumnType::Text),
        );
    }
}