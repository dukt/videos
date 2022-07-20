# Video Field

## The Field
The Video field type lets you add videos to your entries. Retrieving video informations is then pretty easy : a video variable is provided which let's you retrieve all the informations related to your video.

![Video Field](./resources/screenshots/video-field@2x.png)

## Output

The Video field returns a [Video model](video-model.md) which you can use to access a video’s attributes from your templates or a [FailedVideo model](failed-video-model.md) if an error occured during video loading.

You can use the `loaded` property: if is set to true this is a `Video`, if false this is a `FailedVideo`.

```twig
{% set video = entry.video %}

{% if video.loaded %}
    <ul>
        [...]
        <li>title: {{ video.title }}</li>
        <li>url: {{ video.url }}</li>
        [...]
    </ul>
{% else %}
    <ul>
        {% for error in video.errors %}
            <li>{{ error }}</li>
        {% endfor %}
    </ul>
{% endif %}
```