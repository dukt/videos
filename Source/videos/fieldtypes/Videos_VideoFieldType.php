<?php
/**
 * @link      https://dukt.net/craft/videos/
 * @copyright Copyright (c) 2016, Dukt
 * @license   https://dukt.net/craft/videos/docs/license
 */

namespace Craft;

class Videos_VideoFieldType extends BaseFieldType
{
    // Public Methods
    // =========================================================================

    /**
     * Get name
     */
    public function getName()
    {
        return Craft::t('Videos');
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
	public function getInputHtml($name, $value)
    {
        $unpreppedValue = false;
        
        // get the unprepped value (the video url)

        if($this->element)
        {
            $unpreppedValue = $this->element->getContent()->getAttribute($this->model->handle);
        }


        // Reformat the input name into something that looks more like an ID
        $id = craft()->templates->formatInputId($name);

        // Figure out what that ID is going to look like once it has been namespaced
        $namespacedId = craft()->templates->namespaceInputId($id);

        // Init CSRF Token
        $jsTemplate = 'window.csrfTokenName = "{{ craft.config.csrfTokenName|e(\'js\') }}";';
        $jsTemplate .= 'window.csrfTokenValue = "{{ craft.request.csrfToken|e(\'js\') }}";';
        $js = craft()->templates->renderString($jsTemplate);
        craft()->templates->includeJs($js);

        // CSS
        craft()->templates->includeCssResource('videos/css/videos.css');
        craft()->templates->includeCssResource('videos/css/VideosExplorer.css');
        craft()->templates->includeCssResource('videos/css/VideosField.css');

        // JS
        craft()->templates->includeJsResource('videos/js/Videos.js');
        craft()->templates->includeJsResource('videos/js/VideosExplorer.js');
        craft()->templates->includeJsResource('videos/js/VideosField.js');

        // Instantiate Videos Field
        craft()->templates->includeJs('new Videos.Field("'.craft()->templates->namespaceInputId($id).'");');


        // Preview

        if ($value instanceof Videos_VideoModel)
        {
            $preview = craft()->templates->render('videos/_elements/fieldPreview', ['video' => $value]);
        }
        else
        {
            $preview = null;
        }

        return craft()->templates->render('videos/_components/fieldtypes/Video/input', [
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
            $video = craft()->videos->getVideoByUrl($videoUrl);

            if($video)
            {
                return $video;
            }
        }
        catch(\Exception $e)
        {
            VideosPlugin::log("Couldn't get video in field prepValue: ".$e->getMessage(), LogLevel::Error);

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
	public function getSearchKeywords($value)
    {
        // ignore "raw" attribute
        if(!empty($value->raw))
        {
            $value->setAttribute('raw', null);
        }

        return StringHelper::arrayToString($value, ' ');
    }
}
