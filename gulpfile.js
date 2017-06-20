var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./lib/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./lib/css/'));
});

gulp.task('default', ['sass']);

gulp.task('watch', function(){
    gulp.watch('./lib/sass/*.scss', ['sass']);
});