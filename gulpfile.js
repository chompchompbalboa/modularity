// Shared dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Build dependencies
var babelify = require('babelify');
var browserify = require('browserify');
var bro = require('gulp-bro');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

// Babelify transform
var babelifyES6 = function(file) {
  return babelify(file, {presets: ["es2015", "react", "stage-0"]});
};

// Initialize the current build
var build = function(index, output) {
    if(process.env.NODE_ENV === 'dev') {
        build_dev(index, output);
    }
    else {
        build_prod(index, output);
    }
};

var browserifyProduction = bro({
    entries: './app/React/index/content-index.js',
    transform: [babelifyES6],
    debug: false,
    cache: {}, packageCache: {}, fullPaths: false 
});

var browserifyDevelopment = bro({
    entries: './app/React/index/content-index.js',
    transform: [babelifyES6],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
});

// Production builds
var build_prod = function() {
    gulp.src('./app/React/index/content-index.js')
    .pipe(bro({
        entries: './app/React/index/content-index.js',
        transform: [babelifyES6],
        debug: false,
        cache: {}, packageCache: {}, fullPaths: false 
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
};

// Development builds
var build_dev = function() {
    gulp.src('./app/React/index/content-index.js')
    .pipe(bro({
        entries: './app/React/index/content-index.js',
        transform: [babelifyES6],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }))
    .pipe(gulp.dest('./public/js/'));
};

// Build indexes
gulp.task('all', function() {
    build('./app/React/index/content-index.js', 'content-index.js');
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('./app/React/**/*.js', ['all']);
});

// Default tasks
gulp.task('default', ['all', 'watch']);