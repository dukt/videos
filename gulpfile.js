var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var paths = {
    sass: './Source/videos/resources/sass',
    css: './Source/videos/resources/css',
    js: './Source/videos/resources/js',
    jsCompressed: './Source/videos/resources/js/compressed',
}

/* sass */

gulp.task('css', function () {
  return gulp.src(paths.sass+'/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
});


/* JS */

gulp.task('scripts', function() {
    return gulp.src([
        paths.js+'/*.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest(paths.jsCompressed));
});

/* Clean */

gulp.task('clean', function(cb) {
    del([paths.css, paths.jsCompressed], cb)
});


/* Default Task */

gulp.task('default', ['clean'], function() {
    gulp.start('css', 'scripts');
});


/* Watch */

gulp.task('watch', function() {

    gulp.watch(paths.sass+'/*.scss', ['css']);
    gulp.watch(paths.js+'/*.js', ['scripts']);

    livereload.listen();

    gulp.watch([paths.css+'/**', paths.jsCompressed]).on('change', livereload.changed);

});
