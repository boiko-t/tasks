## Task 1
> Copy `index.html` and `style.css` to your project  
Include your script to `index.html`

Add functionality to open and close popup.  
-  Click on `#openPopupButton` opens popup
- Click on `#closePopupButton` closes popup
- Click on Escape button closes popup

To open popup, add class `visible`

P.S. `event.key` equals `Escape` if this button is pressed

## Task 2
> Copy `todo.html` to your project  
Include your script from Hometask07 to `todo.html`

- Create script which will render DOM from your todo data (`todos` array)

Todo markup:
```
<div class="todo" id="todo-ID">
  <div class="todo-container">
    <p class="title">Todo Title</p>
    <span class="delete-icon"></span>
  </div>
  <div class="todo-container">
    <span class="user-id">User User-ID</span>
    <span class="state-icon"></span>
  </div>
</div>
```

`ID`, `Todo Title` and `User-ID` are inserted from array (data is unique for every todo object)

- Click on `.state-icon` element changes todo object state and toggles class `completed` for `.todo` element

- Click on `.delete-icon` element deletes todo from array and DOM

> You can use [closest() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) to find parent element with class `.todo`

[Example of expected result here](http://prntscr.com/tnt88z)
