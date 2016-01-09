<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_CacheService extends BaseApplicationComponent
{
    // Public Methods
    // =========================================================================

    /**
     * Get
     */
    public function get($id)
    {
        if(craft()->config->get('enableCache', 'videos') == true)
        {
            $cacheKey = $this->getCacheKey($id);

            return craft()->cache->get($cacheKey);
        }
    }

    /**
     * Set
     */
    public function set($id, $value, $expire = null, $dependency = null, $enableCache = null)
    {
        if(is_null($enableCache))
        {
            $enableCache = craft()->config->get('enableCache', 'videos');
        }

        if($enableCache)
        {
            $cacheKey = $this->getCacheKey($id);

            if(!$expire)
            {
                $expire = craft()->config->get('cacheDuration', 'videos');
                $expire = new DateInterval($expire);
                $expire = $expire->format('%s');
            }

            return craft()->cache->set($cacheKey, $value, $expire, $dependency);
        }
    }

    // Private Methods
    // =========================================================================

    /**
     * Get Cache Key
     */
    private function getCacheKey(array $request)
    {
        unset($request['CRAFT_CSRF_TOKEN']);

        $hash = md5(serialize($request));

        $cacheKey = 'videos.'.$hash;

        return $cacheKey;
    }
}
