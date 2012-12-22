<?php
namespace Blocks;

class DuktVideosVariable
{
    public function services($service = false)
    {
        return blx()->duktVideos_services->getServices($service);
    }
    
    public function getIngredients()
    {
        return blx()->duktVideos_ingredients->getIngredients();
    }
}