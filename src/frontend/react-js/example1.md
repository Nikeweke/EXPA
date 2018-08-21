# Example 1 

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
