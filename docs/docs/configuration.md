# Configuration

The default plugin settings [can be overridden](https://craftcms.com/docs/3.x/extend/plugin-settings.html#overriding-setting-values) by creating a `videos.php` file under your `/config` directory.

Here are the default settings used by Videos.

## cacheDuration

The amount of time cache should last.

See [http://www.php.net/manual/en/dateinterval.construct.php](http://www.php.net/manual/en/dateinterval.construct.php)

    'cacheDuration' => 'PT15M',

## enableCache

Whether request to APIs should be cached or not.

    'enableCache' => true,

## oauthProviderOptions

OAuth provider options.

    'oauthProviderOptions' => [
        'youtube' => [
            'clientId' => '000000000000-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
            'clientSecret' => 'xxxxxxxxxxxxxxxxxxxxxxxx'
        ],

        'vimeo' => [
            'clientId' => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'clientSecret' => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        ],
    ]

## videosPerPage

Number of videos per page in the explorer.

    'videosPerPage' => 30
