module.exports = function() {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,svg}')
            .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,svg}')
            .pipe($.imagemin([
                // $.mozjpeg({
                // quality: 65
                // }),
                $.imagemin.jpegtran({progressive: true}),
                $.imagemin.optipng({optimizationLevel: 3})
            ]))
            .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('webp', function () {
        return $.gulp.src('src/static/img/*.{png,jpg}')
        .pipe($.webp({quality: 90}))
        .pipe($.gulp.dest('build/static/img'));
    });
}