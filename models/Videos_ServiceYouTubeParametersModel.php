<?php

namespace Craft;

class Videos_ServiceYouTubeParametersModel extends BaseModel
{
    // --------------------------------------------------------------------

    /**
     * Define Attributes
     */
    public function defineAttributes()
    {
        $attributes = array(
                'developerKey' => array(AttributeType::String, 'required' => true)
            );

        return $attributes;
    }
}