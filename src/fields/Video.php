<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\helpers\StringHelper;
use dukt\videos\web\assets\videofield\VideoFieldAsset;
use dukt\videos\Plugin as Videos;

/**
 * Video field
 */
class Video extends Field
{
    // Public Methods
    // =========================================================================

    /**
     * Get name
     */
    public function getName()
    {
        return Craft::t('videos', 'Videos');
    }

    /**
     * Get Input HTML
     *
     * @param string $name
     * @param mixed  $value
     *
     * @return mixed
     */
    public function getInputHtml($value, \craft\base\ElementInterface $element = null): string
    {
        $name = $this->handle;

        $value = $this->prepValue($value);

        $unpreppedValue = false;

        // get the unprepped value (the video url)

        if ($element) {
            $unpreppedValue = $element->{$this->handle};
        }


        // Reformat the input name into something that looks more like an ID
        $id = Craft::$app->getView()->formatInputId($name);

        // Init CSRF Token
        $jsTemplate = 'window.csrfTokenName = "'.Craft::$app->getConfig()->getGeneral()->csrfTokenName.'";';
        $jsTemplate .= 'window.csrfTokenValue = "'.Craft::$app->getRequest()->getCsrfToken().'";';
        $js = Craft::$app->getView()->renderString($jsTemplate);
        Craft::$app->getView()->registerJs($js);

        // Asset bundle
        Craft::$app->getView()->registerAssetBundle(VideoFieldAsset::class);

        // Instantiate Videos Field
        Craft::$app->getView()->registerJs('new Videos.Field("'.Craft::$app->getView()->namespaceInputId($id).'");');


        // Preview

        if ($value instanceof \dukt\videos\models\Video) {
            $preview = Craft::$app->getView()->renderTemplate('videos/_elements/fieldPreview', ['video' => $value]);
        } else {
            $preview = null;
        }

        return Craft::$app->getView()->renderTemplate('videos/_components/fieldtypes/Video/input', [
            'id' => $id,
            'name' => $name,
            'value' => $unpreppedValue,
            'preview' => $preview
        ]);
    }

    /**
     * @inheritdoc
     */
    public function normalizeValue($videoUrl, ElementInterface $element = null)
    {
        try {
            if (!empty($videoUrl)) {
                $video = Videos::$plugin->getVideos()->getVideoByUrl($videoUrl);

                if ($video) {
                    return $video;
                }
            }
        } catch (\Exception $e) {
            Craft::info("Couldn't get video in field prepValue: ".$e->getMessage(), __METHOD__);

            return null;
        }
    }

    /**
     * Get Search Keywords
     *
     * @param mixed $value
     *
     * @return string
     */
    public function getSearchKeywords($value, \craft\base\ElementInterface $element): string
    {
        // ignore "raw" attribute
        if (!empty($value->raw)) {
            $value->setAttribute('raw', null);
        }

        return StringHelper::toString($value, ' ');
    }
}
