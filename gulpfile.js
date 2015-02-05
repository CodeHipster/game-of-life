var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var open = require('gulp-open');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var plumber = require('gulp-plumber');

var paths = {
	coffeeFiles: './game of life/coffee/**/*.coffee',
	jsFiles: './game of life/scripts/'
};

// Compile coffee-script.
gulp.task('coffee', ['clean'], function() {
  gulp.src(paths.coffeeFiles)
  .pipe(plumber())
  .pipe(coffee({bare: true}))
  .pipe(gulp.dest(paths.jsFiles));
});

// Rerun the task when a file changes.
gulp.task('watch-coffee', function() {
  gulp.watch(paths.coffeeFiles, ['coffee']);
});

// Open webpage.
gulp.task('open-webpage', function(){
  gulp.src('./game of life/index.html')
  .pipe(open());
});

gulp.task('clean', function () {
  return gulp.src(paths.jsFiles)
    .pipe(vinylPaths(del));
});


gulp.task('default', ['watch-coffee','coffee','open-webpage']);
