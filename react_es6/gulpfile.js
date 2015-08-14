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
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function() {
  gulp.watch('./index.js', ['build']);
  gulp.watch('./index.html', ['build']);
  gulp.watch('./components/*.js', ['build']);
});

gulp.task('default', ['build', 'watch', 'browser-sync']);
