var gulp	= require('gulp');
var deploy	= require('gulp-gh-pages');

// http://charliegleason.com/articles/deploying-to-github-pages-with-gulp
// http://www.michael-whelan.net/deploying-sandra-snow-to-github-pages-with-gulp/
// https://github.com/rowoot/gulp-gh-pages

gulp.task('build', function () {
  gulp.src('./src/**/*')
    .pipe(gulp.dest('./dist'));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});