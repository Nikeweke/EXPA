# ES 6,7,8
```js
let employee = {
    // Name: 'asdasd'
}
// var employeeName = (employee.Name != null ? employee.Name : "Unknown"); 
var employeeName = employee.Name || "Unknown"; // php analog: $var ?? null
console.log(employeeName)

// ES6 Includes 
const arr = [1, 2, 3, NaN]
if (arr.includes(3)) {
  console.log('here')
}

// ES 7 Math pow
let rez = 7**2
console.log(rez)

// ES 7 Object.values
const cars = {BWW: 3, Tesla: 2}
let values = Object.values(cars)
console.log(values)

// ES 8
let user = {
    name: 'Alex',
    surname: 'Brandon',
    age: 23
}
let {name, ...other} = user 
console.log(name, other) 


async function tester() {
    let promise = await new Promise((r,j) => {
        setTimeout(() => {
          r('ss')
        }, 2000)
    })
}
```