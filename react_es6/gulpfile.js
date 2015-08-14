var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

function errorHandler(err) {
  console.log('Error: ' + err.message);
}

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('build', function() {
  browserify({entries: ['./index.js']})
    .transform(babelify)
    .bundle()
    .on('error', errorHandler)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build'));
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch('./index.js', ['build', 'reload']);
  gulp.watch('./components/*.js', ['build', 'reload'])
  gulp.watch('./index.html', ['reload'])
});

gulp.task('default', ['build', 'watch', 'browser-sync']);
