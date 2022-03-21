<?php
/**
 * @link      https://dukt.net/videos/
 * @copyright Copyright (c) Dukt
 * @license   https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\helpers\Db;
use craft\helpers\StringHelper;
use dukt\videos\helpers\VideosHelper;
use dukt\videos\Plugin as Videos;
use dukt\videos\web\assets\videos\VideosAsset;
use craft\helpers\Html;

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

        // Normalize the element ID into only alphanumeric characters, underscores, and dashes.
        $id = Html::id($name);

        // Init CSRF Token
        $jsTemplate = 'window.csrfTokenName = "' . Craft::$app->getConfig()->getGeneral()->csrfTokenName . '";';
        $jsTemplate .= 'window.csrfTokenValue = "' . Craft::$app->getRequest()->getCsrfToken() . '";';
        $js = $view->renderString($jsTemplate);
        $view->registerJs($js);

        // Asset bundle
        $view->registerAssetBundle(VideosAsset::class);

        // Field value
        $video = null;

        if (is_object($value)) {
            $video = VideosHelper::videoToArray($value);
        }

        // Translations
        $view->registerTranslations('videos', [
            'Browse videos…',
            'Cancel',
            'Enter a video URL from YouTube or Vimeo',
            'Remove',
            'Search {gateway} videos…',
            'Select',
            '{plays} plays',
        ]);

        // Variables
        $variables = [
            'id' => $id,
            'name' => $name,
            'value' => $video,
            'namespaceId' => $view->namespaceInputId($id),
            'namespaceName' => $view->namespaceInputName($id),
        ];

        // Instantiate Videos Field
        // $view->registerJs('new Videos.Field("'.$view->namespaceInputId($id).'");');
        $view->registerJs('new VideoFieldConstructor({data: {fieldVariables: ' . \json_encode($variables) . '}}).$mount("#' . $view->namespaceInputId($id) . '-vue");');

        return $view->renderTemplate('videos/_components/fieldtypes/Video/input', $variables);
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
    public function normalizeValue($videoUrl, ElementInterface $element = null): ?\dukt\videos\models\Video
    {
        if ($videoUrl instanceof \dukt\videos\models\Video) {
            return $videoUrl;
        }

        try {
            if (!empty($videoUrl)) {
                $video = Videos::$plugin->getVideos()->getVideoByUrl($videoUrl);

                if ($video !== null) {
                    return $video;
                }

                $video = new \dukt\videos\models\Video();
                $video->url = $videoUrl;
                $video->addError('url', Craft::t('videos', 'Unable to find the video.'));

                return $video;
            }
        } catch (\Exception $e) {
            Craft::info("Couldn't get video in field normalizeValue: " . $e->getMessage(), __METHOD__);
        }

        return null;
    }

    /**
     * Get Search Keywords
     *
     * @param mixed $value
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
