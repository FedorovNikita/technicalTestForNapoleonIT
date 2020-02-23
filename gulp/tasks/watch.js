module.exports = function() {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/*.html', $.gulp.series('html'));
        $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('sass:dev'));
        $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
        $.gulp.watch('src/static/img/*.{png,jpg}', $.gulp.series('webp'));
        $.gulp.watch('src/static/img/svg/*', $.gulp.series('svg'));
    });
}