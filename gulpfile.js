var gulp = require('gulp');
//var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
//var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var webserver = require('gulp-webserver');

var paths = {
    scripts: ['./app/bower_components/angular/angular.js'],
    images: 'app/images/**/*'
};




// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});



gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            //directoryListing: true,
            open: 'index.html',
            //path: 'app',
            fallback: 'index.html',
            directoryListing:
            {
                enable: true,
                path: 'app'
            }
        }));
});


/*gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            //directoryListing: true,
            open: true,
            //path: 'app/',
            fallback: 'index.html',
            directoryListing:{
            enable: true,
            path: 'app/'}
        }));
});*/

gulp.task('default', ['watch', 'webserver']);

