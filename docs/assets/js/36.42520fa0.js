(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{221:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[s._v("#")]),s._v(" Webpack")]),s._v(" "),a("h4",{attrs:{id:"содержание"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#содержание","aria-hidden":"true"}},[s._v("#")]),s._v(" Содержание")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#деnаем-package-json-в-проекте"}},[s._v("Делаем package.json в проекте")])]),a("li",[a("a",{attrs:{href:"#установим-webpack"}},[s._v("Установим Webpack")])]),a("li",[a("a",{attrs:{href:"#как-подкnючить-в-bundle-пакеты"}},[s._v("Как подключить в Bundle пакеты")])]),a("li",[a("a",{attrs:{href:"#собирам-js-в-один-файn-bundling-js"}},[s._v("Собирам JS в один файл (Bundling JS)")])]),a("li",[a("a",{attrs:{href:"#webpack-config-js"}},[s._v("Webpack.config.js")])]),a("li",[a("a",{attrs:{href:"#babel-loader-es2015"}},[s._v("Babel-loader (ES2015)")])]),a("li",[a("a",{attrs:{href:"#css-loader-style-loader"}},[s._v("CSS-loader & Style-loader")])]),a("li",[a("a",{attrs:{href:"#sass-loader"}},[s._v("SASS-loader")])]),a("li",[a("a",{attrs:{href:"#jquery-include"}},[s._v("Jquery include")])]),a("li",[a("a",{attrs:{href:"#js-bundle-sass-compile"}},[s._v("JS Bundle & SASS Compile")])])])]),a("p"),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"деnаем-package-json-в-проекте"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#деnаем-package-json-в-проекте","aria-hidden":"true"}},[s._v("#")]),s._v(" Делаем package.json в проекте")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm init\n")])])]),a("h3",{attrs:{id:"установим-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#установим-webpack","aria-hidden":"true"}},[s._v("#")]),s._v(" Установим Webpack")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i webpack -g\n")])])]),a("h3",{attrs:{id:"как-подкnючить-в-bundle-пакеты"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#как-подкnючить-в-bundle-пакеты","aria-hidden":"true"}},[s._v("#")]),s._v(" Как подключить в Bundle пакеты")]),s._v(" "),a("p",[a("code",[s._v("npm install jquery-validate --save")]),s._v(";   "),a("code",[s._v("require('jquery-validate');")])]),s._v(" "),a("h3",{attrs:{id:"собирам-js-в-один-файn-bundling-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#собирам-js-в-один-файn-bundling-js","aria-hidden":"true"}},[s._v("#")]),s._v(" Собирам JS в один файл (Bundling JS)")]),s._v(" "),a("p",[s._v("Создаем 2 скрипта и страницу для теста. Синтаксис в скриптах как в NodeJS.")]),s._v(" "),a("h6",{attrs:{id:"script-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-js","aria-hidden":"true"}},[s._v("#")]),s._v(" script.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" script1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./script1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("script1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("h6",{attrs:{id:"script1-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script1-js","aria-hidden":"true"}},[s._v("#")]),s._v(" script1.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello from script1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h5",{attrs:{id:"собираем-bundle-и-подкnючаем"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#собираем-bundle-и-подкnючаем","aria-hidden":"true"}},[s._v("#")]),s._v(" Собираем Bundle и подключаем")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cmd> webpack ./script.js ./bundle.js\n")])])]),a("h6",{attrs:{id:"index-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-html","aria-hidden":"true"}},[s._v("#")]),s._v(" index.html")]),s._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n....\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- script.js + script1.js --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("bundle.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"webpack-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js","aria-hidden":"true"}},[s._v("#")]),s._v(" Webpack.config.js")]),s._v(" "),a("p",[s._v("Нужен для сборки всего и вся одной коммандой:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("webpack\n")])])]),a("h6",{attrs:{id:"webpack-config-js-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-2","aria-hidden":"true"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// need be installed in project ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// входная точка")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// главный файл в котором будут все другие подклюачться")]),s._v("\nentry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/script.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// куда складывать собранные файлы")]),s._v("\noutput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/findjob/public/js/fns/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bundle.js"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// minify bundle        ")]),s._v("\nplugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UglifyJsPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("minimize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"babel-loader-es2015"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-loader-es2015","aria-hidden":"true"}},[s._v("#")]),s._v(" Babel-loader (ES2015)")]),s._v(" "),a("p",[s._v("Установим пре-процессоры для компила EcmaScripts")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i babel-core babel-loade babel-preset-es2015 --save-dev\n")])])]),a("h6",{attrs:{id:"webpack-config-js-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-3","aria-hidden":"true"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n\n// входная точка\n// главный файл в котором будут все другие подклюачться\nentry: './src/script.js',\n\n// куда складывать собранные файлы\noutput: {\n           path: \"assets\",\n           filename: \"bundle.js\"\n        },\n\n// модули (обычный alert() - перестанет работать)\nmodule:{\n         loaders: [{\n                    test:/\\.js$/,\n                    exclude: /(node_modules)/,\n                    loader: 'babel-loader',\n                    query: {\n                              presets: ['es2015']\n                           }\n                  }]\n       },\n};\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cmd> webpack\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"css-loader-style-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-loader-style-loader","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS-loader & Style-loader")]),s._v(" "),a("p",[s._v("Установка")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i style-loader css-loader --save-dev\n")])])]),a("p",[s._v("Создаем стили")]),s._v(" "),a("h6",{attrs:{id:"ma-styles-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ma-styles-css","aria-hidden":"true"}},[s._v("#")]),s._v(" ma-styles.css")]),s._v(" "),a("div",{staticClass:"language-styles extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".ma-style{ color:black; }\n")])])]),a("p",[s._v("Добавить в секцию module -> loaders:[->]")]),s._v(" "),a("h6",{attrs:{id:"webpack-config-js-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-4","aria-hidden":"true"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("loaders: [\n  {\n   test:/\\.css$/,     // regular expression\n   loader: 'style-loader!css-loader'  // используеться оба модуля\n  },\n]\n")])])]),a("p",[s._v("Подключаем в скрипт(omg) и юзаем на странице стили")]),s._v(" "),a("h6",{attrs:{id:"script-js-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-js-2","aria-hidden":"true"}},[s._v("#")]),s._v(" script.js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("require('./css/ma-styles.css');\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cmd> webpack\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"sass-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass-loader","aria-hidden":"true"}},[s._v("#")]),s._v(" SASS-loader")]),s._v(" "),a("p",[s._v("Установка")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i node-sass sass-loader --save-dev\n")])])]),a("p",[s._v("Добавить в секцию module -> loaders:[->]")]),s._v(" "),a("h6",{attrs:{id:"webpack-config-js-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-5","aria-hidden":"true"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("loaders: [\n  {\n   test:/\\.css$/,     // regular expression\n   loader: 'style-loader!css-loader!sass-loader'  \n  },\n]\n")])])]),a("p",[s._v("Подключаем в скрипт(omg) и юзаем на странице стили")]),s._v(" "),a("h6",{attrs:{id:"script-js-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-js-3","aria-hidden":"true"}},[s._v("#")]),s._v(" script.js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("require('./css/ma-styles.scss');\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cmd> webpack\n")])])]),a("h3",{attrs:{id:"jquery-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-include","aria-hidden":"true"}},[s._v("#")]),s._v(" Jquery include")]),s._v(" "),a("h6",{attrs:{id:"entry-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry-js","aria-hidden":"true"}},[s._v("#")]),s._v(" entry.js")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('var $ = require("jquery");\nwindow.jQuery = $;\nwindow.$ = $;\n')])])]),a("h3",{attrs:{id:"js-bundle-sass-compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-bundle-sass-compile","aria-hidden":"true"}},[s._v("#")]),s._v(" JS Bundle & SASS Compile")]),s._v(" "),a("p",[s._v("packages -   css-loader, extract-text-webpack-plugin, gulp-sass, node-sass, sass-loader, webpack")]),s._v(" "),a("h6",{attrs:{id:"webpack-config-js-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-6","aria-hidden":"true"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ExtractTextPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'extract-text-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" extractPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ExtractTextPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.css'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./public/gather.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bundle.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    publicPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/dist'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n      your other rules for JavaScript transpiling go in here\n      */")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { // regular css files")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   test: /\\.css$/,")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   loader: ExtractTextPlugin.extract({")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     loader: 'css-loader?importLoaders=1',")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   }),")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// },")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sass / scss loader for webpack")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(sass|scss)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test: /\\.scss$/,")]),s._v("\n        use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" extractPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("extract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n     extractPlugin\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h6",{attrs:{id:"public-gather-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-gather-js","aria-hidden":"true"}},[s._v("#")]),s._v(" public/gather.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Sass")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./sass/index.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// it will compile to - 'dist/index.css'")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// JS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./js/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// it will bundle to - 'dist/bundle.js'")]),s._v("\n\n")])])]),a("p",[s._v("Все связи типа require - работаю только в тех файлах которые пакуються webpack'om, тоесть если собрать bundle и подключить в страницу, а ниже подключить файл который будет запрашывать переменную из файла который запакован в bundle, будет ошибка. Но можно сделать запакованные функции доступными в html.(Показано в примере ниже)\nВсе подключение(require) происходит по примеру работы с NodeJS.")]),s._v(" "),a("h6",{attrs:{id:"gather-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gather-js","aria-hidden":"true"}},[s._v("#")]),s._v(" gather.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// подключение jq")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" $ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jQuery "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// подключение booter")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// подключение моих JS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./js/some.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// вот так можно сделать доступ к своим ф-циям в html (доступ через объект - Main.myfunc(), Main.myvar)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" main "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./js/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Main "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h6",{attrs:{id:"some-js-main-js-nежит-вместе-с-some-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-js-main-js-nежит-вместе-с-some-js","aria-hidden":"true"}},[s._v("#")]),s._v(" some.js (main.js лежит вместе с some.js)")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" Main "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi from some'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SomeArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h6",{attrs:{id:"main-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-js","aria-hidden":"true"}},[s._v("#")]),s._v(" main.js")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi from main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" SomeArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'greeting'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" SomeArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" SomeArr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h6",{attrs:{id:"index-html-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-html-2","aria-hidden":"true"}},[s._v("#")]),s._v(" index.html")]),s._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("...\n\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("dist/bundle.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("    \n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("js/not_webpacked.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- В этом файле нельзя будет взять SomeArr из main.js, так как запокован --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SomeArr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// это будет работать , так глобалное")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);