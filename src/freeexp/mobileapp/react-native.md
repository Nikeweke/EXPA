## ReactNATIVE-Todolist

### Install react native client
#### `npm i -g react-native-cli`

### New project
#### `react-native init myApp`

### Emulate/run
#### `react-native run-android`


### Build
#### `start build.bat`


### Как использовать другие иконки в native base 
кроме стандартных,  там их дают 9 наборов
```js
import {Component, /*Icon*/} from 'native-base'; // <!--- вот отсюда убрать Icon
import Icon from 'react-native-vector-icons/FontAwesome';
<Icon   name='check'  />
```

---

### Problems & Resolves

##### 1. Функции с this
```js
// # 1 вариант через конструктор - лучше всего использовать этот вариант
constructor(){
   super();
   this.Say = this.Say.bind(this)    
}
// Вот это функция нуждаеться в передаче сюда this в конструкторе
 Say(){
    return this.setState({ name: 'The state is updated' })
 }

// # 2 вариант через стрелкочную ф-цию
// а вот эта нет, такая ф-ция автоматом ставит this в себя. И тогда не нужно юзать this.addTask    = this.addTask.bind(this)
 Say = () => {
     this.setState({ name: 'The state is updated' });
 }
```
