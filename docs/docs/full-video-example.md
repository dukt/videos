# Full video example

```twig
{% set video = entry.video %}

{% if video.loaded %}
    <ul>
        <li>id: {{ video.id }}</li>
        <li>url: {{ video.url }}</li>
        <li>title: {{ video.title }}</li>
        <li>description: {{ video.idescriptiond }}</li>
        <li>duration: {{ video.duration|durationNumeric }}</li>
        <li>published at: {{ video.publishedAt|datetime }}</li>

        <li>author name: {{ video.author.name }}</li>
        <li>author url: {{ video.author.url }}</li>

        <li>thumbnail (300px): <img src="{{ video.thumbnail.url }}"/></li>
        <li>thumbnail (800px): <img src="{{ video.thumbnail.url(800) }}"/></li>
        
        {% if video.size %}
            <li>width: {{ video.size.width }}</li>
            <li>height: {{ video.size.height }}</li>
        {% endif %}

        <li>private: {% video.private %}true{% else %}false{% endif %}</li>
        <li>play count: {{ video.statistic.playCount }}</li>

        <li>{{ dump(video.raw) }}</li>

        {% set videoEmbed = video.embed({title: "Test"},{start: 10, end: 30}) %}

        {% if videoEmbed.loaded %}
            {{ videoEmbed.html }}
            
            <p><strong>Embed URL:</strong> <a href="{{ videoEmbed.url }}">{{ videoEmbed.url }}</a></p>
        {% else %}
            <p>We can’t show you this video embed right now.</p>

            {% for error in videoEmbed.errors %}
                <p>{{ error }}</p>
            {% endfor %}
        {% endif %}
    </ul>
{% else %}
    <p>We can’t show you this video right now but you can watch it online: <a href="{{ video.url }}">{{ video.url }}</a></p>

    <ul>
        {% for error in video.errors %}
            <li>{{ error }}</li>
        {% endfor %}
    </ul>
{% endif %}
```