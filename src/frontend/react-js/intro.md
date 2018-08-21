## React.js

### Useful links

* [Tutorial](https://www.tutorialspoint.com/reactjs/reactjs_keys.htm)
* [MaterialDesign](http://www.material-ui.com/#/get-started/installation)
* [React Bootstrap](https://react-bootstrap.github.io/introduction.html)

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
