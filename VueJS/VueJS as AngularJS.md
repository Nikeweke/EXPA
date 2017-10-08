## Vue.js as angular-js

#### Содержание
* Начало
* Функции
* Подстановка в артибуты и вывод html
* События
* Компоненты
* V-model
---

### Начало

1. Подключить в `<head>` Vue.js и свой `app.js`
```html
<!-- VUE.js -->
<head>
   <script src="https://unpkg.com/vue" charset="utf-8"></script> <!-- must be in head -->
</head>

...

  <script src="app.js" charset="utf-8"></script> <!-- must be before close body tag -->
</body>
```


2. Пишем новой объект и выводим данные
###### app.js
```js
new Vue({
   el: '#todo-div',
   data: {
     name: 'Kraki'
  },
});
```

###### index.html
```html
<html>
...
<div id="todo-div">
   <h2>{{name}}</h2>
</div>
```


### Функции
###### app.js
```js
new Vue({

   el: '#todo-div',
   data: {
     name: 'Fuckar'
   },
   methods: {
      greet: function(name){ return 'Hi ' + name; },
      datain: function()   { return this.name; }
   }
});
```

###### index.html
```html
<html>
...
<div id="todo-div">
   <h2>{{greet('John')}}</h2>
   <h2>{{datain()}}</h2>
</div>
```



### Подстановка в артибуты и вывод html
```js
data: {
      website: 'https://gg.ja',
      websiteTag: '<a href="gg.ua">gg</a>'
}

```

```html
<a v-bind:href="website"></a>
<p v-html="websiteTag"></p>
```




### События и их модификаторы
```js
data: {
  number: 0,
},
```

```html
<!-- функция сработает с нажатием Ентер -->
<input v-on:keydown.enter="somefunc" type="text" name="" value="">

<!-- функция сработает с нажатием Ентер + Alt -->
<input v-on:keydown.alt.enter="somefunc" type="text" name="" value="">

<!-- Запускает функцию, но не переходит по ссылке -->
<a @click.prevent="somefunc" href="#"></a>

<button v-on:click.once="number++" type="button" class="btn btn-success">add_once</button>
<button v-on:click="number++" type="button" class="btn btn-success">add</button>
<button @click="number--" type="button" class="btn btn-danger">subtract</button>
<!-- OR u can use v-on:click == @click -->
<h3>{{ number }}</h3>
```


### Компоненты
```js

Vue.component('component1', {
      template : '<p>ggggg</p>'
})

Vue.component('component2', {
      template : '<p>{{ name }} . <button @click="changeName()" type="button" class="btn btn-success">  change </button> </p>',
      data: function(){
          return { name: 'Kaki' }
      },
      methods: {
        changeName: function(){ this.name = 'MArio';  }
      },
})



new Vue({
   el: '#todo-div',
});


new Vue({
   el: '#gg-div',
});

```

```html
<div class="container" id="todo-div">
  <component1></component1>
  <component2></component2>
</div>

<div class="container" id="gg-div">
  <component1></component1>
  <component2></component2>
</div>
```


### V-model
```js
  data:{ name: ''}
```

```html
<label>Your name [ {{ name }}  ]:</label>
<input  v-model="name" type="text" class="form-control"> <!-- меняет поле также в коде (this.name) -->
```
