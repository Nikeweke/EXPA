## **Webpack Style** - to code React 

```js
//1. include REACT
var React    = require('react');
var ReactDOM = require('react-dom');


//2. Create component
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

// 3. Render it
ReactDOM.render(<TodoComponent msg='its me mario' my_obj={persona}/>,  document.getElementById('todo-div'));
```


