var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber');

var plumberErrorHandler = function(err) {

    notify.onError({
        title: "Videos",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);

    console.log( 'plumber error!' );

    this.emit('end');
};

/* Tasks */

gulp.task('sass', function () {
    return gulp.src('./src/web/assets/**/*.scss')
        .pipe(plumber({ errorHandler: plumberErrorHandler }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/web/assets/'));
});

gulp.task('compressJs', function() {
    return gulp.src([
            './src/web/assets/**/dist/**/*.js',
            '!./src/web/assets/**/dist/**/*.min.js',
        ])
        .pipe(plumber({ errorHandler: plumberErrorHandler }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./src/web/assets/'));
});

gulp.task('js', ['compressJs']);


gulp.task('build', function() {
    gulp.start('sass', 'js');
});

gulp.task('watch', function() {
    gulp.watch([
        './src/web/assets/**/*.scss'
    ], ['sass']);
    gulp.watch([
        './src/web/assets/**/*.js',
        '!./src/web/assets/**/*.min.js',
    ], ['js']);
});

gulp.task('default', ['build']);