## AdonisJS - framework for Nodejs

--
* Комманды в консоле
* Подключение к БД
* Localize stuff
* Services
* Middleware
* Cookies
* Шаблонизатор (Nunjucks)
* Маршруты
* В Продакшене
* req(Request)


---


### Комманды (./ace ....) or (adonis ...)
* **adonis new nameOfApp** - создание нового проекта
* **node ace** - help list of ace
* **./ace make:view home** - создание шаблона "home"
* **./ace make:controller Posts** - создание контроллера "PostsController"
* **./ace make:model Post** - создание модели "Post"
* **./ace make:migration posts --create=posts** - создание миграции
* **./ace migration:run** - запуск миграции
* **./ace db:seed** - засеять данными начальными (также можно юзать factory.js для пробных данных)

### Подключение к БД
* Установить драйвер
* Прописать в файле config/database.js свой адаптер и данные
