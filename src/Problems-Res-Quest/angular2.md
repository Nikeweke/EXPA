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
