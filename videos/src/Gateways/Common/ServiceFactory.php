<?php

namespace Dukt\Videos\Gateways\Common;

use ReflectionClass;
use Symfony\Component\Finder\Finder;

class ServiceFactory
{
    public static function create($class, $provider = null)
    {
        $class = Helper::getServiceClassName($class);

        if (!class_exists($class)) {
            throw new \Exception("Class '$class' not found");
        }

        $service = new $class($provider);

        return $service;
    }

    /**
     * Get a list of supported services
     */
    public static function find()
    {
        $result = array();

        $directory = dirname(__DIR__);

        $finder = new Finder();

        $files = $finder->files()->in($directory);

        foreach($files as $file)
        {
            $filepath = $file->getRelativePathName();

            if ('Service.php' === substr($filepath, -11))
            {
                // determine class name
                $type = substr($filepath, 0, -11);
                $type = str_replace(array($directory, DIRECTORY_SEPARATOR), array('', '_'), $type);
                $type = trim($type, '_');
                $class = Helper::getServiceClassName($type);

                // ensure class exists and is not abstract
                if (class_exists($class))
                {
                    $reflection = new ReflectionClass($class);
                    if (!$reflection->isAbstract() and
                        $reflection->implementsInterface('\\Dukt\\Videos\\Common\\ServiceInterface'))
                    {
                        $result[] = $type;
                    }
                }
            }
        }

        return $result;
    }
}
