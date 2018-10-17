# ReactJS
#### Содержание
[[toc]]

### Useful links
* [Tutorial](https://www.tutorialspoint.com/reactjs/reactjs_keys.htm)
* [MaterialDesign](http://www.material-ui.com/#/get-started/installation)
* [React Bootstrap](https://react-bootstrap.github.io/introduction.html)
* [Smart and dumb components](https://jaketrent.com/post/smart-dumb-components-react/)

---

### Установить пакеты React (npm)(--save):
* react
* react-dom
                
### Пакеты сборщики JS кода нужные для ReactJS (npm)(--save-dev):
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react

### Сервер webpack'a если нужно, можно и php серв запускать [по желанию]
* webpack-dev-server
```json
// вот скрипты которые запускаю и сервер и компил js (content-base - папка в которой html)
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "npm run build",
  "build": "webpack -d && webpack-dev-server --content-base app/ --inline --hot --port 8000"
},
```


### Настройки вебпака для работы с ReactJS webpack.config.js
```js
// подключаем пути
var path = require('path');

module.exports = {

    // обозначаем входную точку
    entry: path.resolve(__dirname, 'app') + '/src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist') + '/app',
        path: path.resolve(__dirname, 'app') + '/dist/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },


    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'), // <!-- Path to ur js
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

```

### Делаем первый компонент
```js
//1. include REACT
var React    = require('react');
var ReactDOM = require('react-dom');


//2. Create component
var TodoComponent = React.createClass({

   // возвращает html код
   render: function(){
     return(
        <div>                 // если убрать div, то будет ошибка компила, так как все надо оборачивать в обертку
          <h1> Hello </h1>
          <p>asdas</p>
        </div>
     );
   }

});

//3. выводим компонент на страницу , в елемент id="todo-div"
ReactDOM.render(<TodoComponent />, document.getElementById('todo-div'));
```

### Подстановка данных в компонент (this.props)
```js
// TodoComponent
var TodoComponent = React.createClass({
   // inserting info
   render: function(){
     return(
        <div>
          <h1>{this.props.my_obj.name} {this.props.my_obj.surname} </h1>
          <p> {this.props.msg}</p>
        </div>
     );
   }
});

var persona = {name:'Joker', surname: 'Petrovich'};

ReactDOM.render(<TodoComponent msg='its me mario' my_obj={persona}/>,  document.getElementById('todo-div'));
```


### Подстановка данных в компонент (this.state)
```js
// TodoComponent
var TodoComponent = React.createClass({

  // init data
  getInitialState: function(){
    var data = {
          todos: ['wash up', 'eat', 'clean room', 'take a nap'],
    };

    return data;
  },

   // inserting info
   render: function(){
     return(
        <div>
          <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]}</li>
            <li>{this.state.todos[2]}</li>
            <li>{this.state.todos[3]}</li>
          </ul>

        </div>
     );
   }

});

ReactDOM.render(<TodoComponent/>,  document.getElementById('todo-div'));
```

### Изменение переменной (Changing state)
```js

// TodoComponent
var TodoComponent = React.createClass({

  // init data
  getInitialState: function(){
    var data = {
          todos: ['wash up', 'eat', 'clean room', 'take a nap'],
          age : 30,
          name: "gg"
    };

    return data;
  },

   // inserting info
   render: function(){

    var ager = setTimeout(function(){
        this.setState({
            age:35,
            name: 'Joker'
        });
    }.bind(this), 5000);

     return(
        <div>
          <h3>{this.state.age} {this.state.name}</h3>
          <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]}</li>
            <li>{this.state.todos[2]}</li>
            <li>{this.state.todos[3]}</li>
          </ul>
        </div>
     );
   }

});


ReactDOM.render(<TodoComponent/>,  document.getElementById('todo-div'));
```


### Цыкл для вывода данных (map function)
```js

// TodoComponent
var TodoComponent = React.createClass({

  // init data
  getInitialState: function(){
    var data = {
          todos: ['wash up', 'eat', 'clean room', 'take a nap'],
    };

    return data;
  },

   // inserting info
   render: function(){

    var todos = this.state.todos;                  // make todos local in render func
    todos     = todos.map(function(item, index){   // cycle
        return(
            <li> {item} </li>
        );
     });

     return(
        <div>
          <h3>{this.state.age} {this.state.name}</h3>
          <ul>
               {todos}
          </ul>
        </div>
     );
   }

});

ReactDOM.render(<TodoComponent/>,  document.getElementById('todo-div'));
```


### TodoList
```js

// TodoComponent
var TodoComponent = React.createClass({

  // иниц. данных
  getInitialState: function(){
    var data = {
          todos: ['wash up', 'eat', 'clean room', 'take a nap'],
    };
    return data;
  },

   // вывод данных
   render: function(){
    var todos = this.state.todos;                  // делаем перменную "todos" видимой для текущей функции
    todos     = todos.map(function(item, index){   // крутим данные
        return(
            // Вложенный component
            // ключ должен быть, так как он показывает на уникальность компонента,
            // так же это передача переменных в компонент, которые можно заюзать через this.props в компоненте
            <TodoItem item={item} key={index}/>
        );
     });

     // вывод на страницу
     return(
        <div>
          <h3>{this.state.age} {this.state.name}</h3>
          <ul>
               {todos}
          </ul>
        </div>
     );
   }
});


// TodoItem for TodoComponent
var TodoItem = React.createClass({
    // className == class в html, так как слово "class" зарезервировано в ReactJS
    render: function(){
       return(
          <li>
             <div className="todo-item">
                 <span className="item-name">{this.props.item}</span>
             </div>
          </li>
       );
    }


});

ReactDOM.render(<TodoComponent/>,  document.getElementById('todo-div'));
```

### Example 1 

```jsx
//  Import ReactJS requires
import React from 'react';
import ReactDOM from 'react-dom'

// Class(Component) todos
class Todos extends React.Component {

 constructor() {
     super();
     this.state = { age: 30 };   // Вот так иниц. переменные в классе

     // вот это говорит что надо передать в функцию "this" потому как автоматом оно не появиться в методе ))
     // так что если нужно использовать в методе "this", надо писать вот так
     this.clicked = this.clicked.bind(this);
  }

  /*
  *  Just click on me func
  *
  */
  clicked(){
      alert('gotIt');
      this.getTasks()
   };

   /*
   *  Get tasks from DB
   *
   */
   getTasks(){
      alert("U get tasks")
   }

  /*
  *  Render HTML
  *
  */
  render() {
    return (
      <div className="panel panel-default">
        <div  onClick={this.clicked} className="panel-heading">
            <h3  id="gg">Its todoList   Age: {this.state.age}</h3>
        </div>
        <div className="panel-body">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">{this.props.name}</span>
                Cras justo odio
              </li>
            </ul>
        </div>
      </div>
    );
  }

}


// RENDER IT
ReactDOM.render(<Todos name="Skavik"/>,  document.getElementById('todo-div'));
```


### Example 2

```jsx
// main.js
import React from 'react';
import ReactDOM from 'react-dom'
import SomeItem from './second.js'

// 2. Creating Component(class)
class ShoppingList extends React.Component {

  /*
  *  Just function
  *
  */
  clicked(){
      alert('Clicked');
   };

  /*
  *  Render HTML
  *
  */
  render() {
    return (
      <div className="shopping-list">
        <h1 onClick={this.clicked}>Shopping List for 123132{this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }

}

// 3. Render component
// ReactDOM.render(<TodoComponent/>,  document.getElementById('todo-div'));
ReactDOM.render(<ShoppingList name="gg"/>,  document.getElementById('todo-div'));
ReactDOM.render(<SomeItem/>,  document.getElementById('todo-div1'));
```

```jsx
// someitem.js
import React from 'react';

class SomeItem extends React.Component{

   say(){ return(<p>GGG</p>) }

   render(){
     return(
       <h2>It is SomeItem class {this.say}</h2>
     )
   }
}

export default SomeItem;

```



### Динамическое создание полей и привязка их к состоянию. Так же сбор и выдача полей 
### index.js
```js
import React, {Component} from 'react';
import ReactDOM           from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {value: [], count: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
     let value = this.state.value.slice();

     value[i] = event.target.value;

     console.log(value)

     this.setState({value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  addClick(){
    this.setState({count: this.state.count+1})
  }

  removeClick(i){
     let value = this.state.value.slice();
     value.splice(i,1);
     this.setState({
        count: this.state.count - 1,
        value
     })
  }

  createUI(){
     let uiItems = [];
     for(let i = 0; i < this.state.count; i++){
           uiItems.push(
               <div key={i}>
                   <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
                   <input type='button' value='remove' onClick={this.removeClick.bind(this,i)}/>
               </div>
            )
     }
     return uiItems || null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {this.createUI()}
          <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
          <input type="submit" value="Submit" />
         <input type="button" value="getState" onClick={() => alert(JSON.stringify(this.state))}/>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### page.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  </head>
  <body>

   <div id="root"></div>

   <script src="dist/bundle.js" charset="utf-8"></script>

  </body>
</html>

```

