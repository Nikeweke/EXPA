# Node
#### Содержание
[[toc]]

---


### CORS
**1)** Установить дополонение к браузеру который включает CORS(Firefox - CORS Everywhere) и попробовать сделать запрос. Если не помогло идем в пункт (2)

**2)** Ставим `axios` на фронтенде и пишем так запрос с заголовком, если это не работает то идем к пункту (3)

```js
var headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

axios['post']
  ('http://localhost:8000/api/test', {data: 'sss'},  {  headers: headers  })
   .then(function (response) {  console.log(response.data);  })
    .catch(function (error)   {  console.log(error);    });

``` 

**3)** Если это `Node`.  На бекенд установить `cors`.

```js
// routes / api.js
var cors = require('cors');
...

module.exports = function(app, urlencodedParser) {
     //  test page
     app.put('/form', [urlencodedParser, cors()],  (req, res) => {
        console.log(req.body)
        res.send(req.body)
    });

 }
``` 
















