## Angular 2

#### Моя документация
https://legacy.gitbook.com/book/nikeweke/angular-a-big-elephant/details

* [Tut from netninja](https://www.youtube.com/watch?v=DwTNR3EBSJQ&list=PL4cUxeGkcC9jqhk5RvBiEwHMKSUXPyng0)
* [Typescript](https://www.tutorialspoint.com/typescript/typescript_classes.htm)

### Install
```
npm i -g @angular/cli@latest
```

### Create project
```
ng new myApp
```

### Up app (localhost:4200)
```
ng serve
```

## Подключаем роутинг
1. app.module.ts (truncated):
```ts
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    NavbarComponent,
  ],
  imports: [
    ...
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'directory', component: ArticlePage },
     // { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
2. app.component.html:
```html
<nav>
    <a routerLink="/" routerLinkActive="active">Home</a>
    <a routerLink="/directory" routerLinkActive="active">Directory</a>
 </nav>
<router-outlet></router-outlet>
```

## Подключение Sass
Установит текущее приложение на scss
```
ng set defaults.styleExt scss
```

Сделать шаблон с scss
```
ng new Demo_Project --style=scss
```

## После ng build, не запускалось страница, но для этого нужен хотя бы какой то серв. Решение:
изменить в index.html <base href="/"> ---> `<base href="./">`  

## Если нужно применить стили для всего приложения
 тогда надо создать в папке src/app/assets - my-styles.css, и подключить в src/index.html.

## Подключение компонента в главный компонент после генерации
надо теги подключить в app.component.html

## `<ng-content></ng-content>` - это директива позволит вставить контент внутрь компонента
```html
<app-index-page>hello there</app-index-page>
```
```html
<!-- indexpage.component.html -->
<p>gggggg</p>
<ng-content></ng-content> <!-- "hello there" goes here -->
```




