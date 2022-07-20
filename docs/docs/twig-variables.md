# Twig variables

## url
You can call a video directly in your template, without using the field, thanks to this twig variable.

```twig
{% set video = craft.videos.url('https://www.youtube.com/watch?v=wLhGuE1rVx0') %}

{% if video.loaded %}
    <ul>
        [...]
        <li>title: {{ video.title }}</li>
        <li>url: {{ video.url }}</li>
        [...]
    </ul>
{% endif %}
```