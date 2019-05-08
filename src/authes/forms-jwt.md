# Forms + JWT - auth 
* [How to make basic http auth - without jwt](https://medium.com/@bitshadow/how-basic-http-authentication-and-session-works-d29af9caec31)
* [5 steps understand jwt-auth](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec)
* [Authentication nowadays](https://hackernoon.com/how-do-you-authenticate-mate-f2b70904cc3a)

#### Содержание
[[toc]]

--- 

### Сценарий аутентификации и авторизации
1. Клинет отсылает свои данные(`username, password`), на сервер. 

2. Сервер смотрит есть ли такой пользователь в системе, если нет - то переход на логин страницу.

3. Если есть пользователь - то сервер отсылает данные о пользователе(необъязательно, могут быть и payload токена) и его токен(JWT), без его пароля. Токен(`access_token` - это jwt-токен, название может быть произволным) генерируеться на сервере с секретом.  

4.  Клиент получает  токен ставит в куки по инструкции сервера(Set-Cookie). Если получает данные о пользователе и устанавливает их в `localStorage`, если они пришли. Если кук не будет, то клиент каждый раз должен будет проходить авторизацию.

5. При каждом запросе клиента, сервер вынимает из кук `access_token` и проверяет(jwt.verify), если удалось расшифровать токен с помощью секрета сервера, то пользователь наш. Тогда мы можем достать инфу из токена и дать пользователю запрашиваемую инфу.  

> Если подписи совпадают, то это означает, что JWT является действительным, что указывает на то, что вызов API поступает из подлинного источника. В противном случае, если подписи не совпадают, это означает, что полученный JWT является недействительным, что может быть индикатором потенциальной атаки на приложение. Таким образом, проверяя JWT, приложение добавляет уровень доверия между собой и пользователем.

6. Выход - осуществляется удалением токена из кук 

### Quick sample
```js
const express = require('express')
const jwt     = require('jsonwebtoken')

const app        = express()
const JWT_SECRET = 'supersecret'

// Зарегистрируйем домашний маршрут, который отображает приветственное сообщение
// К этому маршруту можно получить доступ без токена
app.get('/', (req, res) => {
  res.send("Welcome to our API")
})

// Зарегистрируем маршрут, чтобы получить новый токен
// В реальном мире мы бы аутентифицировали учетные данные пользователя
// перед созданием токена, но для простоты доступа к этому маршруту
// создаст новый токен, действительный в течение 2 минут
app.get('/token', (req, res) => {
  const token = jwt.sign({ username:'ado', id: 1}, JWT_SECRET, {expiresIn: 120})
  res.send(token)
})

// Зарегистрируем маршрут, который требует действительный токен для просмотра данных
app.get('/api', (req, res) => {
  const token = req.query.token

  // Даже не нужно лезть в БД для проверки пользователя,
  // достаточно проверить токен с помощью своего ключа,
  // и если все ок - значит это наш токен, пользователь аутентифицирован
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    console.log(decoded)
    if (!err) {
      const secrets = {"accountNumber" : "938291239","pin" : "11289","account" : "Finance"}
      res.json(secrets)
    } else {
      res.send(err)
    }
  })

})

// Launch our app
const port = 8000
const server = app.listen(port, function () {
  console.log('JWT listening on port ' + port)
})
```
