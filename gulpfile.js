var gulp = require('gulp');
var minify = require('gulp-minify');
var header = require('gulp-header');
var filter = require('gulp-filter');

gulp.task('build-js', function() {
  var pkg = require('./package.json');
  var debugBanner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @author <%= pkg.author.name %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
  ].join('\n');
  var minBanner = '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= pkg.author.name %> | License: <%= pkg.license %> */\n';

  var debugFilter = filter(['**/*', '!**/*.min.js'], {restore: true});
  var minFilter = filter('**/*.min.js', {restore: true});

  gulp.src('./src/*.js')
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      ignoreFiles: ['.min.js']
    }))
    .pipe(debugFilter)
    .pipe(header(debugBanner, {
      pkg: pkg
    }))
    .pipe(debugFilter.restore)
    .pipe(minFilter)
    .pipe(header(minBanner, {
      pkg: pkg
    }))
    .pipe(minFilter.restore)
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['build-js']);

gulp.task('default', function() {
  // place code for your default task here
});
