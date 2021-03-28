## Additional reading:
- [Array](https://javascript.info/array)
- [Array Methods](https://javascript.info/array-methods)

Create script for the next tasks:

## Task 1
Tell if copying worked https://javascript.info/task/item-value

## Task 2
Array activities
1. Create an array styles with items "Jazz" and "Blues" =>
  ["Jazz", "Blues"]
2. Append “Rock-n-Roll” to the end =>
  ["Jazz", "Blues", "Rock-n-Roll"]
3. Replace the value in the middle by “Classics” =>
  ["Jazz", "Classics", "Rock-n-Roll"]
4. Prepend Rap and Reggae to the array =>
  ["Rap", "Reggae", "Jazz", "Classics", "Rock-n-Roll"]

## Task 3
Create a function getAverageAge(array)  
```
let array = [15, 60, 45, 30];  
let result = getAverageAge(array);  
console.log(result); // 37.5  
```
> you can use default data (don't use prompt for input)

## Task 4
Filter items from range  
Create a function `filterRange(array, min, max)`
```
let array = [5, 3, 8, 1];
let filtered = filterRange(array, 1, 4);

console.log(filtered); // 3, 1 (matching values)

console.log(array); // 5, 3, 8, 1 (not modified)
```

## Task 5 (additional)
Make the following actions with this array `['1', '2', '3', '4', '5', '6']`:  
1. Transform each item to number type (expected result `[1, 2, 3, 4, 5, 6]`)
2. Multiply each item by 3 (expected result `[3, 6, 9, 12, 15, 18]`)
3. Remove odd items (expected result `[6, 12, 18]`)
4. Multiply all items (expected result `1296`)  
> Use arrow functions for callbacks

