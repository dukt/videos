# Video Gateway

## What is it?

A video gateway is a library used by the plugin to get information about a video you ask for (thanks to its public url).

A gateway needs to be connected to a cloud service thanks to an [OAuth provider](gateway-extends.md#oauth-provider) in order to call the service API to get video information.

On the [video field](video-field.md) you can access to a video explorer which browse all the plugin gateways to show you collection of videos you have in the different cloud services.

There are two default gateways included with the plugin:

- YouTube (`\dukt\videos\gateways\YouTube`)  
- Vimeo (`\dukt\videos\gateways\Vimeo`)

_Of course, you should check their code to better understand how to write your own gateway._

## How to?

To create a new video gateway, you have to extend the gateway's base class: `\dukt\videos\base\Gateway` and override its abstract methods (and other methods which you have to change return values).

Here is the list of theses methods and their definition.

### getName

This is the public name of the gateway which will be display on the settings page of the plugin and in the video explorer.

Default value is the class name, you can change it by overriding:

```php
public function getName(): string
{
    return 'MyCustomGatewayName';
}
```

### getIconAlias

This is the path to an icon used for illustrate the cloud service your gateway will be about.

You have to define this method:

```php
public function getIconAlias(): string
{
    return '@path/to/icon';
}
```

### getOauthProviderName

This is the OAuth provider name which will be display on the settings page of the plugin, in the OAuth Settings page of the gateway.

Default value is the class name, you can change it by overriding (here is the YouTube example (cause YouTube uses Google OAuth)):

```php
public function getOauthProviderName(): string
{
    return 'Google';
}
```

### getOauthProviderOptions

This is the OAuth provider options loaded from config (like _Client ID_ or _Client Secret_).

Default value is loaded from [Plugin Settings](https://craftcms.com/docs/3.x/extend/plugin-settings.html), you can change it by overriding (here is the YouTube example):

```php
public function getOauthProviderOptions(bool $parseEnv = true): array
{
    $options = parent::getOauthProviderOptions($parseEnv);

    if (isset($options['useOidcMode']) === false) {
        $options['useOidcMode'] = true;
    }

    return $options;
}
```

### createOauthProvider

Here you have to init an OAuth Provider instance. Plugin use [League/oauth2-client](https://oauth2-client.thephpleague.com/) to connect to a cloud service thanks to OAuth.  
Read [League/oauth2-client provider section](https://oauth2-client.thephpleague.com/providers/league/) for more information.

You have to define this method (here is the YouTube example (cause YouTube uses Google OAuth)):

```php
public function createOauthProvider(array $options): \League\OAuth2\Client\Provider\AbstractProvider
{
    return new League\OAuth2\Client\Provider\Google($options);
}
```

### getOauthLoginUrl

Plugin use a Craft action (`\dukt\videos\controllers\OauthController::actionLogin`) to prepare connection to the cloud service using gateway oauth information (like provider, redirect uri, provider options, and so on).  
If you right implement the different OAuth parameters everything should work and you don't have to change this method. But if you wan't to add custom process during OAuth connection you can create your own action and use it by overriding this method:

```php
public function getOauthLoginUrl(): string
{
    return UrlHelper::actionUrl('you/custom/oauth-login/action', ['gatewayHandle' => $this->getHandle()]);
}
```

### getOauthRedirectUrl

Plugin use a Craft action (`\dukt\videos\controllers\OauthController::actionCallback`) to get and keep OAuth response information (like the OAuth Access Token) to authentify api request to the cloud service.
If you right implement the different OAuth parameters everything should work and you don't have to change this method. But if you wan't to add custom process during OAuth connection you can create your own action and use it by overriding this method:

```php
public function getOauthRedirectUrl(): string
{
    return UrlHelper::actionUrl('your/custom/oauth-callback/action');
}
```

### getOauthLogoutUrl

Plugin use a Craft action (`\dukt\videos\controllers\OauthController::actionLogout`) to disconnect from the cloud service by removing OAuth Access Token information.
If you right implement the different OAuth parameters everything should work and you don't have to change this method. But if you wan't to add custom process during OAuth disconnection you can create your own action and use it by overriding this method:

```php
public function getOauthLogoutUrl(): string
{
    return UrlHelper::actionUrl('your/custom/oauth-logout/action', ['gatewayHandle' => $this->getHandle()]);
}
```

### getOauthJavascriptOrigin

This is the OAuth javascript origin which will be display on the settings page of the plugin, in the OAuth Settings page of the gateway.  
This is an helper to configure OAuth param in the cloud service you try to connect to.

Default value is the base url of your site, you can change it by overriding:

```php
public function getOauthJavascriptOrigin(): string
{
    return 'MyCustomURL';
}
```

### getOauthScope

This is the OAuth scope use by OAuth connection to the cloud service.

Default value is an empty array, you can change it by overriding (here is the YouTube example):

```php
public function getOauthScope(): array
{
    return [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.readonly',
    ];
}
```

### getOauthAuthorizationOptions

This is the OAuth authorization options use by OAuth connection to the cloud service.

Default value is an empty array, you can change it by overriding (here is the YouTube example):

```php
public function getOauthAuthorizationOptions(): array
{
    return [
        'access_type' => 'offline',
        'prompt' => 'consent',
    ];
}
```

### getOauthProviderApiConsoleUrl

This is the OAuth provider api console url which will be display on the settings page of the plugin, in the OAuth Settings page of the gateway.

You have to define this method (here is the YouTube example (cause YouTube uses Google OAuth)):

```php
public function getOauthProviderApiConsoleUrl(): string
{
    return 'https://console.developers.google.com/';
}
```

### extractVideoIdFromVideoUrl

With this method, you have to check if the video url matches the cloud service video's url, returns the video ID if it matches or throws a `\dukt\videos\errors\VideoNotFoundException` if not.

You have to define this method (here the YouTube example):

```php
public function extractVideoIdFromVideoUrl(string $videoUrl): string
{
    $regexp = '/^https?:\/\/(www\.youtube\.com|youtube\.com|youtu\.be).*\/(watch\?v=)?(.*)/';

    if (preg_match($regexp, $videoUrl, $matches, PREG_OFFSET_CAPTURE) > 0) {
        $videoId = $matches[3][0];

        // fixes the youtube &feature_gdata bug
        if (strpos($videoId, '&')) {
            $videoId = substr($videoId, 0, strpos($videoId, '&'));
        }

        return $videoId;
    }

    throw new \dukt\videos\errors\VideoNotFoundException(Craft::t('videos', 'Extract ID from URL {videoUrl} on {gatewayName} not working.', ['videoUrl' => $videoUrl, 'gatewayName' => $this->getName()]));
}
```

### createApiClient

With this method, you define a `\GuzzleHttp\Client` which will be used to call cloud service API.

You have to define this method (here the YouTube example):

```php
public function createApiClient(): \GuzzleHttp\Client
{
    try {
        $options = [
            'base_uri' => 'https://www.googleapis.com/youtube/v3/',
            'headers' => [
                'Authorization' => 'Bearer '.$this->getOauthAccessToken()->getToken(),
            ],
        ];

        return new \GuzzleHttp\Client($options);
    } catch (\Exception $e) {
        // log exception
        Craft::error($e->getMessage(), __METHOD__);

        throw new \dukt\videos\errors\ApiClientCreateException(Craft::t('videos', 'An occured during creation of API client for {gatewayName}.', ['gatewayName' => $this->getName()]), 0, $e);
    }
}
```

### fetchVideoById

With this method, you make a call to the cloud service API to get video information. You have to use the `fetch` method which use the previously defined `ApiClient`, return a populated `\dukt\videos\models\Video` model and throw a `\dukt\videos\errors\VideoNotFoundException` if an error occured.

You have to define this method (here the YouTube example):

```php
public function fetchVideoById(string $videoId): \dukt\videos\models\Video
{
    try {
        $data = $this->fetch('videos', [
            'query' => [
                'part' => 'snippet,statistics,contentDetails',
                'id' => $videoId,
            ],
        ]);

        if (count($data['items']) !== 1) {
            throw new \dukt\videos\errors\VideoNotFoundException(Craft::t('videos', 'Fetch video with ID {videoId} on {gatewayName} not working.', ['videoId' => $videoId, 'gatewayName' => $this->getName()]));
        }

        return $this->_parseVideo($data['items'][0]);
    } catch (\Exception $e) {
        // log exception
        Craft::error($e->getMessage(), __METHOD__);

        throw new \dukt\videos\errors\VideoNotFoundException(Craft::t('videos', 'Fetch video with ID {videoId} on {gatewayName} not working.', ['videoId' => $videoId, 'gatewayName' => $this->getName()]), 0, $e);
    }
}
```

### getEmbedUrlFormat

This is the embed url format define by the cloud service (it will be used to generate embedded html video).

You have to define this method (here the YouTube example):

```php
public function getEmbedUrlFormat(): string
{
    return 'https://www.youtube.com/embed/%s?wmode=transparent';
}
```

### getVideosPerPage

This is the number of video you want to show on each page of the explorer, value is loaded from config (like _Client ID_ or _Client Secret_).

Default value is loaded from [Plugin Settings](https://craftcms.com/docs/3.x/extend/plugin-settings.html), you can change it by overriding:

```php
public function getVideosPerPage(): int
{
    return '24';
}
```

### supportsSearch

Return true if the cloud service supports search, false otherwise. It will be used to show a search field in the video explorer on the Video Field.

You have to define this method:

```php
public function supportsSearch(): bool
{
    return true;
}
```

### fetchSections

Here you have to build the cloud service'sections. Sections are splitted into Collections.  
You have to get collections list by querying the cloud service API and build the different part of the explorer with these information.  
Each collection must keep information to querying the cloud service API to find videos to show in. These informations are a method and some options (like a playlist ID).  
Method is the name of a method you will have to define that which be called by the javascript layer of the explorer. For example `'playlist'`method with `['id' => 'playlist-ID']` will call a `getVideosPlaylist(array $options = [])` method in the gateway (so you have to define it). See `\dukt\videos\gateways\YouTube` for more concret examples (with pagination example too).

You have to define this method (here is the YouTube example):

```php
public function fetchSections(): void
{
    $sections = [];

    // library section
    $sections[] = new \dukt\videos\models\GatewaySection([
        'name' => Craft::t('videos', 'explorer.section.library.title'),
        'collections' => [
            new \dukt\videos\models\GatewayCollection([
                'name' => Craft::t('videos', 'explorer.collection.upload.title'),
                'method' => 'uploads',
                'icon' => 'video-camera',
            ]),
            new \dukt\videos\models\GatewayCollection([
                'name' => Craft::t('videos', 'explorer.collection.like.title'),
                'method' => 'likes',
                'icon' => 'thumb-up',
            ]),
        ],
    ]);

    // playlists section
    try {
        $playlistsData = $this->_fetchPlaylists();

        if (count($playlistsData) > 0) {
            $section = new \dukt\videos\models\GatewaySection([
                'name' => Craft::t('videos', 'explorer.section.playlist.title'),
            ]);

            foreach ($playlistsData as $playlistData) {
                $section->collections[] = new GatewayCollection([
                    'name' => $playlistData['snippet']['title'],
                    'method' => 'playlist',
                    'options' => ['id' => $playlistData['id']],
                    'icon' => 'list',
                ]);
            }

            $sections[] = $section;
        }
    } catch (\dukt\videos\errors\ApiClientCreateException $e) {
        // log exception
        Craft::error($e->getMessage(), __METHOD__);
    }

    $this->_sections = $sections;
}
```

### configureEmbedHtmlOptions

On each [video](video-model.md) you have access to its [embed](video-embed-model.md).  
Embed needs html options (to build iframe) and url options (to build the embedded url).  
With this method, you can defined requirements for html options thanks to a Symfony Component: the [OptionResolver](https://symfony.com/doc/current/components/options_resolver.html).

Default value is a valid list of options requirement for building an iframe, you can change it by overriding:

```php
protected function configureEmbedHtmlOptions(\Symfony\Component\OptionsResolver\OptionsResolver $resolver, array $options, \dukt\videos\models\Video $video): void
{
    $resolver
        ->define('id')->allowedTypes('string')->default('video-'.$video->id)
        ->define('class')->allowedTypes('string')
        ->define('width')->allowedTypes('int')
        ->define('height')->allowedTypes('int')
        ->define('frameborder')->allowedTypes('int')->allowedValues(0, 1)->default(0)
        ->define('allow')->allowedTypes('string')->default('autoplay; encrypted-media')
        ->define('allowfullscreen')->allowedTypes('bool')->default(true)
        ->define('allowscriptaccess')->allowedTypes('bool')->default(true)
        ->define('title')->allowedTypes('string')->default('External video from '.$video->getGateway()->getName())
    ;
}
```

### configureEmbedUrlOptions

On each [video](video-model.md) you have access to its [embed](video-embed-model.md).  
Embed needs html options (to build iframe) and url options (to build the embedded url).  
With this method, you can defined requirements for url options thanks to a Symfony Component: the [OptionResolver](https://symfony.com/doc/current/components/options_resolver.html).

Default value is the way to allow each option as a valid option with the OptionResolver, you can change it by overriding:

```php
protected function configureEmbedUrlOptions(\Symfony\Component\OptionsResolver\OptionsResolver $resolver, array $options, \dukt\videos\models\Video $video): void
{
    $resolver->setDefined(array_keys($options));
}
```