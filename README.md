# Dukt Videos for Craft

## Installation

### Plugin installation

1. Move `duktvideos/` folder to `/craft/plugins/`
2. In the admin, go to the **CP / Settings / Plugins** section and enable Dukt Videos plugin
3. In the admin, go to the **CP / Dukt Videos** section in order to configure YouTube & Vimeo

### Vimeo Configuration

1. Create a new app in Vimeo Developer : [https://developer.vimeo.com/apps](https://developer.vimeo.com/apps)
2. Copy paste client_id and client secret_values to **CP / Dukt Videos / Vimeo Configuration**

### YouTube Configuration

1. Create a new project in Google APIs : [https://code.google.com/apis/console/](https://code.google.com/apis/console/)
2. Go to **Google APIs / Your Project / API Access** and click **Create an OAuth 2.0 client ID**
3. Give a product name and click **Next**
4. Your client should have the following settings :
	- Application type : Web Application
	- Authorized Redirect URIs (click more options) : **http://yourwebsite.com/index.php/admin/actions/duktvideos/settings/callback/youtube**
	- Authorized Javascript Origins : **http://yourwebsite.com/**
5. Copy paste client id and client secret values to **CP / Dukt Videos / YouTube Configuration**
6. Register a new Developer Key : https://code.google.com/apis/youtube/dashboard
7. Copy paste Developer Key to **CP / Dukt Videos / YouTube Configuration**

## Field Type

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

- autoplay=
- disable_size=
- height=
- loop=
- width=

#### Vimeo Parameters

- byline=
- color=
- portrait=
- title=

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


## craft.duktvideos

If you just want to retrieve video informations from a custom video url in your templates, here is what to do :

### url()

Retrieve a video from its URL.

#### Parameters

- video_url

#### Return

- video

### Example

	{% set video = craft.duktvideos.url('http://youtu.be/14pRmb5LAhU') %}

	{{video.embed({ width: 300, height: 200, autoplay: 1 })}}

	<ul>
		<li>title : {{ video.title }}</li>
		<li>description : {{ video.description }}</li>
		<li>url : {{ video.url }}</li>
	</ul>


