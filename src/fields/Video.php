<?php
/**
 * @link https://dukt.net/videos/
 *
 * @copyright Copyright (c) 2021, Dukt
 * @license https://github.com/dukt/videos/blob/v2/LICENSE.md
 */

namespace dukt\videos\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\helpers\Db;
use craft\helpers\StringHelper;
use dukt\videos\models\VideoError;
use dukt\videos\Plugin as Videos;
use dukt\videos\web\assets\videofield\VideoFieldAsset;

/**
 * Video field.
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
     * @param null|ElementInterface $element
     *
     * @throws \Twig_Error_Loader
     * @throws \yii\base\Exception
     * @throws \yii\base\InvalidConfigException
     *
     * @return string
     */
    public function getInputHtml($value, ElementInterface $element = null): string
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

        // Preview
        $preview = $view->renderTemplate('videos/_elements/fieldPreview', ['video' => $value]);

        // Has gateways
        $gateways = Videos::$plugin->getGateways()->getGateways();
        $hasGateways = false;

        if ($gateways && count($gateways) > 0) {
            $hasGateways = true;
        }

        if ($hasGateways) {
            // Instantiate Videos Field
            $view->registerJs('new Videos.Field("'.$view->namespaceInputId($id).'");');
        }

        return $view->renderTemplate('videos/_components/fieldtypes/Video/input', [
            'id' => $id,
            'name' => $name,
            'value' => $value,
            'preview' => $preview,
            'hasGateways' => $hasGateways,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function serializeValue($value, ElementInterface $element = null)
    {
        if (!empty($value->url)) {
            return Db::prepareValueForDb($value->url);
        }

        return parent::serializeValue($value, $element);
    }

    /**
     * {@inheritdoc}
     */
    public function normalizeValue($value, ElementInterface $element = null)
    {
        if (empty($value)) {
            return null;
        }

        if ($value instanceof \dukt\videos\models\AbstractVideo) {
            return $value;
        }

        try {
            $video = Videos::$plugin->getVideos()->getVideoByUrl($value);

            if ($video) {
                return $video;
            }
        } catch (\Exception $e) {
            $errorMessage = "Couldn't get video in field normalizeValue: ".$e->getMessage();

            Craft::info($errorMessage, __METHOD__);

            return new VideoError([
                'url' => $value,
                'errors' => [
                    $errorMessage,
                ],
            ]);
        }

        return null;
    }

    /**
     * Get Search Keywords.
     *
     * @param mixed            $value
     * @param ElementInterface $element
     *
     * @return string
     */
    public function getSearchKeywords($value, ElementInterface $element): string
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
