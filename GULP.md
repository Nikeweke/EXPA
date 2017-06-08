# Gulp 

* Для использования надо установить gulp глобально (npm i gulp -g)
* Файл назвать **gulpfile.js**


### Собрать *Sass* (комманды в консоли - `gulp sass`, `gulp sass:watch`
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
