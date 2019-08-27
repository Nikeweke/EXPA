# Service worker

* [What is service worker](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)
* [Intro to SW](https://getinstance.info/articles/javascript/introduction-to-service-workers/) 
* [Push notifications](https://medium.com/izettle-engineering/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679)
* [Send message between window and service-worker](http://craig-russell.co.uk/2016/01/29/service-worker-messaging.html#.XWT7PHtn2Uk)

Содержание

[[toc]]

--- 


### Что такое `service worker`?
Service Worker — это скрипт, который браузер запускает в фоновом режиме, отдельно от страницы. Они выполняют такие функции как push-уведомления и фоновая синхронизация. Ключевая их особенность — это возможность перехватывать и обрабатывать сетевые запросы, включая программное управление кешированием ответов.

### Что позволяет делать `service-worker`?
* Управление трафиком сети
* Использование кэша
* Push notifications

### Что не может делать `service-worker`?
* Нет доступа к `window`. Можно использовать для общения с окном `postMessage` 
* Нельзя запускать на порту 80. `service worker` требует HTTPS, но можна работать на localhost во время разработки.
