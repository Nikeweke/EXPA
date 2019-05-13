# Intro

[About logger frameworks](https://www.coreycleary.me/should-you-use-a-logging-framework-or-console-log-in-node/)

Содержание
[[toc]]

--- 

### Различие между `console.log` & Logger frameworks?

|                                 | console.log                | logger frameworks |
|---------------------------------|----------------------------|-------------------|
| **Доп. зависимости**                | Нет                        | Да                |
| **Включение/отключение логгера**    | Нет                        | Да                |
| **Запись в логи**                   | Нет                        | Да                |
| **Сложно понять уровень сообщения** | Да, большинство это stdout | Нет               |
| **Запись логов в несколько файлов** | Нет                        | Да                |
| **Отсекание сообщений по уровню**   | Нет                        | Да                |


### Winston - the best among loggers
```sh
npm i winston -S
```

```js
const winston = require('winston')

// define format for logs 
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
 
const logger = winston.createLogger({
  level: 'info',
  silent: false, // disable all loggers
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [
    // Выводить в консоль
    new winston.transports.Console(), 

    // Выводить сообщения уровня "error" в файл "error.log"
    new winston.transports.File({ filename: 'error.log', level: 'error' }), 
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

// const levels = { 
//   error: 0, 
//   warn: 1, 
//   info: 2, 
//   verbose: 3, 
//   debug: 4, 
//   silly: 5 
// };


logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});


// same as above
logger.info('Hello distributed log files!')

logger.error('Some error')
```


### Sentry - сервис для логирование ошибок
1. Зарегестрироваться [здесь]()
2. Создать приложение 
3. Выбрать язык и установить пакет "sentry"
4. Иниц. экземпляр

```sh
npm i  @sentry/node -S
```

```js
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' });

Sentry.configureScope(scope => {
  scope.setExtra('battery', 0.7);
  scope.setTag('user_mode', 'admin');
  scope.setUser({ id: '4711' });
  // scope.clear();
});


Sentry.addBreadcrumb({
  category: 'auth',
  message: 'Authenticated user ' + 'asd',
  level: Sentry.Severity.Info
});


// Sends error to Sentry (with part of code) - error level
Sentry.captureException(new Error("Some error"));
// Sends message with level info
Sentry.captureMessage('Hello, world!');
Sentry.captureEvent({
  message: 'Manual',
  stacktrace: [
    'asdasds'
    // ...
  ],
});
```