var gulp = require('gulp'),
    uncss = require('gulp-uncss'),
    cssnano = require('gulp-cssnano'),
    csslint = require('gulp-csslint'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    //clean = require('gulp-clean'),
    //minifyhtml = require('gulp-minify-html'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;

/*
Clean up the build directory
gulp.task('clean', function () {
  return gulp.src('assets/', {read: false})
  .pipe(clean())
});

//Compress and combine vendors
gulp.task('vendor', function() {
 return gulp.src('src/vendor/*.js')
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(rename('vendor.min.js'))
  .pipe(gulp.dest('assets/js/'))
});

Compress the HTML file
gulp.task('html', function () {
 return gulp.src('src/HTML/*.html')
  .pipe(minifyhtml())
  .pipe(gulp.dest('./'))
});
*/

/*
Compress, compile and autoprefix SASS (SCSS) files
gulp.task('styles', function() {
  return gulp.src('src/scss/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['> 1%', 'last 2 versions'],
  }))
  .pipe(gulp.dest('assets/css/'))
  .pipe(browserSync.reload({stream:true}));
});
*/

//Compress and combine JS files
gulp.task('js', function() {
 // return gulp.src(['js/*.js','js/atoms/*.js'])
 return gulp.src('js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest('js/min/'))
});

gulp.task('csslint', function() {
 gulp.src('./css/rdy.css')
  .pipe(csslint({
     'compatible-vendor-prefixes': false,
     'box-sizing': false,
     'important': false,
     'known-properties': false
  }))
  .pipe(csslint.reporter());
});

gulp.task('workflow', function () {
  gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(uncss({
    //   html: ['index.html']
    // }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))

    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
     server: {
        baseDir: "./"
     }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['workflow', 'js', 'browser-sync', 'bs-reload'], function () {
  gulp.start('workflow', 'csslint', 'js');
  gulp.watch('sass/*.scss', ['workflow']);
  gulp.watch('css/rdy.css', ['bs-reload']);
  gulp.watch('js/min/main.min.js', ['bs-reload']);
  gulp.watch('*.html', ['bs-reload']);
});

/*
Watch for changes
gulp.task('watch', function() {
 gulp.watch('src/scss/*.scss',['styles']);
 gulp.watch('src/vendor/*.js',['vendor']);
 gulp.watch('src/js/*.js',['js']);
 gulp.watch('src/HTML/*.html',['html']);
});

//Start the runAll and watch task at the beginning
gulp.task('default', ['runAll', 'watch']);

//run all tasks
gulp.task('runAll', ['vendor', 'js', 'html', 'styles']);
*/
