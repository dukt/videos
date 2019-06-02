<?php

return [
    /**
     * The amount of time cache should last.
     *
     * @see http://www.php.net/manual/en/dateinterval.construct.php
     */
    'cacheDuration' => 'PT15M',

    /**
     * Whether request to APIs should be cached or not.
     */
    'enableCache' => true,

    /**
     * Number of videos per page in the explorer.
     */
    'videosPerPage' => 30,

    /**
     * OAuth provider options.
     */
    'oauthProviderOptions' => [
        'youtube' => [
            'clientId' => 'OAUTH_CLIENT_ID',
            'clientSecret' => 'OAUTH_CLIENT_SECRET'
        ],
        'vimeo' => [
            'clientId' => 'OAUTH_CLIENT_ID',
            'clientSecret' => 'OAUTH_CLIENT_SECRET'
        ],
    ],
];
