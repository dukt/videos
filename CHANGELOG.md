Changelog
=========

## Unreleased

### Added
- Added missing translations.

### Fixed
- Fixed a bug where the `site` query param was present in the OAuth redirect URI.

## 3.0.0-beta.1 - 2022-04-06

### Added
- Initial Craft CMS 4 compatibility.

## 2.1.0 - 2022-03-30

### Added 
- Added icons for Vimeo uploads, likes, folders, albums and showcases.
- Added icons for YouTube uploads, favorites, and playlists.
- Added support for Vimeo folders and showcases.

### Changed
- Allow gateway OAuth settings editing and saving only when `allowAdminChanges` Craft config is enabled.
- Videos now uses Vue.js.

### Fixed
- Fixed a bug where the field’s video URL value could get lost if the gateway wasn’t available.

## 2.0.15 - 2021-05-19

### Added
- Added Vimeo folders support.
- Added collection icon support.

### Changed
- Renamed Vimeo’s “Playlists” section to “Showcases”.
- Renamed Vimeo’s “Favorites” to “Likes”.
- The plugin’s icon has been updated.
- Use Vue.js for JavaScript interactions.

### Fixed
- Fixed a bug where Vimeo video listing might not be loaded properly when the plugin was unable to find one of the videos’ thumbnail.

