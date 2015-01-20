var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var open = require('gulp-open');

var paths = {
	coffeeFiles: './game of life/coffee/**/*.coffee',
	jsFiles: './game of life/scripts/'
};

// Compile coffee-script.
gulp.task('coffee', function() {
  gulp.src(paths.coffeeFiles)
    .pipe(coffee({bare: true}).on('error', gutil.log))
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

gulp.task('default', ['watch-coffee','coffee', 'open-webpage']);