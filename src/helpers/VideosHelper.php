<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\helpers;

/**
 * Videos helper
 */
class VideosHelper
{
    // Public Methods
    // =========================================================================

    /**
     * Formats seconds to hh:mm:ss
     */
    public static function getDuration($seconds)
    {
        $hours = (int) ((int) ($seconds) / 3600);
        $minutes = (int) (($seconds / 60) % 60);
        $seconds = (int) ($seconds % 60);

        $hms = "";

        if($hours > 0)
        {
            $hms .= str_pad($hours, 2, "0", STR_PAD_LEFT).":";
        }

        $hms .= str_pad($minutes, 2, "0", STR_PAD_LEFT). ":";

        $hms .= str_pad($seconds, 2, "0", STR_PAD_LEFT);

        return $hms;
    }
}
