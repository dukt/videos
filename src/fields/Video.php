<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2017, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace dukt\videos\fields;

use Craft;
use craft\base\Field;
use craft\helpers\StringHelper;
use dukt\videos\web\assets\videos\VideosAsset;
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
        return Craft::t('app', 'Videos');
    }

    /**
     * Content Attributes
     */
    public function defineContentAttribute()
    {
        return AttributeType::String;
    }

	/**
	 * Get Input HTML
	 *
	 * @param string $name
	 * @param mixed  $value
	 *
	 * @return mixed
	 */
	public function getInputHtml($value, \craft\base\ElementInterface $element = NULL): string
    {
        $name = $this->handle;
        // $tweet = $this->prepValue($value);

        $unpreppedValue = false;
        
        // get the unprepped value (the video url)

        if($element)
        {
            $unpreppedValue = $element->{$this->handle};
        }


        // Reformat the input name into something that looks more like an ID
        $id = Craft::$app->getView()->formatInputId($name);

        // Figure out what that ID is going to look like once it has been namespaced
        $namespacedId = Craft::$app->getView()->namespaceInputId($id);

        // Init CSRF Token
        $jsTemplate = 'window.csrfTokenName = "{{ craft.app.config.csrfTokenName|e(\'js\') }}";';
        $jsTemplate .= 'window.csrfTokenValue = "{{ craft.app.request.csrfToken|e(\'js\') }}";';
        $js = Craft::$app->getView()->renderString($jsTemplate);
        Craft::$app->getView()->registerJs($js);


        // Asset bundle
        Craft::$app->getView()->registerAssetBundle(VideosAsset::class);

        // CSS
        // Craft::$app->getView()->registerCssFile('videos/css/videos.css');
        // Craft::$app->getView()->registerCssFile('videos/css/VideosExplorer.css');
        // Craft::$app->getView()->registerCssFile('videos/css/VideosField.css');

        // JS
        // Craft::$app->getView()->registerJsFile('videos/js/Videos.js');
        // Craft::$app->getView()->registerJsFile('videos/js/VideosExplorer.js');
        // Craft::$app->getView()->registerJsFile('videos/js/VideosField.js');

        // Instantiate Videos Field
        Craft::$app->getView()->registerJs('new Videos.Field("'.Craft::$app->getView()->namespaceInputId($id).'");');


        // Preview

        if ($value instanceof Video)
        {
            $preview = Craft::$app->getView()->renderTemplate('videos/_elements/fieldPreview', ['video' => $value]);
        }
        else
        {
            $preview = null;
        }

        return Craft::$app->getView()->renderTemplate('videos/_components/fieldtypes/Video/input', [
            'id'    => $id,
            'name'  => $name,
            'value' => $unpreppedValue,
            'preview' => $preview
        ]);
    }


	/**
	 * Prep value
	 *
	 * @param mixed $videoUrl
	 *
	 * @return null
	 */
	public function prepValue($videoUrl)
    {
        try
        {
            $video = Videos::$plugin->videos->getVideoByUrl($videoUrl);

            if($video)
            {
                return $video;
            }
        }
        catch(\Exception $e)
        {
            // VideosPlugin::log("Couldn't get video in field prepValue: ".$e->getMessage(), LogLevel::Error);

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
        if(!empty($value->raw))
        {
            $value->setAttribute('raw', null);
        }

        return StringHelper::toString($value, ' ');
    }
}
