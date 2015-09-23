import gulp         from 'gulp';
import browserify   from 'browserify';
import watchify     from 'watchify';
import source       from 'vinyl-source-stream';
import babelify     from 'babelify';
import buffer       from 'vinyl-buffer';
import uglify       from 'gulp-uglify';
import envify       from 'envify/custom';
import less         from 'gulp-less';
import postcss      from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csswring     from 'csswring';
import concatCss    from 'gulp-concat-css';

var path = {
  BUNDLE_OUT: 'bundle.js',
  CSS_OUT: 'style.css',
  DEST: './public',
  ENTRY_POINT: './client/main.js'
}

/**
 * To build, create bundle.js and style.css
 */
gulp.task('build', ['browserify', 'less']);

/**
 * Create and minify bundle.js
 */
gulp.task('browserify', () => {
  process.env['NODE_ENV'] = 'production';
  return browserify(path.ENTRY_POINT)
    .transform(babelify.configure())
    .transform(envify({ NODE_ENV: 'production' }))
    .bundle()
    .pipe(source(path.BUNDLE_OUT))  // gives streaming vinyl file object
    .pipe(buffer())                 // convert from streaming to buffered vinyl file object
    .pipe(uglify())                 // minify dat code
    .pipe(gulp.dest(path.DEST));
});

/**
 * Convert all less into minified autoprefixed css
 */
gulp.task('less', () =>
  gulp.src('./client/**/*.less')
    .pipe(less())
    .pipe(concatCss(path.CSS_OUT))
    .pipe(postcss([
      autoprefixer(),
      csswring.postcss
    ]))
    .pipe(gulp.dest(path.DEST))
);

/**
 * In dev mode, watch for changes in client code and Less and
 * rebuild bundle.js or style.css when these happen
 */
gulp.task('dev', ['less'], () => {
  gulp.watch(['./client/**/**.less'], ['less']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [babelify],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  return watcher.on('update', () => {
    watcher.bundle()
      .pipe(source(path.BUNDLE_OUT))
      .pipe(gulp.dest(path.DEST))
  }).bundle()
    .pipe(source(path.BUNDLE_OUT))
    .pipe(gulp.dest(path.DEST));
});
