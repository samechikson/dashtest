'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app",
            routes: {
                "/node_modules": "node_modules"
            }
        }
    });
});

gulp.task('less', function () {
   gulp.src('app/app.less')
      .pipe(less())
      .pipe(gulp.dest('app'));
});
