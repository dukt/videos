<?php
/**
 * @link https://dukt.net/videos/
 *
 * @copyright Copyright (c) 2021, Dukt
 * @license https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\models;

/**
 * VideoError model class.
 *
 * @author Dukt <support@dukt.net>
 *
 * @since  2.0
 */
class VideoError extends AbstractVideo
{
    /**
     * @var array errors occurred during video retrieving
     */
    public array $errors = [];
}
