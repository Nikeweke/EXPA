# JSDoc

Содержание
[[toc]]

---

### Что такое JSDoc?
Генератор документации в HTML-формате из комментариев исходного кода на JavaScript. 

### Делаем документацию и темой "minima"

```bash
npm i 
npm i jsdoc -g

# dot here, start from this folder
jsdoc . --configure jsdoc.json --verbose

# specify  theme
jsdoc . -t ./node_modules/minima
```

###### app.js
```js
/** @module App */

/**
* Home page
* @param {Object} req request
* @param {Object} res response
* @return {String} page 
*/
function Index (req, res) {
}


/**
* Calculate 1 number + 2 number
* @param {Number} number1
* @param {Number} number2 
* @return {Number} answer 
*/
function Calculate (number1, number2) {
}
```