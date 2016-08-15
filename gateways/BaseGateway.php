<?php
namespace Dukt\Videos\Gateways;

use Craft\Craft;
use Craft\VideosPlugin;
use Craft\LogLevel;

abstract class BaseGateway implements IGateway
{
	// Public Methods
	// =========================================================================

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
	 * Where the OAuth flow should be enable or not for this gateway
	 *
	 * @return bool
	 */
	public function enableOauthFlow()
    {
        return true;
    }

	/**
	 * Whether the gateway supports search or not
	 *
	 * @return bool
	 */
	public function supportsSearch()
	{
		// Deprecated in 2.0: Each gateway will need to specify its support for search
		return true;
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
	 * Returns the URL of the embed from a video ID
	 *
	 * @param       $videoId
	 * @param array $options
	 *
	 * @return string
	 */
	public function getEmbedUrl($videoId, $options = array())
    {
	    $format = $this->getEmbedFormat();

    	if(count($options) > 0)
	    {
		    $queryMark = '?';

		    if(strpos($this->getEmbedFormat(), "?") !== false)
		    {
			    $queryMark = "&";
		    }

		    $options = http_build_query($options);

		    $format .= $queryMark.$options;
	    }

        $embedUrl = sprintf($format, $videoId);

        return $embedUrl;
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
	 * OAuth Authorization Options
	 *
	 * @return array|null
	 */
	public function getOauthAuthorizationOptions()
	{
		return null;
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
	 * Returns the gateway's settings as HTML
	 *
	 * @return string
	 */
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
									if(method_exists($oauthProvider, 'getResourceOwner'))
									{
										$account = $oauthProvider->getResourceOwner($token);
									}
									elseif (method_exists($oauthProvider, 'getAccount'))
									{
										// Todo: Remove in OAuth 3.0
										$account = $oauthProvider->getAccount($token);
									}

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

    /**
     * @inheritDoc IGateway::getVideos()
     *
     * @param $method
     * @param $options
     *
     * @return mixed
     * @throws \Exception
     */
    public function getVideos($method, $options)
    {
        $realMethod = 'getVideos'.ucwords($method);

        if(method_exists($this, $realMethod))
        {
            return $this->{$realMethod}($options);
        }
        else
        {
            throw new \Exception("Method ".$realMethod." not found");
        }
    }

	// Protected Methods
	// =========================================================================

	/**
	 * Performs a GET request on the API
	 *
	 * @param       $uri
	 * @param array $query
	 * @param null  $headers
	 *
	 * @return mixed
	 * @throws \Exception
	 */
	protected function apiGet($uri, $query = array(), $headers = null)
    {
        $client = $this->createClient();

        $request = $client->get($uri, $headers, ['query' => $query]);

        VideosPlugin::log("GuzzleRequest: ".(string) $request, LogLevel::Info);

        try
        {
            $response = $request->send();

            VideosPlugin::log("GuzzleResponse: ".(string) $response, LogLevel::Info);

            return $response->json();
        }
        catch(\Exception $e)
        {
            VideosPlugin::log("GuzzleError: ".$e->getMessage(), LogLevel::Error);

            if(method_exists($e, 'getResponse'))
            {
                VideosPlugin::log("GuzzleErrorResponse: ".$e->getResponse()->getBody(true), LogLevel::Error);
            }

            throw $e;
        }
    }
}
