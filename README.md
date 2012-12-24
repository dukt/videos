# Dukt Videos for Blocks CMS

## Installation

1. Move `duktvideos/` folder to `/blocks/plugins/`
2. In the admin, go to the **Settings / Plugins** section and enable Dukt Videos plugin
3. In the admin, go to the **Dukt Videos** section in order to configure YouTube & Vimeo

## Block Type

Retrieving video informations from your field is pretty easy. A video variable is provided which let's you retrieve all the informations related to your video.


### Variables

- author_name
- author_url
- author_username
- date
- description
- duration
- id
- plays
- service_key
- service_name
- thumbnail
- thumbnail_large
- title
- url

### embed()

Display the video embed

#### Parameters

- width=
- height=
- default_size=
- autoplay=
- loop=

#### Vimeo Parameters

- color=
- portrait=
- title=
- byline=

#### YouTube Parameters
- autohide=
- cc_load_policy=
- color=
- controls=
- disablekb=
- end=
- fs=
- iv_load_policy=
- modestbranding=
- rel=
- showinfo=
- start=
- theme=

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


