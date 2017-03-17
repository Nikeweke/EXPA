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

#### Собирам JS в один файл (Bundling JS)

##### Создаем 2 скрипта и страницу для теста. Синтаксис в скриптах как в NodeJS.

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
webpack ./script.js ./bundle.js
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




