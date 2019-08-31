# React native
#### Содержание
[[toc]]

---

### 1. Функции с this
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