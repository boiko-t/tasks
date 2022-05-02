Reading materials:

- [Form Events](https://javascript.info/events-change-input)
- [Form Submit](https://javascript.info/forms-submit)
- [Form props and methods](https://javascript.info/form-elements)
- [Focus and blur](https://javascript.info/focus-blur)

## Task 1 - Popup

> Copy `index.html` and `style.css` to your project  
> Include your script to `index.html`

Add functionality to open and close popup.

- Click on `#openPopupButton` opens popup
- Click on `#closePopupButton` closes popup
- Click on Escape button closes popup

To open popup, add class `visible`

P.S. `event.key` equals `Escape` if this button is pressed

## Task 2 - Form

Create validation for `#userForm`
Validation rules:

- fields `username` and `jobTitle` should contain string value (min. 3, max 20 characters)
- field `age` should be a number from 0 to 115

If the field has invalid value, add class `invalid` to this field  
[Expected result](http://prntscr.com/t1hn8e)

## Task 3 - Ball (additional)

Move the ball right every time, when `#moveBallX` value is changed
Add 300ms delay for ball movement

> Change ball's `style.bottom` and `style.left`  
> `style.bottom` and `style.left` require values with `px` units  
> Ex. `ball.style.bottom = 50px`

## Task 4 - Todo

> Copy `todo.css` to your project and link this file to `todo.html`

Add events handling for html from your previous hometask:

- Click on `.state-icon` element changes todo object state and toggles class `completed` for `.todo` element
- Click on `.delete-icon` element deletes todo from array and DOM

> You can use [closest() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) to find parent element with class `.todo`

[Example of expected result here](http://prntscr.com/tnt88z)
