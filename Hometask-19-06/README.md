> Copy `index.html` and `style.css` to your project
Include your script to `index.html` (to the end of `<body>` element)

## Task 1
Move the ball 15px to top and 15px right every time, when `#moveBallXY` is clicked  
Add 500ms delay for ball movement

> Change ball's `style.bottom` and `style.left`  
`style.bottom` and `style.left` require values with `px` units   
Ex. `ball.style.bottom = 50px`

## Task 2
Move the ball right every time, when `#moveBallX` value is changed


## Task 3
Required reading:  
[Form Events](https://javascript.info/events-change-input), [Form Submit](https://javascript.info/forms-submit)

Additional reading:  
[Form props and methods](https://javascript.info/form-elements), [Focus and blur](https://javascript.info/focus-blur)

Create validation for `#userForm`
Validation rules:
- fields `username` and `jobTitle` should contain string value (min. 3, max 20 characters)
- field `age` should be a number from 0 to 115

If the field has invalid value, add class `invalid` to this field