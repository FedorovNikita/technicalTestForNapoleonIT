module.exports = function() {
    $.gulp.task('html', function ()  {
        return $.gulp.src('src/*.html')
            .pipe($.htmlmin({ 
                collapseWhitespace: true
            }))
            .pipe($.gulp.dest('build'))
            .on('end', $.browserSync.reload);
    });
}