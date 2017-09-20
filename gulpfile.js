var gulp = require('gulp');

gulp.task('copy', function() {
    /* Copying System Files */
    gulp.src('client/**/*.js').pipe(gulp.dest('wwwroot'));
    gulp.src('package.json').pipe(gulp.dest('wwwroot'));
    gulp.src('package-lock.json').pipe(gulp.dest('wwwroot'));
    gulp.src('client/favicon.ico').pipe(gulp.dest('wwwroot'));
    gulp.src('client/contents/**/*', { "base": "." }).pipe(gulp.dest('wwwroot'));

    return gulp.src('client/**/*.html')
        .pipe(gulp.dest('wwwroot'));
});