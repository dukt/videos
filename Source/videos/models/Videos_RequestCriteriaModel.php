<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2015, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_RequestCriteriaModel extends BaseModel
{
    protected function defineAttributes()
    {
        return array(
            'gateway' => AttributeType::String,
            'method' => AttributeType::String,
            'query' => array(AttributeType::Mixed, 'default' => array()),
        );
    }

    public function send()
    {
        $response = array(
            'data' => null,
            'success' => false,
            'error' => false
        );

        try
        {
            $response['data'] = craft()->videos->sendRequest($this);
            $response['success'] = true;
        }
        catch(\Exception $e)
        {
            $response['error'] = true;
            $response['errorMessage'] = $e->getMessage();
        }

        return $response;
    }
}