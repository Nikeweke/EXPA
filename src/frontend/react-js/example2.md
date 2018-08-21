# Example 2

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