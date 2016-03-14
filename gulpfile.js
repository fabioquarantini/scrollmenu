var gulp = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');


gulp.task('scripts', function() {

	return gulp.src('jquery.scrollmenu.js')
		.pipe(uglify({
			preserveComments: 'some',
		}))
		.pipe(rename("jquery.scrollmenu.min.js"))
		.pipe(gulp.dest('.'));

});


gulp.task('default', function() {

	gulp.start('scripts');

});
