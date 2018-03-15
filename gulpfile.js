var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    minify= require('gulp-minify'),
    cssnano = require('gulp-cssnano');
var imageop = require('gulp-imagemin');
pngquant = require('imagemin-pngquant');


 
gulp.task('html', function () {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', minify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('app/new'));
});

 
gulp.task('images', function(cb) {
    gulp.src(['app/images/*.png','app/images/*.jpg','app/images/*.gif','app/images/*.jpeg']).pipe(imageop({
        optimizationLevel: 10,
        progressive: true,
        interlaced: true,
	use: [pngquant()]

    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});