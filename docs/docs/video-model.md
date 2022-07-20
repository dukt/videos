# Video

Class `\dukt\videos\models\FailedVideo`.

You have access to a [Video model](video-model.md) when a video is trully loaded (with `loaded` property will be set to __true__), otherwise you will get a [FailedVideo model](failed-video-model.md) (with `loaded` property will be set to __false__).

See how to use it in the [full video example](full-video-example.md).

## Properties

### id
`string` The ID of the video.

### url
`string` The video's url.

### title
`string` The video's title.

### description
`string` The video’s description.

### duration
`\DateInterval` Duration of the video.

### publishedAt
`\DateTime` The date the video was uploaded.

### authorName
`string` The video author's name.

### authorUrl
`string` The video author's url.

### thumbnailSmallestSourceUrl
`string|null` The video's smallest thumbnail source url.

### thumbnailLargestSourceUrl
`string|null` The video's largest thumbnail source url.

### width
`int` The video size's width.

### height
`int` The video size's height.

### private = false
`bool` Is this video private?

### plays
`int` The number of times the video has been played.

### gatewayHandle
`string` The gateway’s handle.

### raw
`mixed` The raw response object.

### loaded
`bool:true` The video is loaded.

## Methods

### getGateway
Get the video’s gateway.  
```php
getGateway(): \dukt\videos\base\Gateway
```

### getEmbed
Get the video’s embed.  
```php
getEmbed(array $htmlOptions = [], array $urlOptions = []): \dukt\videos\models\AbstractVideoEmbed
```

### getThumbnail
Get the thumbnail's url by size.
```php
getThumbnail(int $size = 300): string
```
