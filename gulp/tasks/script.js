module.exports = function() {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/picturefill/dist/picturefill.min.js'])
        .pipe($.concat('libs.min.js'))
        .pipe($.gulp.dest('build/static/js'))
        .pipe($.browserSync.reload({
            stream: true
        }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src('src/static/js/main.js')
        .pipe($.gulp.dest('build/static/js'))
        .pipe($.browserSync.reload({
            stream: true
        }));
    });
}