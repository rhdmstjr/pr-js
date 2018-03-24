const gulp = require('gulp');
const eslint = require('gulp-eslint')

gulp.task('default', function(){
    gulp.src(['es6/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});