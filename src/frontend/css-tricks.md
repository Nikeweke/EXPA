# CSS tricks
#### Содержание
[[toc]]

--- 

### XMAS Lights

###### css
```css
#wire{
text-align: center;
white-space: nowrap;
position: absolute;
padding: 0;
width: 100%;
top: -80px;
border-bottom: 3px solid #222;
height: 100px;
}


#wire li{
  position: relative;
  list-style: none;
  margin: 0 15px;
  padding: 0;
  display: inline-block;
  width: 15px;
  height: 30px;
  border-radius: 50%;
  top:102px;
  background: #fff;

  animation-name: even-flash;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

#wire li:nth-child(odd){
  animation-name: odd-flash;
}

#wire li:before{
  content: "";
  position: absolute;
  width: 14px;
  height: 10px;
  border-radius: 4px;
  top:-5px;
  left:0;
  background: #444;
}


@keyframes even-flash {
  0%, 100%{
    background: rgba(255, 230,  65, 1);
    box-shadow: 0px 2px 20px 4px rgba(255, 230, 65, 1);
  }

  50%{
    background: rgba(255, 230,  65, 0.5);
    box-shadow: 0px 2px 20px 4px rgba(255, 230, 65, 0.3);
  }
}



@keyframes odd-flash {
  50%{
    background: rgba(255, 65, 185, 1);
    box-shadow: 0px 2px 20px 4px rgba(255, 65, 185, 1);
  }

  0%, 100%{
    background: rgba(255, 65,  185, 0.5);
    box-shadow: 0px 2px 20px 4px rgba(255, 65, 185, 0.3);
  }
}
```
##### html
```html
  <ul  id="wire">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
```

### Sound effects 
```javascript
  function playPause(x) {
            var myAudio=document.getElementById(x);
            myAudio.currentTime=0;
            myAudio.play();
       }
```

```html
<audio id="click_04.wav"><source src="/css/sounds/click_04.wav"></audio>
<button class="square width-fixed" onmousedown="playPause('click_04.wav')">click_04</button>
```
