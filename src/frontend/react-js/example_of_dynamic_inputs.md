## Динамическое создание полей и привязка их к состоянию. Так же сбор и выдача полей 

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
