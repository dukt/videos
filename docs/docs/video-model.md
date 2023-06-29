# Video Model

## Properties

### id
`(int|null)` The ID of the video.

### raw
`(mixed|null)` The raw response object.

### url
`(string|null)` The URL of the video.

### gatewayHandle
`(string|null)` The gateway’s handle.

### gatewayName
`(string|null)` The gateway’s name.

### date
`(\DateTime|null)` The date the video was uploaded.

### plays
`(int|null)` The number of times the video has been played.

### durationSeconds
`(int|null)` Duration of the video in seconds.

### duration8601
`(string|null)` Duration of the video in ISO 8601 format.

### authorName
`(string|null)` The author’s name.

### authorUrl
`(string|null)` The author’s URL.

### authorUsername
`(string|null)` The author’s username.

### thumbnailSource
`(string|null)` The thumbnail’s source.

### title
`(string|null)` The video’s title.

### description
`(string|null)` The video’s description.

### private = false
`(bool)` Is this video private?.

### width
`(int|null)` The video’s width.

### height
`(int|null)` The video’s height.


## Methods

### getDuration(): string
Get the video’s duration.

### getEmbed(array $opts = []): Twig_Markup
Get the video’s embed.

### getEmbedUrl(array $opts = []): string
Get the video’s embed URL.

### getGateway()
Get the video’s gateway.

### getThumbnail($size = 300)
Get the video’s thumbnail.