<?php

namespace Dukt\Videos\Common;

/**
 * Helper class
 */
class Helper
{
    public static function camelCase($str)
    {
        return preg_replace_callback(
            '/_([a-z])/',
            function ($match)
            {
                return strtoupper($match[1]);
            },
            $str
        );
    }

    public static function getServiceShortName($className)
    {
        if (0 === strpos($className, '\\'))
        {
            $className = substr($className, 1);
        }

        if (0 === strpos($className, 'Dukt\\Videos\\'))
        {
            return trim(str_replace('\\', '_', substr($className, 11, -7)), '_');
        }

        return '\\'.$className;
    }

    public static function getServiceClassName($shortName)
    {
        if (0 === strpos($shortName, '\\'))
        {
            return $shortName;
        }

        // replace underscores with namespace marker, PSR-0 style
        $shortName = str_replace('_', '\\', $shortName);
        if (false === strpos($shortName, '\\'))
        {
            $shortName .= '\\';
        }

        return '\\Dukt\\Videos\\'.$shortName.'Service';
    }
}
