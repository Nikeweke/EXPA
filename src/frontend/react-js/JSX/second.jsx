import React from 'react';
import ReactDOM from 'react-dom'


class SomeItem extends React.Component{


   say(){ return(<p>GGG</p>) }



   render(){
     return(
       <h2>It is SomeItem class {this.say}</h2>
     )
   }


}



export default SomeItem;
