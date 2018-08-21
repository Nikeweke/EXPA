## Sass

### Программа для компила Sass, также можно через [Gulp](/tools-gulp.md "Gulp")
https://prepros.io/

Установив просто указать папку с проектом, найти **.scss** и написать путь куда сохранить **.css** файлы

### Переменные 
```scss
// Variables
$deepBlue: #032f3e;
$font: 12px;

#main-div {
    background-color: $deepBlue;
} // end main-div

// in css - section h1
section {
    h1 {
        font-size: $font;
    }
} // end section h1

```


### @Mixin
##### Вынос стилей в отдельный сектор который можно подключать в другие классы `@include nameMixin;`

```scss
$someColor: red;
$someBg: green;


@mixin maki
{
  font-size:20px;
  color: $someColor;
  background-color: $someBg;
}

@mixin params($arg){
  font-size:$arg+px;
}

h2{
@include maki;
text-decoration: underline;
}


h3{ @include params(30); }
```

### @Import
##### Подключение других файлов (в Prepros - убрать галочку "Auto compile" на подключаемых файлах)
###### vars.scss 
```scss
$someColor: red;
$someBg: green;

```
###### mixin.scss 
```scss
@mixin maki{
  font-size:20px;
  color: $someColor;
  background-color: $someBg;
}
```
###### styles.scss 
```scss
@import "vars";
@import "mixin";

h2{
@include maki;
text-decoration: underline;
}
```

### Pseudo Class
```scss

h2 {
    fonts-size:40px;
    text-decoration: underline;

    // css - h2:hover
    &:hover {
        color: yellow;
    }
}

// and like that 
@mixin some {
    &:after {
        color: black;
    }
}

h3 {
    @include some
}

```

### @Content
```scss
// Mixin
@mixin mQ-max($px){
	  @media (max-width: $px) {
		  @content;
	  }
}

//Using
@include mQ-max(768px){
  .btn-scr{
     font-size: 1.1vw;
     margin-left: -40px;
  }
}

// Out
@media (max-width: 768px) {
  .btn-scr {
    font-size: 1.1vw;
    margin-left: -40px; } }
```
