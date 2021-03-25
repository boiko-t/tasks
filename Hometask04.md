Create script for the next tasks:

## Task 1
Write a function pow(x, n) that returns x in power n.  
Create 2 solutions:
  - with operator **
  - with loop
> Example 1  
pow(2, 3) => 8  
pow(5, 4) => 625  

## Task 2
Write a function min(a, b) which returns the least of two numbers a and b.
> Example 1  
min(2, 3) => 2  
min(1, -5) => -5

## Task 3
Write a function max(a, b) which returns the greater of two numbers a and b.
> Example:  
max(4, 10) => 10  
max(-8, 0) => 0  

## Task 4
Rewrite paramenters for ask function as arrow functions. See [the screenshot](https://prnt.sc/10vfh48)   
```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

## Task 5
Write a function log(message, logger)  
Parameter logger should have default value console.log
> Example:  
log('Hello!', console.warn) // warning 'Hello!' is logged to console

## Task 6
Rewrite function `showMessage` to the self-calling:  
```
function showMessage(message) {
  console.log(message);
}
```
