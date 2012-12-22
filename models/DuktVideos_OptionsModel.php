<?php
namespace Blocks;

class DuktVideos_OptionsModel extends BaseModel
{
    public function defineAttributes()
    {
        return array(
            'option_name' => AttributeType::String,
            'option_value' => AttributeType::String,
        );
    }
}