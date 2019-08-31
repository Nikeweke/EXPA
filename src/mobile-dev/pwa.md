# PWA - progressive web app

* [What is service worker](https://medium.com/commencis/what-is-service-worker-4f8dc478f0b9)
* [Intro to SW](https://getinstance.info/articles/javascript/introduction-to-service-workers/) 
* [Push notifications](https://medium.com/izettle-engineering/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679)
* [Send message between window and service-worker](http://craig-russell.co.uk/2016/01/29/service-worker-messaging.html#.XWT7PHtn2Uk)
* [No refresh page to get controller](https://stackoverflow.com/questions/38168276/navigator-serviceworker-controller-is-null-until-page-refresh)

Содержание

[[toc]]

--- 

### Что такое PWA?
PWA - это progressive web app, и состоит из:
* Service worker - offline work(via cache app), push-notifications, управление интернет трафиком
* мобильное верстка как у нативного приложения (Android, iOS) (via css)

### Что такое `service worker`?
Service Worker — это скрипт, который браузер запускает в фоновом режиме, отдельно от страницы. Они выполняют такие функции как push-уведомления и фоновая синхронизация. Ключевая их особенность — это возможность перехватывать и обрабатывать сетевые запросы, включая программное управление кешированием ответов.

### Что позволяет делать `service-worker`?
* Управление трафиком сети
* Использование кэша
* Push notifications

### Что не может делать `service-worker`?
* Нет доступа к `window`. Можно использовать для общения с окном `postMessage` 
* Нельзя запускать на порту 80. `service worker` требует HTTPS, но можна работать на localhost во время разработки.


## Регистрация `service-worker` и lifecycle hooks

Hooks:
* Registered
* Install
* Activate
* Fetch


###### index.html
```html
<!DOCTYPE html>
<html lang="en">

<script src="sw.js"></script>
<script>
  // registering 
  registerServiceWorker()
</script>

</html>
```

###### sw.js
```js
// you can use self. or this.

// Install Service Worker (fires once when service not registered)
self.addEventListener('install', installHandler);
// Service Worker Active (fires once when service not registered)
self.addEventListener('activate', activateHandler);
self.addEventListener('fetch', fetchHandler);

function installHandler(event) {
  console.log('install)
}

function activateHandler(event) {
  console.log('activate)
}

// Controlling requests
function fetchHandler(event) {
  event.respondWith(caches.match(event.request))
  .then(function (response) {
      return response || fetch(event.request);
  });
}

function registerServiceWorker() {
  // if serviceWorker not supported 
  if (!('serviceWorker' in navigator)) {
    console.log('ServiceWorker not supported')
    return
  }

  return navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      // Регистрация успешна
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch((err) => {
      // Регистрация не успешна
      console.log('ServiceWorker registration failed: ', err);
    });
}

```
<br>


## Показать push-сообщение

###### index.html
```html
<!DOCTYPE html>
<html lang="en">

<script src="sw.js"></script>
<script>
  // registering 
  registerServiceWorker()

  // trying to show notification 
  .then(() => {
    // sendMessageToServiceWorker({msg: 'hello there'})
   //  return

    let promisesChain // chain of promises to show notification
    let userPermission = window.Notification.permission

    // we need "granted" - if no granted, 
    // then request for user permission to show notifications
    if (userPermission !== 'granted') {
      promisesChain = requestNotificationPermission().then(() => navigator.serviceWorker.ready)

    } else {
      promisesChain = navigator.serviceWorker.ready
    }

    promisesChain
      .then((swRegistration) => showLocalNotification('hello', {}, swRegistration))
      .catch((err) => {
        throw new Error(err)
      })
  })
</script>

</html>
```

###### sw.js
```js
/**
 * Registering service worker
 * @return {Promise} Promise.then(ServiceWorkerRegistration: Object)
 */
function registerServiceWorker() {
  // serviceWorker not supported 
  if (!('serviceWorker' in navigator)) {
    console.log('ServiceWorker not supported or was already registered ')
    return
  }

  return navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      // Регистрация успешна
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      // return registration
      
    })
    .catch((err) => {
      // Регистрация не успешна
      console.log('ServiceWorker registration failed: ', err);
    });
}

/**
 *  Запрос на показ сообшения 
 *  @return {Promise}
 */
function requestNotificationPermission() {
  return window.Notification.requestPermission()
    .then((permission) => {
      // value of permission can be 'granted', 'default', 'denied'
      // granted: user has accepted the request
      // default: user has dismissed the notification permission popup by clicking on x
      // denied: user has denied the request.
      if(permission !== 'granted'){
        return Promise.reject('Permission not granted for Notification');
      }
    })
}

/**
 * Показать сообщение
 * @param {String} title 
 * @param {Object} body 
 * @param {Object} swRegistration 
 */
function showLocalNotification(title, body, swRegistration) {
  console.log('showLocalNotification')
  const options = {
      body,
      // here you can add more properties like icon, image, vibrate, etc.
  };
  swRegistration.showNotification(title, options);
}
```
<br>


## Общение между `service-worker` и client(browser)
:::tip
**В чем тут сложность?** Для отправки сообщение из браузера(`client`) в `service-worker` 
в обьекте **navigator.serviceWorker** должно быть свойство `controller`, которое должно быть объектом, но не null. 
Когда регистрируете `service-worker` - то `controller` будет null до тех пор пока не будет перезагружено окно, 
но можно заюзать  **self.skipWaiting()** и **self.clients.claim()** и это решит проблему без перезагрузки окна.
:::

###### index.html
```html
<!DOCTYPE html>
<html lang="en">

<script src="sw.js"></script>
<script>
  if ('serviceWorker' in navigator) {
    // listener for messages coming from the service worker
    navigator.serviceWorker.addEventListener('message', messageHandler)
    // listener when controller is changed
    navigator.serviceWorker.addEventListener('controllerchange', controllerHandler)
  }

  // registering 
  registerServiceWorker()
  .then(() => {
    if (navigator.serviceWorker.controller !== null) {
      const data = {msg: 'Hello'}
      console.log('index.html: send message to service-worker', data) 
      sendMessageToServiceWorker(data)
    } 
  })
  

  // ====================================================> FNS
  function messageHandler(event) {
    console.log("index.html: received msg - ", event.data);

    const data = 'Client says Hello back!'
    console.log("index.html: send message to service-worker again - ", data);
    event.ports[0].postMessage(data);
  }

  function controllerHandler(event) {
    console.log("controllerchange - ", navigator.serviceWorker.controller);

    const data = {msg: 'Hello'}
    console.log('index.html: send message to service-worker', data) 
    sendMessageToServiceWorker(data)
  }

  // Send message from client -> service-worker
  function sendMessageToServiceWorker(data) {
    return new Promise((resolve, reject) => {
      var messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = function(event) {
        if (event.data.error) {
          reject(event.data.error);
        } else {
          resolve(event.data);
        }
      };

      navigator.serviceWorker.controller.postMessage(data, [messageChannel.port2]);
    });
  };
</script>

</body>
</html>
```

###### sw.js
```js
self.addEventListener('install', installHandler);
self.addEventListener('activate', activateHandler);
self.addEventListener('message', messageHandler);

function installHandler(event) {
  console.log('install')
  event.waitUntil(self.skipWaiting()); // Activate worker immediately
}

function activateHandler(event) {
  console.log('activate')
  event.waitUntil(self.clients.claim()); // Become available to all pages
}

//  message from service-worker -> client
function messageHandler(event) {
  console.log("sw.js: received message - ", event.data);

  // Responding to all clients 
  let msg = {msg: 'Msg from SW'}
  clients.matchAll().then(clients => {

    console.log("sw.js: send message to client - ", msg);
    for (let index in clients) {
      sendMessageToClient(clients[index], msg)
        .then(m => console.log("sw.js: received message: " + m ));
    }
  })
}

//  Send message from service-worker -> client
function sendMessageToClient(client, data){
  return new Promise(function(resolve, reject){
      var msg_chan = new MessageChannel();

      msg_chan.port1.onmessage = function(event){
          if(event.data.error){
              reject(event.data.error);
          }else{
              resolve(event.data);
          }
      };

      client.postMessage(data, [msg_chan.port2]);
  });
}

// Register SW
function registerServiceWorker() {
  // if serviceWorker not supported 
  if (!('serviceWorker' in navigator)) {
    console.log('ServiceWorker not supported')
    return
  }

  return navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      // Регистрация успешна
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      return registration
    })
    .catch((err) => {
      // Регистрация не успешна
      console.log('ServiceWorker registration failed: ', err);
    });
}
```