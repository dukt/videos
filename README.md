# Dukt Videos for Blocks CMS

## Block Type

Retrieving video informations from your field is pretty easy. A video variable is provided which let's you retrieve all the informations related to your video.


### variables

- id
- url
- date
- plays
- duration
- author_name
- author_link
- username
- author
- thumbnail
- thumbnail_large
- embed
- title
- description
- video_found


### embed()

Display the video embed

#### Parameters

- width
- height
- autoplay

#### Return

- video embed html


### Example : Displaying video data from a field

	{% set embed_params = { width: 300, height: 200 } %}
	
	{% set video = entry.video %}
	
	<ul>
		<li>title : {{ video.title }}</li>
		<li>url : {{ video.url }}</li>
		<li>embed : {{ video.embed(embed_params) }}</li>
	</ul>


## blx.duktvideos

If you just want to retrieve video informations from a custom video url in your templates, here is what to do :

### find()

Retrieve a video from its URL.

#### Parameters

- video_url

#### Return

- video

### Example

	{% set embed_params = { width: 300, height: 200 } %}

	{% set video = blx.duktvideos.find('http://youtu.be/14pRmb5LAhU') %}
	
	<ul>
		<li>title : {{ video.title }}</li>
		<li>url : {{ video.url }}</li>
		<li>embed : {{ video.embed(embed_params) }}</li>
	</ul>


