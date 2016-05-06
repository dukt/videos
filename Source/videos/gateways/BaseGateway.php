<?php
namespace Dukt\Videos\Gateways;

use Craft\Craft;

abstract class BaseGateway implements IGateway
{
    public function enableOauthFlow()
    {
        return true;
    }

    public function getSettingsHtml()
    {
        $oauthProviderHandle = $this->getOauthProviderHandle();

        $variables = array(
            'provider' => false,
            'account' => false,
            'token' => false,
            'error' => false
        );

        $oauthProvider = Craft::app()->oauth->getProvider($oauthProviderHandle, false);

        if ($oauthProvider)
        {
            if($oauthProvider->isConfigured())
            {
                $token = Craft::app()->videos_oauth->getToken($oauthProviderHandle);

                if ($token)
                {
                    try
                    {
                        $account = Craft::app()->videos_cache->get(['getAccount', $token]);

                        if(!$account)
                        {
                            try
                            {
                                $account = Craft::app()->videos_cache->get(['getAccount', $token]);

                                if(!$account)
                                {
                                    $account = $oauthProvider->getResourceOwner($token);
                                    Craft::app()->videos_cache->set(['getAccount', $token], $account);
                                }

                                if ($account)
                                {
                                    $variables['account'] = $account;
                                    // $variables['settings'] = $plugin->getSettings();
                                }
                            }
                            catch(\Exception $e)
                            {
                                VideosPlugin::log('Couldn’t get account. '.$e->getMessage(), LogLevel::Error);

                                $variables['error'] = $e->getMessage();
                            }
                        }

                        if ($account)
                        {
                            $variables['account'] = $account;
                            // $variables['settings'] = $plugin->getSettings();
                        }
                    }
                    catch(\Exception $e)
                    {
                        VideosPlugin::log('Couldn’t get account. '.$e->getMessage(), LogLevel::Error);

                        $variables['error'] = $e->getMessage();
                    }
                }

                $variables['token'] = $token;
            }

            $variables['provider'] = $oauthProvider;
        }

        $variables['gateway'] = $this;

        return Craft::app()->templates->render('videos/settings/_oauth', $variables);
    }

	/**
	 * Return the handle of the gateway based on its class name
	 *
	 * @return string
	 */
	public function getHandle()
    {
        $handle = get_class($this);
        $handle = substr($handle, strrpos($handle, "\\") + 1);
        $handle = strtolower($handle);

        return $handle;
    }

	/**
	 * Set authentication OAuth token
	 *
	 * @param $token
	 */
	public function authenticationSetToken($token)
    {
        $this->token = $token;
    }

	/**
	 * OAuth Scope
	 *
	 * @return array|null
	 */
	public function getOauthScope()
    {
	    return null;
    }

	/**
	 * OAuth Authorization Options
	 *
	 * @return array|null
	 */
	public function getOauthAuthorizationOptions()
    {
	    return null;
    }

	/**
	 * Returns the URL of the embed from a video ID
	 *
	 * @param       $videoId
	 * @param array $options
	 *
	 * @return string
	 */
	public function getEmbedUrl($videoId, $options = array())
    {
        $queryMark = '?';

        if(strpos($this->getEmbedFormat(), "?") !== false)
        {
            $queryMark = "&";
        }

        $options = http_build_query($options);

        $format = $this->getEmbedFormat().$queryMark.$options;

        $embedUrl = sprintf($format, $videoId);

        return $embedUrl;
    }

	/**
	 * Returns the HTML of the embed from a video ID
	 * @param       $videoId
	 * @param array $options
	 *
	 * @return string
	 */
	public function getEmbedHtml($videoId, $options = array())
    {
        $embedAttributes = array(
            'frameborder' => "0",
            'allowfullscreen' => "true" ,
            'allowscriptaccess' => "true"
        );

        $disableSize = false;

        if(isset($options['disable_size']))
        {
            $disableSize = $options['disable_size'];
        }

        if(!$disableSize)
        {
            if(isset($options['width']))
            {
                $embedAttributes['width'] = $options['width'];
                unset($options['width']);
            }

            if(isset($options['height']))
            {
                $embedAttributes['height'] = $options['height'];
                unset($options['height']);
            }
        }

        if(!empty($options['iframeClass']))
        {
            $embedAttributes['class'] = $options['iframeClass'];
            unset($options['iframeClass']);
        }

        $embedUrl = $this->getEmbedUrl($videoId, $options);

        $embedAttributesString = '';

        foreach($embedAttributes as $key => $value)
        {
            $embedAttributesString .= ' '.$key.'="'.$value.'"';
        }

        return '<iframe src="'. $embedUrl.'"'.$embedAttributesString.'></iframe>';
    }


	/**
	 * Return a video from its public URL
	 *
	 * @param $url
	 *
	 * @return mixed
	 * @throws \Exception
	 */
	public function getVideoByUrl($url)
    {
        $url = $url['url'];

        $videoId = $this->extractVideoIdFromUrl($url);

        if(!$videoId)
        {
            throw new \Exception('Video not found with url given');
        }

        return $this->getVideoById($videoId);
    }
}
