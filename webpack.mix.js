let mix = require('laravel-mix');


// Minify JS

mix.minify('src/web/assets/videofield/dist/js/VideosField.js');
mix.minify('src/web/assets/videos/dist/js/Videos.js');
mix.minify('src/web/assets/videos/dist/js/VideosExplorer.js');


// Compile SASS

mix
    .sass('src/web/assets/settings/dist/settings.scss', 'src/web/assets/settings/dist')
    .sass('src/web/assets/videofield/dist/css/VideosField.scss', 'src/web/assets/videofield/dist/css')
    .sass('src/web/assets/videos/dist/css/videos.scss', 'src/web/assets/videos/dist/css')
    .sass('src/web/assets/videos/dist/css/VideosExplorer.scss', 'src/web/assets/videos/dist/css')
    .options({
        processCssUrls: false
    });