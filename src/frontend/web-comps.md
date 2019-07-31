# Web Components
* [HABR](https://habr.com/ru/post/346670/) 
* [Vue as web-component(custom element)](https://stackoverflow.com/questions/49724029/using-vue-components-in-angular-5)

Содержание 

[[toc]]

--- 

### Intro
Web Components - это набор технологий, которые позволяют использовать компонентный подход с инкапсуляцией стилей и скриптов в вебе нативно, 
без подключения каких-либо библиотек или фейрмворков. 

### Состоит из стандартов

* **Custom Elements**. Quite simply, these are fully-valid HTML elements with custom templates, behaviors and tag names (e.g. `<one-dialog>`) made with a set of JavaScript APIs. Custom Elements are defined in the HTML Living Standard specification.

* **Shadow DOM**. Capable of isolating CSS and JavaScript, almost like an `<iframe>`. This is defined in the Living Standard DOM specification.

* **HTML templates**. User-defined templates in HTML that aren’t rendered until called upon. The `<template>` tag is defined in the HTML Living Standard specification.

* **HTML imports**


### Пользовательские элементы (Custom Elements)
Спецификация пользовательских элементов позволяет регистрировать новые теги и задавать их 
поведение в соответствии с жизненным циклом — создание, вставка в DOM, изменение атрибутов, удаление из DOM. 
Для того чтобы предотвратить возможный конфликт новых тегов стандарта HTML и пользовательских тегов, 
имена последних обязаны содержать как минимум один дефис — например, 
`<custom-tag></custom-tag>` или `<my-awesome-tag></my-awesome-tag>`. 
Также пользовательские теги на текущий момент не могут быть самозакрывающимися, даже теги без содержимого должны быть парными.


#### Регистрация своего компонента
```js
class XSpoiler extends HTMLElement {}

customElements.define("x-spoiler", XSpoiler);
customElements.define("x-spoiler", XSpoiler); // выдаст ошибку
```

```html
<html>
  <head></head>
  <body>
    
    <x-spoiler></x-spoiler>
    
  </body>
</html>
```
<br>

### Рисуем кнопку
```js
class XSpoiler extends HTMLElement {
  constructor() {
    super();

    let text = 'Click me'

    this.innerHTML = `
      <button type="button">${text}</button>
    `;

    this.querySelector("button").addEventListener("click", () => {
    	alert('You clicked me!')
    });
  }
}
```
<br>

### Жизненные хуки компонента
* `connectedCallback` Срабатывает, когда пользовательский элемент впервые добавляется в DOM.
* `disconnectedCallback`: Срабатывает, когда пользовательский элемент удаляется из DOM.
* `adoptedCallback`: Срабатывает, когда пользовательский элемент перемещен в новый документ.
* `attributeChangedCallback`: Срабатывает, когда пользовательскому элементу добавляют, удаляют или изменяют атрибут

```js
class XSpoiler extends HTMLElement {
  constructor() {
    setup() // объязательный запуск функции для унаследования класса
  }

  // lifecycle hooks
  connectedCallback() {
  }

  disconnectedCallback() {
  }

  adoptedCallback() {
  }

  attributeChangedCallback() {
  }
}

customElements.define("x-spoiler", XSpoiler);
```
<br >

### Компонент с слотом и ShadowDOM
```js
class XSpoiler extends HTMLElement {
  constructor() {
    super();

    this.text = {
      "when-close": "Развернуть",
      "when-open": "Свернуть"
    };
    
    this.events = {
      "close": new CustomEvent("x-spoiler.changed", {
        bubbles: true,
        detail: {opened: false},
      }),
      "open": new CustomEvent("x-spoiler.changed", {
        bubbles: true,
        detail: {opened: true},
      }),
    };

    // устанавливаем template по id
    this.attachShadow({mode: "open"});
    const template = document.getElementById("x-spoiler").content.cloneNode(true);
    template.querySelector("button").textContent = this.text["when-close"];
    this.shadowRoot.appendChild(template);

    // вешаем click-handler
    let btn = this.shadowRoot.querySelector("button") 
    btn.addEventListener("click", () => {
      this.opened = !this.opened;
    });
  }

  get opened() {
    return this.getAttribute("opened") !== null;
  }

  set opened(state) {
    if (!!state) {
      this.setAttribute("opened", "");
    } else {
      this.removeAttribute("opened");
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "opened":
        const opened = newVal !== null;
        const button = this.shadowRoot.querySelector("button");
        const text = this.text[opened ? "when-open" : "when-close"];
        button.textContent = text;
        this.dispatchEvent(this.events[opened ? "open" : "close"]);
        break;

      case "text-when-open":
        this.text["when-open"] = newVal;
        if (this.opened) {
          this.shadowRoot.querySelector("button").textContent = newVal;
        }
        break;

      case "text-when-close":
        this.text["when-close"] = newVal;
        if (!this.opened) {
          this.shadowRoot.querySelector("button").textContent = newVal;
        }
        break;
    }
  }

  static get observedAttributes() {
    return [
      "opened",
      "text-when-open",
      "text-when-close",
    ];
  }
}

customElements.define("x-spoiler", XSpoiler);
```

```html
<x-spoiler>
  Содержимое тега.
</x-spoiler>

<br><br>

<x-spoiler text-when-close="Узреть" text-when-open="Скрыть">
  Ещё один x-spoiler с настроенным текстом
</x-spoiler>

<br><br>

<x-spoiler opened>
  Изначально открытый элемент
</x-spoiler>

<template id="x-spoiler">
  <style>
    :host > section {
      display: none;
    }
    :host([opened]) > section {
      display: block;
    }
  </style>
  <button type="button"></button>
  <section><slot></slot></section>
</template>
```
<br>