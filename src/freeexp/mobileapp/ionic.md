# Ionic Framework (Cordova + Angular)

Позволяет написать одно приложение подходящие для всех платформ. Но лучше по ощущениям [ReactNative](/mobileapp/react-native.md).

#### Содержание
* [Ссылки](#Ссылки)
* [Установка](#Установка)
* [Создание нового проекта(шаблона)](#Создание-нового-проекташаблона)
* [Запуск приложения в браузере](#Запуск-приложения-в-браузере)
* [Запуск и Test приложения на Android Studio](#Запуск-и-test-приложения-на-android-studio)
* [Подключение и использование Ionic Native - SQLite](#Подключение-и-использование-ionic-native--sqlite)
* [Работа с БД(SQlite)](#Работа-с-БДsqlite)
* [Приложение для определенных версий Android (API Level)](#Приложение-для-определенных-версий-android-api-level)
* [Production (--prod)](#production---prod)
* [Основные комманды](#Основные-комманды)


---

## Ссылки
* [Мой пример (+ SQlite)](https://github.com/Nikeweke/Ionic-todolist)
* [Angular 2](https://www.youtube.com/watch?v=DwTNR3EBSJQ&list=PL4cUxeGkcC9jqhk5RvBiEwHMKSUXPyng0)
* [Typescript](https://www.tutorialspoint.com/typescript/index.htm)
* [Ionic App(ex.)](https://www.youtube.com/watch?v=LHzAa4NKFx0)
* [Ionic App(ex.2)](https://gonehybrid.com/build-your-first-mobile-app-with-ionic-2-angular-2/)
* [Ionic App(ex.3)](https://www.youtube.com/watch?v=Nn5RQpZBDsg&t=940s)
* [Ionic App(ex.4)](https://github.com/TeamClouders/Ionic-2-sqlite-demo)


## Установка
##### Cordova & Ionic - `npm i cordova ionic -g`
Для использования Ionic Framework надо установить:
* **Cordova** - оболочка для приложение, точнее браузер который компилируеться под нужную платформу и показывает приложение как веб-страницы
* **Ionic** - фреймворк, как bootstrap для веба, правдо имеет свои функции, компоненты и другой функционал.
* **[Android studio(SDK)](https://developer.android.com/studio/index.html)** - (для запуска на Android) желательно ставить на путь указанный в установке, иначе могуть быть траблы с тестировка приложение на виртуальном телефоне и сборкой под Android.
* **[Java (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)** - (для запуска на Девайсе) можно ставить в любое место, только нужно установить правильно системную переменную `JAVA_HOME` путь должен быть к папке **jdk**.
                 

 


## Создание нового проекта(шаблона)

#### `ionic start myapp blank`
Создание нового проекта - пустой шаблон (blank). Так же есть другие варианты - tabs, sidemenu, super, conference, tutorial, aws



## Запуск приложение в браузере
После создания проекта, надо добавить платформу (`[<platform>]` - android, ios). После запустить для проверки в браузере. Так же можно удалить платформу вместо `add` поставить `rm`

#### `ionic cordova platform add [<platform>] `

#### `ionic serve`



## Запуск и Test приложения на Android Studio
Запустить Andoid Studio, зайти в раздел виртуальных устройств, запустить 1 из доступных. Запустить эмуляции на устройстве.

#### `ionic cordova emulate android --consolelogs`
Запустит приложение эмуляции платформы android с  выводом console.log из кода.

#### `ionic cordova run android --consolelogs`
Запустит приложение на подключеном устройстве или в эмуляторе платформы android с выводом console.log из кода.


## Подключение и использование Ionic Native- SQLite

##### Отдебажить в браузере не выйдет так плагин работает только на девайсе, поэтому надо юзать andoid studio virtual device + комманда `ionic cordova emulate android --consolelogs` чтобы видеть ошибки в консоли.

##### К приложению не нужно подкладывать БД, надо заготовить комманды на создание таблиц и прочего и она сама появиться в приложении.

https://ionicframework.com/docs/native/sqlite/

1. Сначала нужно установить модули:
```
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic-native/sqlite
```

2. Добавить плагин в приложение

###### app.module.ts
```ts
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,                   // <!-------------------------- Paste SQLite here 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
```

3. Использовать

###### home.ts
```ts
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';    // <!----- Import SQLite and SQLiteObject

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

    
  private db: SQLiteObject;    //  object to Use SQLite after connection to IT


  /**********************************************
  *  __constructor
  *
  **********************************************/
  constructor(public navCtrl : NavController, private sqlite: SQLite) {       // <!---------- Make object of SQLite
      
     this.sqlite.create({ name: 'todo.db', location: 'default'})
                .then((db: SQLiteObject) => {
                   this.db = db;
                   this.createTable();
                 })
                .catch(e => console.log(e));
  }
  
  
  /**********************************************
  *  Creates Table "tasks" and inserts 1 test record
  *
  **********************************************/
  createTable(){
  
     this.db.executeSql('CREATE TABLE IF NOT EXISTS tasks(`id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, `task`	TEXT)', {})
            .then(() => console.log('Executed SQL1'))
            .catch(e => console.log(JSON.stringify(e)));

     this.db.executeSql('INSERT INTO tasks( task ) VALUES("Take a nap")', {})
            .then(() => console.log('Executed SQL2'))
            .catch(e => console.log(JSON.stringify(e)));
  }
}
```

 

## Приложение для определенных версий Android (API Level)
Каждой версии android соотноситься свой API Level. Соответсвенно чем выше API тем свежее версия android. Указать для какой версии andoroid сделано приложения можно так, правдо работает оно или нет, точно неизвестно.

###### myapp/config.xml - тут указана целевая версия(APi - 19), и минимальная(API - 16)
```
<preference ..... />
<preference name="android-minSdkVersion" value="16" />
<preference name="android-targetSdkVersion" value="19" />
```

## Работа с БД(Sqlite)

#### Разница между обычными запросами и запросами с подстановкой ( ? )
```ts
//-------------------> Вот здесь подстановка без знака ?,  тут надо использовать - .then().catch;
return new Promise(resolve => {
   var query = "DELETE FROM tasks WHERE id = "+ id +"";

   this.db.executeSql(query, {}).then((s) => {
      console.log('Delete Success...', s);

      this.toastCtrl.create({
         message: 'Task deleted!',
         duration: this.duration_toast,
         position: 'top'
      }).present();
      resolve(true);

   }).catch((err) => {
       console.log('Deleting Error', err);
  });
})


//-------------------> Вот здесь подстановка с помощью знака ?, но при этом тут нельзя использовать тогда - .then().catch
  return new Promise(resolve => {
     var query = "DELETE FROM tasks WHERE id = ?";

     this.db.executeSql(query, [id], (s) => {
        console.log('Delete Success...', s);

        this.toastCtrl.create({
           message: 'Task deleted!',
           duration: this.duration_toast,
           position: 'top'
        }).present();
        resolve(true);

     }, (err) => {
         console.log('Deleting Error', err);
    });
 })
```

## Production (--prod)
В этом режиме есть отличие от обычныго debug, в нем не рабоают подключенные плагины, такие как SQlite, и другие, по этому нужно запускать свои плагины после готовности приложения в файле `app.component.ts`, тогда все работает, полный пример по ссылке "Мой пример".

```ts
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.sqlite.openDb();          // <!---- open DB
    });
  }
```


## Основные комманды
#### `ionic start myapp blank`
Создание нового проекта - пустой шаблон (blank). Так же есть другие варианты. 

#### `ionic cordova platform add [<platform>] `
Добавить платформу `[<platform>]` - android, ios

#### `ionic serve`
Запускает приложение в браузере

#### `ionic generate [<type>] [<name>] `
Генерация элементов - `[<types>]` - component, directive, page, pipe, provider, tabs; `[<name>]` - --no-module, --constants

#### `ionic cordova emulate [<platform>] [<name>] `
Запуск эмуляции на запущеном виртуальном девайсе, например в Android Studio запустить один из Virtual Device. `[<platform>]` - android, ios; `[<name>]` - --livereload, --consolelogs;

#### `ionic cordova run [<platform>] [<name>] `
Запуск приложения на подключеном девайсе, если такого нет, то запуститься в  Android Studio в Virtual Device. `[<platform>]` - android, ios; `[<name>]` - --livereload, --consolelogs;

#### `ionic cordova build [<platform>] [<name>] `
Подготовка и компиляция приложения. `[<platform>]` - android, ios; `[<name>]` - --prod, --release;
















