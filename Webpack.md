## Webpack

#### Делаем package.json в проекте 
```
npm init
```


#### Установим Webpack
```
npm i webpack -g
```

--- 
##### Оглавление

* [Собирам JS в один файл (Bundling JS)](Собирам-JS-в-один-файл-bundling-JS)
* [Webpack.config.js](webpack.config.js)
* [Babel-loader](babel-loader-es2015)
* [CSS-loader & Style-loader](cSS-loader-style-loader)
* [SASS-loader](sass-loader)


---

### Собирам JS в один файл (Bundling JS)

Создаем 2 скрипта и страницу для теста. Синтаксис в скриптах как в NodeJS.

###### script.js
```js
var script1 = require("./script1")

alert(script1.msg)

```

###### script1.js
```js
module.exports = {
   msg: "Hello from script1",
}
```

##### Собираем Bundle и подключаем
```
cmd> webpack ./script.js ./bundle.js
```

###### index.html
```html
<html>
....

<!-- script.js + script1.js -->
<script src="bundle.js"></script>

</body>
</html>
```

--- 

### Webpack.config.js
Нужен для сборки всего и вся одной коммандой:
```
webpack
```

###### webpack.config.js
```js
module.exports = {

// входная точка
// главный файл в котором будут все другие подклюачться
entry: './src/script.js',

// куда складывать собранные файлы
output: {
           path: "assets",
           filename: "bundle.js"
        }
};

```

--- 

### Babel-loader (ES2015)
Установим пре-процессоры для компила EcmaScripts 
```
npm i babel-core babel-loade babel-preset-es2015 --save-dev
```


###### webpack.config.js
```
module.exports = {

// входная точка
// главный файл в котором будут все другие подклюачться
entry: './src/script.js',

// куда складывать собранные файлы
output: {
           path: "assets",
           filename: "bundle.js"
        },

// модули (обычный alert() - перестанет работать)
module:{
         loaders: [{
                    test:/\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                              presets: ['es2015']
                           }
                  }]
       },
};

```
```
cmd> webpack
```

--- 

### CSS-loader & Style-loader
Установка
```
npm i style-loader css-loader --save-dev
```

Создаем стили 
###### ma-styles.css
```styles
.ma-style{ color:black; }
```


Добавить в секцию module -> loaders:[->]
###### webpack.config.js
```
loaders: [
  {
   test:/\.css$/,     // regular expression
   loader: 'style-loader!css-loader'  // используеться оба модуля
  },
]
```

Подключаем в скрипт(omg) и юзаем на странице стили 
###### script.js
```
require('./css/ma-styles.css');
```
```
cmd> webpack
```

---

### SASS-loader
Установка
```
npm i node-sass sass-loader --save-dev
```

Добавить в секцию module -> loaders:[->]
###### webpack.config.js
```
loaders: [
  {
   test:/\.css$/,     // regular expression
   loader: 'style-loader!css-loader!sass-loader'  
  },
]
```

Подключаем в скрипт(omg) и юзаем на странице стили 
###### script.js
```
require('./css/ma-styles.scss');
```
```
cmd> webpack
```



