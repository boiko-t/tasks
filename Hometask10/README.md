> Copy `index.html` and `style.css` to your project
Include your script to `index.html` (to the end of `<body>` element)

Required reading:  
[Form Events](https://javascript.info/events-change-input), [Form Submit](https://javascript.info/forms-submit)  
[Promise](https://javascript.info/promise-basics)   
[Fetch](https://javascript.info/fetch)

Additional reading:  
[Form props and methods](https://javascript.info/form-elements), [Focus and blur](https://javascript.info/focus-blur)

## Task 0
Log message `Hello!` to the console every 0.5 seconds.  
After 5 seconds stop this logging 

## Task 1
Create validation for `#userForm`
Validation rules:
- fields `username` and `jobTitle` should contain string value (min. 3, max 20 characters)
- field `age` should be a number from 0 to 115

If the field has invalid value, add class `invalid` to this field  
[Expected result](http://prntscr.com/t1hn8e)

## Task 2
Load todos from https://jsonplaceholder.typicode.com/todos/ to todos array    
Add 20 todos to markup  
Add button to `todo.html`:  
```
<button type="button" id="loadTodos">Load more todos</button>
```
On `#loadTodos` add 20 more todos to markup  

## Task 3 (additional)
Move the ball right every time, when `#moveBallX` value is changed
Add 300ms delay for ball movement

> Change ball's `style.bottom` and `style.left`  
`style.bottom` and `style.left` require values with `px` units   
Ex. `ball.style.bottom = 50px`
