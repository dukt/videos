<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) 2019, Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\helpers\Db;
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
     * Get the field’s name.
     *
     * @return string
     */
    public function getName(): string
    {
        return Craft::t('videos', 'Videos');
    }

    /**
     * Get Input HTML.
     *
     * @param                       $value
     * @param ElementInterface|null $element
     *
     * @return string
     * @throws \Twig_Error_Loader
     * @throws \yii\base\Exception
     * @throws \yii\base\InvalidConfigException
     */
    public function getInputHtml($value, \craft\base\ElementInterface $element = null): string
    {
        $view = Craft::$app->getView();
        $name = $this->handle;


        // Reformat the input name into something that looks more like an ID
        $id = $view->formatInputId($name);

        // Init CSRF Token
        $jsTemplate = 'window.csrfTokenName = "'.Craft::$app->getConfig()->getGeneral()->csrfTokenName.'";';
        $jsTemplate .= 'window.csrfTokenValue = "'.Craft::$app->getRequest()->getCsrfToken().'";';
        $js = $view->renderString($jsTemplate);
        $view->registerJs($js);

        // Asset bundle
        $view->registerAssetBundle(VideoFieldAsset::class);

        // Instantiate Videos Field
        $view->registerJs('new Videos.Field("'.$view->namespaceInputId($id).'");');
        $view->registerJs('new VideoFieldConstructor().$mount("#'.$view->namespaceInputId($id).'-vue");');


        // Preview

        if ($value instanceof \dukt\videos\models\Video) {
            $preview = $view->renderTemplate('videos/_elements/fieldPreview', ['video' => $value]);
        } else {
            $preview = null;
        }

        return $view->renderTemplate('videos/_components/fieldtypes/Video/input', [
            'id' => $id,
            'name' => $name,
            'value' => $value,
            'preview' => $preview
        ]);
    }

    /**
     * @inheritdoc
     */
    public function serializeValue($value, ElementInterface $element = null)
    {
        if (!empty($value->url)) {
            return Db::prepareValueForDb($value->url);
        }

        return parent::serializeValue($value, $element);
    }

    /**
     * @inheritdoc
     */
    public function normalizeValue($videoUrl, ElementInterface $element = null)
    {
        if ($videoUrl instanceof \dukt\videos\models\Video) {
            return $videoUrl;
        }

        try {
            if (!empty($videoUrl)) {
                $video = Videos::$plugin->getVideos()->getVideoByUrl($videoUrl);

                if ($video) {
                    return $video;
                }
            }
        } catch (\Exception $e) {
            Craft::info("Couldn't get video in field normalizeValue: ".$e->getMessage(), __METHOD__);
        }

        return null;
    }

    /**
     * Get Search Keywords
     *
     * @param mixed            $value
     * @param ElementInterface $element
     *
     * @return string
     */
    public function getSearchKeywords($value, \craft\base\ElementInterface $element): string
    {
        $keywords = [];

        if ($value instanceof \dukt\videos\models\Video) {
            $keywords[] = $value->id;
            $keywords[] = $value->url;
            $keywords[] = $value->gatewayHandle;
            $keywords[] = $value->gatewayName;
            $keywords[] = $value->authorName;
            $keywords[] = $value->authorUsername;
            $keywords[] = $value->title;
            $keywords[] = $value->description;
        }

        $searchKeywords = StringHelper::toString($keywords, ' ');

        return StringHelper::encodeMb4($searchKeywords);
    }
}
