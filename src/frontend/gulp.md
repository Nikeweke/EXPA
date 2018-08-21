# Gulp 
####  Содержание 
[[toc]]

--- 

### Install
* Для использования надо установить gulp глобально (npm i gulp -g)
* Файл назвать **gulpfile.js**


### Собрать *Sass* (комманды в консоли - `gulp sass`, `gulp sass:watch`)
###### gulpfile.js
```js
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// var sass_path  = './static/sass/**/*.scss';
var sass_path = './public/sass/index.scss';

gulp.task('sass', function () {
  gulp.src(sass_path)
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sass_path, ['sass']);
});

```


### (MinifyJS) Сделать script.js -> script.min.js
###### gulpfile.js
```js
var minify = require('gulp-minify');

/*
*  Make all javascript to minfied scripts (not to one)
*
*/
gulp.task('compress', function() {
  gulp.src('resources/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        // exclude: ['tasks'],
        // ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});
```

### (Bundle Assets) Собрать Sass -> Сss, JS -> Bundle
###### gulpfile.js
```js

var bundle =  require('gulp-bundle-assets');


/*
*  Make all javascript to minfied scripts in ONE (Bundle it)
*
*/
gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./dist'));
});
```

###### bundle.config.js
```js
var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var gif = require('gulp-if');

function stringEndsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// only run transforms against certain file types.
// This is only necessary if your bundle has a mix of file types in it
function isScssFile(file) {
  return stringEndsWith(file.relative, 'scss');
}



// pipe as many transforms together as you like
var styleTransforms = lazypipe()
  .pipe(function() {
    // when using lazy pipe you need to call gulp-if from within an anonymous func
    // https://github.com/robrich/gulp-if#works-great-inside-lazypipe
    return gif(isScssFile, sass());
  });


module.exports = {
  bundle: {
    main: {
      scripts: [
        './resources/js/app.js',
        './resources/js/components.js'
      ],
      options: {
              transforms: {
                // scripts: scriptTransforms, // pipe(s) of script transforms
                styles: styleTransforms // pipe(s) of style transforms
              }
            },
      // styles: './styles/**/*.css'
       styles: './resources/sass/*.scss'
    },
    vendor: {
      scripts: './resources/js/vue.js'
    }
  },
  copy: './content/**/*.{png,svg}'
};


```
