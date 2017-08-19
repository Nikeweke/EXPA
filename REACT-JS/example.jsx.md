## Простой пример ReactJS

```jsx

//  Import ReactJS requires
import React from 'react';
import ReactDOM from 'react-dom'


//  Exporting and init class(Component) Todos
// export default class Todos extends React.Component {

// Class(Component) todos
class Todos extends React.Component {

  /*
  *  VARS of CLASS
  *
  */
  constructor() {
     super();
     this.state = { age: 30 };

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
     $.ajax({
               type: 'POST',
               async: true,
               url: '/tasker.class.php',
             //  dataType: 'json',
               data : {'get_tasks': 1},
               success: function(data) {

                  console.log(data);

              },
              error: function (xhr, ajaxOptions, thrownError){
                alert(xhr.status);  alert(thrownError);
             }
      })
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
