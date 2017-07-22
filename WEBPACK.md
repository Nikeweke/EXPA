## Webpack

#### Делаем package.json в проекте 
```
npm init
```


#### Установим Webpack
```
npm i webpack -g
```

#### Как подключить в Bundle Jquery и прочие пакеты 

* **Jquery** - `npm install jquery --save`;   `var $ = require('jquery');` 
* **JQ Validate** - `npm install jquery-validate --save`;   `require('jquery-validate');` 

--- 
##### Оглавление

* [Собирам JS в один файл (Bundling JS)](#Собирам-JS-в-один-файл-bundling-JS)
* [Webpack.config.js](#webpackconfigjs)
* [Babel-loader](#babel-loader-es2015)
* [CSS-loader & Style-loader](#css-loader-style-loader)
* [SASS-loader](#sass-loader)
* [Jquery include](#jquery)
* [JS Bundle & SASS Compile](#js-bundle--sass-compile)


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
var webpack = require("webpack"); // need be installed in project 
var path = require('path');

module.exports = {

// входная точка
// главный файл в котором будут все другие подклюачться
entry: './src/script.js',

// куда складывать собранные файлы
output: {
           path: path.resolve('./src/findjob/public/js/fns/'),
           filename: "bundle.js"
        }
        
// minify bundle        
plugins: [
           new webpack.optimize.UglifyJsPlugin({minimize: true})
         ]        
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

### Jquery include
###### entry.js
```
var $ = require("jquery");
window.jQuery = $;
window.$ = $;
```


### JS Bundle & SASS Compile
packages -   css-loader, extract-text-webpack-plugin, gulp-sass, node-sass, sass-loader, webpack
###### webpack.config.js
```js
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'index.css' 
});


module.exports = {
  entry: './public/gather.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      // { // regular css files
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     loader: 'css-loader?importLoaders=1',
      //   }),
      // },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        // test: /\.scss$/,
        use: extractPlugin.extract({
          use:['css-loader', 'sass-loader']
        })

        // loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
     extractPlugin
  ],
};
```

###### public/gather.js
```js
// Sass
import './sass/index.scss';  // it will compile to - 'dist/index.css'


// JS
import './js/main.js';    // it will bundle to - 'dist/bundle.js'

```