### Fixed
- Fixed a bug where Vimeo thumbnail generation could fail due to Vimeo not providing a file with an extension, resulting in an exception for installs using the GD image driver. ([#40](https://github.com/dukt/videos/issues/40), [#54](https://github.com/dukt/videos/issues/54))

## 2.0.14 - 2021-04-08

### Added
- Added environment variable suggestions support for the OAuth client ID and secret.
- Added a link to the documentation in the OAuth settings for video providers.

### Changed
- The `dukt\videos\services\Videos::requestVideoById()` method now takes into account Videos’ `enableCache` config.

### Fixed
- Fixed a bug where the plugin was using a medium quality image for generating thumbnails, resulting in low quality thumbnails. ([#48](https://github.com/dukt/videos/issues/48))

## 2.0.13 - 2021-02-10

### Changed
- Updated `league/oauth2-client` to 2.5.

### Fixed
- Fixed a bug where the environment variables were not being parsed when used for client ID or secret OAuth configuration.
- Fixed a bug where video thumbnails could not be saved due to an issue with Guzzle 7. ([#49](https://github.com/dukt/videos/issues/49))

## 2.0.12 - 2020-09-25

### Changed
- Videos now requires Craft CMS 3.5.0 or above.

### Fixed
- Fixed `m190601_092217_tokens` migration that was causing issues during Craft 2 to Craft 3 upgrade. ([#32](https://github.com/dukt/videos/issues/32), [#44](https://github.com/dukt/videos/issues/44))
- Fixed an issue where OAuth provider options were not properly formatted in the project config.

## 2.0.11 - 2020-09-18

### Added
- Added `\dukt\videos\models\Video::$duration8601`. ([#27](https://github.com/dukt/videos/pull/27))
- Added `title` embed option. ([#33](https://github.com/dukt/videos/pull/33))

### Changed
- Changed the maximum number of YouTube playlists from 5 to 50. ([#28](https://github.com/dukt/videos/issues/28))
- Deprecated `\dukt\videos\models\Video::$thumbnailLargeSource`, use `\dukt\videos\models\Video::$thumbnailSource` instead. ([#37](https://github.com/dukt/videos/issues/37))

### Fixed
- Fixed the styles of the explorer's sidebar.

## 2.0.10 - 2019-06-05

### Fixed
- Fixed a bug where migration `m190601_092217_tokens` could fail when `allowAdminChanges` was to `false`. ([#22](https://github.com/dukt/videos/issues/22), [#23](https://github.com/dukt/videos/issues/23))

## 2.0.9 - 2019-06-03

### Changed
- Updated schema version to 1.0.2.

## 2.0.8 - 2019-06-02

### Added
- Added environment variables support for gateways’s OAuth client ID and secret in a project config context. ([#18](https://github.com/dukt/videos/issues/18))

### Changed
- OAuth tokens are now stored in their own database table instead of being stored in the plugin’s settings. ([#14](https://github.com/dukt/videos/issues/14), [#21](https://github.com/dukt/videos/issues/21))

### Fixed
- Fixed a bug where the YouTube gateway was not explicitly prompting for consent, which could cause the token to be saved without a refresh token.
- Fixed a bug that prevented YouTube thumbnails from working properly for private videos. ([#17](https://github.com/dukt/videos/issues/17))

## 2.0.7 - 2019-05-15

### Fixed 
- Fixed a bug where search keywords were not properly encoded to support emojis when saving a video. ([#20](https://github.com/dukt/videos/issues/20))

## 2.0.6 - 2019-03-29

### Changed
- Updated `league/oauth2-google` dependency to `^3.0`. 

## 2.0.5 - 2019-03-03

### Fixed
- Fixed a bug where thumbnails for YouTube videos were not cropped properly.

## 2.0.4 - 2018-09-10

### Fixed
- Fixed a bug where the Video field was not properly migrated when upgrading from Craft 2 to Craft 3.

## 2.0.3 - 2018-09-03

### Fixed
- Fixed a bug where Vimeo videos with custom URLs couldn’t be selected in the explorer.

## 2.0.2 - 2018-06-28

### Changed
- Replaced `dukt/oauth2-google` dependency with `league/oauth2-google`.
- Removed `dukt\videos\services\Videos::isOauthProviderConfigured()`.

### Fixed
- Fixed a bug which prevented the `oauthProviderOptions` config from being set from a config file for some providers and from the plugin’s stored settings for other providers.
- Fixed a bug where videos wouldn’t automatically start to play when clicking on the play button.

## 2.0.1 - 2018-05-26

### Added
- The videos explorer is now showing a spinner while it’s loading.

### Fixed
- Fixed a scrolling bug in the Videos explorer modal.

## 2.0.0 - 2018-05-09

### Added
- Show account details on the gateway details page.
- Added `files` to the list of fields requested for a Vimeo video.
- Added the ability to double click on a video so select it in a Video field scenario.

### Changed
- Removed unused `dukt\videos\base\Gateway::setAuthenticationToken()` method.
- Stopped catching exceptions in the `dukt\videos\base\Gateway::hasToken()` method.
- Improved exception handling when OAuth callback fails.

### Fixed
- Fixed a bug where `dukt\videos\services\Oauth::getTokenData()` could return a string instead of an array. ([#7](https://github.com/dukt/videos/issues/7))

## 2.0.0-beta.7 - 2018-04-27

### Changed
- Updated dukt/oauth2-vimeo dependency to `^2.0.1`.

### Fixed
- Fixed namespacing bug in `dukt\videos\services\Cache`. ([#4](https://github.com/dukt/videos/issues/4))
- Fixed a bug where the explorer modal’s spinner was not properly positionned.
- Fixed authentication bug with Vimeo.

## 2.0.0-beta.6 - 2017-12-17

### Changed
- Updated to require craftcms/cms `^3.0.0-RC1`.
- Updated plugin icon.

### Fixed
- Fixed layout bug with the video explorer.

### Removed
- Removed ununsed mask icon.

## 2.0.0-beta.5 - 2017-09-24

### Added
- Added the `registerGatewayTypes` to `dukt\videos\services\Gateways`, giving plugins a chance to register gateway types (replacing `getVideosGateways()`).
- Added `dukt\videos\events\RegisterGatewayTypesEvent`.

### Improved
- Now using the `craft\web\twig\variables\CraftVariable`’s `init` event to register Videos’ variable class, replacing the now-deprecated `defineComponents`.
- Removed `dukt\videos\Plugin::getVideosGateways()`.

## 2.0.0-beta.4 - 2017-09-22

### Changed
- The plugin now requires Craft 3.0.0-beta.27 or above.

### Fixed 
- Fixed video thumbnails for Craft 3.0.0-beta.27 and above where resource URLs are not supported anymore.

## 2.0.0-beta.3 - 2017-08-28

### Fixed

- Fixed `dukt\videos\fields\Video` to use `normalizeValue()`. ([#2](https://github.com/dukt/videos/issues/2))

## 2.0.0-beta.2 - 2017-08-28

### Added

- Added `dukt\videos\services\Oauth::getTokenData()`.

### Improved

- Check that there is an `expires` value before trying to refresh the token in `dukt\videos\base\Gateway::createTokenFromData()`.
- Moved `dukt\videos\base\Gateway::createTokenFromData()` to `dukt\videos\services\Oauth::createTokenFromData()`.
- Renamed `dukt\videos\base\Gateway::getToken()` to `getOauthToken()`.
- Instantiating video gateways doesn’t require a refreshed token anymore.
- Improved error handling for the settings index page.
- Improved error handling for the gateway details page.
- Replaced `dukt\videos\base\Gateway::parseJson()` with `craft\helpers\Json::decode()`.
- Replaced `dukt\videos\fields\Video::prepValue()` with `normalizeValue()`. ([#1](https://github.com/dukt/videos/issues/1))

### Fixed

- Fixed a bug where `dukt\videos\services\Oauth::getToken()` would crash if the token didn’t exists for the given gateway.


## 2.0.0-beta.1 - 2017-08-25

### Added

- Craft 3 compatibility.
- Added `review_link` to the list of fields returned by the Vimeo API for a video.
- Added YouTube and Vimeo SVG icons
- Added “Like videos” support for the YouTube gateway.
- Added `dukt\videos\base\Gateway::getJavascriptOrigin()`.
- Added `dukt\videos\base\Gateway::getOauthProviderName()`.
- Added `dukt\videos\base\Gateway::getRedirectUri()`.
- Added `dukt\videos\base\Gateway::getVideosPerPage()`.
- Added `dukt\videos\base\GatewayInterface::createOauthProvider()`.
- Added `dukt\videos\base\GatewayInterface::getIconAlias()`.
- Added `dukt\videos\base\GatewayInterface::getOauthProviderApiConsoleUrl()`.
- Added `dukt\videos\base\PluginTrait`.
- Added `dukt\videos\errors\ApiResponseException`.
- Added `dukt\videos\errors\CollectionParsingException`.
- Added `dukt\videos\errors\GatewayMethodNotFoundException`.
- Added `dukt\videos\errors\GatewayNotFoundException`.
- Added `dukt\videos\errors\JsonParsingException`.
- Added `dukt\videos\errors\VideoNotFoundException`.
- Added `dukt\videos\models\Settings`.
- Added `dukt\videos\web\assets\settings\SettingsAsset`.
- Added `dukt\videos\web\assets\videofield\VideoFieldAsset`.
- Added `dukt\videos\web\assets\videos\VideosAsset`.

### Changed

- OAuth provider options are now using gateway’s handle instead of oauth provider’s handle as a key.
- Removed dependency with `dukt/oauth`
- Search support is disabled by default and gateways can enable it by defining a `supportsSearch()` method returning `true`.
- Moved `dukt\videos\controllers\VideosController::actionFieldPreview()` to `dukt\videos\controllers\ExplorerController::actionFieldPreview()`.
- Moved `dukt\videos\controllers\VideosController::actionPlayer()` to `dukt\videos\controllers\ExplorerController::actionPlayer()`.
- Removed `Craft\Videos_InstallController`.
- Removed `Craft\VideosController`.
- Removed `dukt\videos\models\Settings::$youtubeParameters`.
- Renamed `Craft\Videos_CacheService` to `dukt\videos\services\Cache`.
- Renamed `Craft\Videos_CollectionModel` to `dukt\videos\models\Collection`.
- Renamed `Craft\Videos_GatewaysService` to `dukt\videos\services\Gateways`.
- Renamed `Craft\Videos_OauthController` to `dukt\videos\controllers\OauthController`.
- Renamed `Craft\Videos_OauthService` to `dukt\videos\services\Oauth`.
- Renamed `Craft\Videos_SectionModel` to `dukt\videos\models\Section`.
- Renamed `Craft\Videos_SettingsController` to `dukt\videos\controllers\SettingsController`.
- Renamed `Craft\Videos_VideoFieldType` to `dukt\videos\fields\Video`.
- Renamed `Craft\Videos_VideoModel` to `dukt\videos\models\Video`.
- Renamed `Craft\VideosController` to `dukt\videos\controllers\ExplorerController`.
- Renamed `Craft\VideosHelper` to `dukt\videos\helpers\VideosHelper`.
- Renamed `Craft\VideosService` to `dukt\videos\services\Videos`.
- Renamed `Craft\VideosVariable` to `dukt\videos\web\twig\variables\VideosVariable`.
- Renamed `dukt\videos\base\Gateway::apiGet()` to `get()`.
- Renamed `dukt\videos\base\Gateway::authenticationSetToken()` to `setAuthenticationToken()`.
- Renamed `Dukt\Videos\Gateways\BaseGateway` to `dukt\videos\base\Gateway`.
- Renamed `Dukt\Videos\Gateways\IGateway` to `dukt\videos\base\GatewayInterface`.
- Renamed `Dukt\Videos\Gateways\Vimeo` to `dukt\videos\gateways\Vimeo`.
- Renamed `Dukt\Videos\Gateways\Youtube` to `dukt\videos\gateways\YouTube`.


### Fixed

- Fixed a bug where token when not being properly refreshed in `dukt\videos\services\Gateways::loadGateways()`.
- Fixed success message when connecting to Vimeo.
- Fixed Vimeo’s console API URL.
- Fixed YouTube’s OAuth provider API console URL.
