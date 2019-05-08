# Google Auth

1. **passportjs** - пакет упрощяющий работу с OAuth & OpenID, который уже имеет стратегии для работы с разными сервисами
```sh
# google oauth strat
npm i passport passport-google-oauth20 -S
```

2. Зайти **Google API services console**
3. Нажать кнопку "включить API и сервисы"
4. Ищем `"Google+ API"`
5. Нажимаем включить
6. Там будет "Идентификаторы клиентов OAuth 2.0", заходим в первый ключ и берем из него "Идентификатор клиента" и "Секрет клиента" для passport-google-auth 

![](../assets/Screenshot_1.png)
![](../assets/Screenshot_2.png)
![](../assets/Screenshot_3.png)

```js
// passport-setup.js
const keys           = require('./keys')
const passport       = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

// Setuping Google 
const googleOptions = {
  // callbackURL - этот же путь, но абсолютный(http://localhost:8000/google_redirect) 
  // должен быть в Google console "Разрешенные URI перенаправления".
  // Это может быть и главная страница
  callbackURL : '/google_redirect', 
  clientID    : keys.google.clientID,
  clientSecret: keys.google.clientSecret
}
const googleCallback = (accessToken, refreshToken, profile, done) => {
  console.log('ACCESS TOKEN =', accessToken)
  console.log('REFRESH TOKEN =', refreshToken)
  console.log('PROFILE = ', profile)
  
  // без вызова этой функции не идет дальше выполнение программы
  done(null, profile) 
}
passport.use(new GoogleStrategy(googleOptions, googleCallback))

// без реализации этой функции - выдает ошибку
passport.serializeUser((user, done) => {
  console.log('SErializaing')
  done(null, user)
})

module.exports = passport
```

```js
// app.js
const express  = require('express')
const app      = express()
const passport = require('./passport-setup')

app.use(passport.initialize())

// google-auth
app.get('/google_login', passport.authenticate('google', {
	scope: ['profile'] // запрашиваемые данные от гугла от пользователе
}))

app.get('/google_redirect', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.send('Authed by google successfuly')
})
```




---

* Зачем нам нужен еще маршрут на редирект? Для того чтобы взамен на ключ, который даеться после запроса на google, взять информацию о пользователя из google
![](../assets/Screenshot_4.png)
  