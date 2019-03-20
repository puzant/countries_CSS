const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

function style() {
    return gulp.src('./SASS/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    //  stream changes to all browser
    .pipe(browserSync.stream())
}

function watch() {
    //  watch for changed
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./SASS/**/*.sass', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;
