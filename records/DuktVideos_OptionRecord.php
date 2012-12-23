<?php

namespace Blocks;

class DuktVideos_OptionRecord extends BaseRecord
{
    public function getTableName()
    {
        return 'duktvideos_options';
    }
    
	// --------------------------------------------------------------------

    public function defineAttributes()
    {
        return array(
            'option_name' => AttributeType::String,
            'option_value' => AttributeType::String,
        );
    }
}