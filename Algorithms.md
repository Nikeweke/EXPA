# Algorithms

> * https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms
> * https://www.geeksforgeeks.org/fundamentals-of-algorithms/#AnalysisofAlgorithms



### Linear search
Проверяем каждое значение из массива по порядку с искомым

```js
const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
const x = 110;

for (let i=0; i <= arr.length; i++ ) {
	if (arr[i] !== x ) continue
  console.log(i) // 6 - iterations
  break;
}
```

### Binary search
Массив должен быть отсортирован. Берем значение по средине из массива и сравниваем с искомым, если оно больше - берем правую часть, если меньше - левую. 
И так пока не найдем искомый элемент


```js
const arr = [20, 80, 10, 130,  30, 60, 50, 110, 100, 80, 170, 200, 20, 80, 10, 130,  30, 60, 50, 20, 80, 10, 130,  30, 60, 50, 20, 80, 10, 130,  30, 60, 50]

// array must be sorted for binary search
const sortedArr = arr.sort((a, b) => a - b)
const x = 110;

binarySearch(arr, x, true)

function binarySearch(arr, x, iteration) {
	iteration++
	const arrLen = arr.length
  const arrHalf = Math.floor(arrLen/2)
  const middleValue = arr[arrHalf]
  let slicedArr

  // take right part
  if (x === middleValue) {
		console.log('Found it - ', x, iteration)
    return 
	}
  if (x > middleValue) {
  	slicedArr = arr.slice(arrHalf, arrLen)
    
  // take left part  
  } else {
  	slicedArr = arr.slice(0, arrHalf)
  }
	
  binarySearch(slicedArr, x, iteration)
}

```
