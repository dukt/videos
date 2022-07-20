# Twig filters

## duration
The video's duration is a `\DateInterval` so we've made two filters for working with it.

### durationNumeric

This filter format video's duration to a `HH:MM:SS` string.

```twig
{% set video = entry.video %}

{% if video.loaded %}
    <ul>
        [...]
        <li>duration: {{ video.duration|durationNumeric }}</li>
        [...]
    </ul>
{% endif %}
```

### durationISO8601

This filter format video's duration to an iso 8601 string (eg: PT15M).

```twig
{% set video = entry.video %}

{% if video.loaded %}
    <ul>
        [...]
        <li>duration: {{ video.duration|durationISO8601 }}</li>
        [...]
    </ul>
{% endif %}
```