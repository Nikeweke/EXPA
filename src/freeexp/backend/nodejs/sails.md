# Sails JS - framework for Nodejs

##### Useful links 
* [Tutorial](https://www.youtube.com/watch?v=4ze3RepMRjQ)
* http://yoramkornatzky.com/post/localization-of-sails-js-applications
* http://iantonov.me/page/izuchaem-sailsjs-chast-2-struktura-proekta
* [Tut 2](https://www.youtube.com/watch?v=HrchcED6TKY)
* [Docs of 1.0 vers](http://next.sailsjs.com/documentation/upgrading/to-v-1-0)

#### Содержание

* [Комманды в консоле](#commands)
* [Настройки запуска](#settings)
* [Localization](#localization)
* [Services](#services)
* [Middleware (aka Policies) - how to use](#middleware)
* [Cookies](#cookies)
* [Подключение к БД](#db)
* [Шаблонизатор (EJS)](#templater)
* [Маршруты](#routes)
* [В Продакшене](#prod)
* [req(Request)](#req)
* [Promises DB](#promises_db)
* [Sync DB](#sync_db)
---



## Комманды в консоле <a id="commands"></a>
* **sails lift** - поднять сервер Sails
* **sails new MyProject** - создаст проект в папке где находишься
* **sails generate controller page** - создает контроллер PageController.js
* **sails generate api status** - создает StatusController.js(api/controllers) и Status.js(api/models)

## Настройки запуска <a id="settings"></a>
Так можно установить вручную порт и среду запуска
###### app.js
```js
// dev
process.env.PORT = 8000;
process.env.NODE_ENV = 'dev';

// prod
// process.env.PORT = 80;
...
```

## Localization <a id="localization"></a>

* в папке **config/locales** - создаем свой файл где будут переменные ru.json
* в папке **config/i18n** - расскоментить строку с массивом где языки, и добавить туда свой язык
* в папке **api/policies** - создаем свой Middleware **localize.js** для перехвата с url версию сайта(ru, de, fr ...)
* в папке **config** - открыть **policies.js** - и написать свой Middleware**(localize.js)** для всех запросов 
* Используем в шаблоне переменные из файла **ru.json**
* Так же можно писать локализацию прямо в методе 
```js
  Index: function(req, res, next)
  {
    req.setLocale('ru');
  },
```

##### ru.json
```json
{
  "Welcome": "Привед медвед",
  "Goodbye": "Покеда."
}
```
##### routes.js
```js
 'get  /':             function(req, res) { return res.redirect('/en/'); },
 'get  /:lang':        'UserController.Index',
 'post /:lang/user/':  'UserController.addUser',
```

##### i18n.js
```js
module.exports.i18n = {
     locales: ['en', 'es', 'fr', 'de', 'ru'],
}
```

##### localize.js  
```js
module.exports = function(req, res, next)
{
   var lang = req.param('lang'); // перехват переменной из URL
   req.setLocale(lang); // установка локализации
   next();
};
```

##### policies.js  
```js
module.exports.policies = {
  '*': true,
  '*': 'localize',
  }
```

##### index.ejs
```js
<h4> <%= __('Welcome') %> </h4>
```

## Services или Глобальные функции <a id="services "></a>
**Сервысы могут хранить переменные их состояние между страницами, как State store**

* Создаем в **api/services** наш сервисес - **myService.js** 
* Там можно написать любые функции и экпоритровать их
* В любом месте можно вызвать функции из Сервиса **(myService.js)**

##### myService.js

```js
module.exports.one = {
  Summ: function(a,b){ return a + b ; }
}

module.exports.two = {
  Summ: function(a,b){ return a * b ; }
}
```

##### myController.js
```js
module.exports = {
  Index: function(req, res){ console.log(myService.one.Summ(5,2)); }
}
```

## Middleware (aka Policies) <a id="middleware"></a>
* Создать в папке api/policies - myAuth.js
* Расскоментить в config/policies.js - '*':true; 
* И дописать там же свой контроллер и свой Middleware - 'MyController': { '*': 'myAuth' }

```javascript
// config/policies.js

// Работа с MIDDLEWARE такая :

  // наш Middleware на отдельный контроллер на отдельную функцию
  'BreedController': {  'Index': 'myAuth'  },

   // наш Middleware на отдельный контроллер на все функции
  'BreedController': {  '*': 'myAuth'  },

   // наш Middleware - на все контроллеры
  '*': 'myAuth' ,
```


Также можно писать в routes.js
```javascript
 'get  /:lang':    [ {policy: 'myAuth'}, {controller:'UserController', action:'Index'}],
```


## Cookies <a id="cookies"></a>
примерна такая же и в Laravel
```javascript
  Index: function(req, res)
	 {   
       // syntax - res.cookie(name, value, options) 
       // options:
       // maxAge - жизнь куки в милисекундах (значение "-1" убивает куку) 
      // httpOnly - true or false or nothing
      // expires - поставить дату истечения 
      // path - '/somepath'
      // secure - true or nothing - Пометка что кука безопасна (Нафига не понятно)
      // domain - .example.com
                       
	    var date = new Date();
		  date.setDate( 7 + date.getDate()); //дни

		  res.cookie('rememberme', {dude: 'man', brick: 'shit'}, { expires: date})
      res.cookie('Uid', '52', { expires: date })
		  res.ok('Cooks were done');
		},
         
 	 Kill: function(req, res)
				 {
						res.cookie('rememberme', null, { maxAge: -1})
            res.cookie('Uid', null, { maxAge: -1})
						res.ok('Cooks were delete');
				 },        
```


## Подключени к БД <a id="db"></a>

* заходим в config/connections.js - там есть секция MySQL и вводим свои данные для подключения
* заходим в config/models.js - там пишем название массива подключения к БД,
* и раскоментим строку - migrate: 'alter', это значит перестроение таблиц автоматом в соответствии с моделями:
 - 'alter' - перестроит таблицы, но при этом сохранит данные которые в них
 - 'safe'  - ничего не строит на основе моделей, надо вручную делать таблы
 - 'drop'  - убивает таблицы, и заново их строит


## Шаблонизатор <a id="templater"></a>

##### По ум. стоит EJS. По желанию можно подключить любой шаблонизатор(ссылка как подключить): [Pug, Nunjucks](https://github.com/Nikeweke/EXPA--NODE/blob/master/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80%D1%8B.md)

###### index.ejs
```html
<% layout('layout') -%>

<% script('foo.js') -%>
<% stylesheet('foo.css') -%>

<%/* TTHHAATT  CCOOMMEENNTT*/%>
<h1>I am the  template</h1>

<% block('header', "<p>I'm in the header.</p>") -%>
<% block('footer', "<p>I'm in the footer.</p>") -%>

```

###### layout.ejs
```html
<!DOCTYPE html>
<html>
  <head>
    <title>It's</title>
    <%-scripts%>
    <%-stylesheets%>
  </head>
  <body>
    <header>
      <%-blocks.header%>
    </header>
    <section>
      <%-body -%>
    </section>
    <footer>
      <%-blocks.footer%>
    </footer>
  </body>
</html>

```


## Маршруты (config/routes.js) <a id="routes"></a>

Можно строить маршруты 2 путями:          
1. прописывать в routes.js             
2. использовать схему в url типа - localhost/контроллер/метод действия/параметры, таким же способом можна вызывать шаблоны - такое свойство прописано в config/blueprints.js - actions = true - по ум.       
```javascript
// Например
// -> controllers/UserController.js
'Index': function(req, res)
 {
   return res.view(); // это значит что будет вызов шаблона с таким путем -> views/user/index.ejs
 }
```

* Можно по разному писать маршруты
``` javascript
module.exports.routes = {
  '/':       {  view: 'homepage' },
  '/page':   'PageController.index',
  'get /page':   'PageController.index',
  'post /page':   'PageController.index',
  'delete /page':   'PageController.index',
  '/about':  {
                controller: 'PageController',
                action: 'about'
              }
};
```




## В Продакшене <a id="prod"></a>

* нужно в config/blueprints.js - разкомментить и поставить false : actions, rest, shortcuts

## Request(req) <a id="req"></a>

* `req.acceptedLanguages` - стандартные языки пользователя
* `req.route` - путь маршрута
* `req.headers` - заголовки
* `req.protocol` - http or https, ftp , file

## Promises DB <a id="promises_db"></a>

Promises для работы с БД, не `callbacks`.
###### IndexController.js
```js
Index: function(req, res)
{
  var users   = User.getUsers();    // получаем пользователей

  // эта комманда дает завершиться всем промисам, и в конце мы просто передаем данные на вьюху
    Promise.all([users]).then(values => {

       users   = values[0];

       return res.view('homepage', {users: users });
      //  return res.ok('ss');
    });
},
```

###### User.js
```js
getUsers: function()
 {
    // Было так , я перенс в SQLsimple.js
   // return new Promise(resolve => {
   //     User.query('SELECT * FROM users', (err, result) => {
   //         if(err) { console.log(err); resolve(false); }
   //          resolve(result);
   //      })
   //  })

   
    return sqls.get(this, 'SELECT * FROM users');  // вернет промис в состоянии <pending>
 },
```




## Sync DB <a id="sync_db"></a>
Можно делать запросы синхронными чере эту библиотеку : `npm i sync --save`;
###### IndexController.js
```js
var Sync = require('sync');
...
Index: (req, res) =>            // == function (req, res)
{
  Sync(function(){                                      // оболочка синхронности

           var result = User.getUsers.sync(null, 2);  // первым параметром идет callback, потом остальные
           console.log(result);                       //  out: [ [users], 5 ]

           res.ok('All is working fine')
       })
},
```

###### User.js
```js
 getUsers: function(param1, callback)  // последним параметром идет callback, перед ним остальные
    {
          console.log(param1);
          User.query('SELECT * FROM users', function(err, result)
          {
            if(err){ console.log(err); }
            var param2 = 5;  
            callback(null, result, param2);        
          });

    },
```
 


