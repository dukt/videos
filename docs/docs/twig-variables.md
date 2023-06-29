# Twig Variables

## getEmbed(videoUrl, embedOptions = [])

Returns the embed code for a video.

- `videoUrl`: The URL of the video to embed. (Required)
- `embedOptions`: An array of options to pass to the embed.

```twig
{% set videoEmbed = craft.videos.getEmbed('https://www.youtube.com/watch?v=-Oox2w5sMcA', ['width' => '100%']) %}

{{ videoEmbed }}
```

## getVideoByUrl(videoUrl, enableCache = true, cacheExpiry = 3600)

Retrieve a video from its URL.

- `videoUrl`: The URL of the video to embed. (Required)
- `enableCache`: Whether to enable caching. (Default: true)
- `cacheExpiry`: The number of seconds to cache the video. (Default: 3600)

```twig
{% set video = craft.videos.getVideoByUrl('https://www.youtube.com/watch?v=-Oox2w5sMcA') %}

{% if video %}
    {% if not video.hasErrors('url') %}
        <ul>
            <li>title: {{ video.title }}</li>
            <li>url: {{ video.url }}</li>
            <li>embed: {{ video.embed({ width: 300, height: 200 }) }}</li>
        </ul>
    {% else %}
        <p>Video has errors:</p>
        <ul>
            {% for error in video.getErrors('url') %}
                <li>{{ error }}</li>
            {% endfor %}
        </ul>
    {% endif %}
{% else %}
    <p>No video.</p>
{% endinf %}
```

## url(videoUrl, enableCache = true, cacheExpiry = 3600)

Alias for [getVideoByUrl()](#getvideobyurl-videourl-enablecache-true-cacheexpiry-3600).