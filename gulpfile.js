var gulp = require('gulp');
var sass = require('gulp-sass');
var cssimport = require('gulp-cssimport');

gulp.task('sass', function() {
	gulp.src('./sass/*.scss')
		.pipe(sass())
		.pipe(cssimport())
		.pipe(gulp.dest('./static/css'))
})

var watcher = gulp.watch('./sass/*.scss', ['sass']);

gulp.task('default', ['sass'])