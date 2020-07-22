> Copy `index.html` and `style.css` to your project
Include your script to `index.html`

## Task 1
Add inline style to even children inside `grid-1`.  
Inline style property `background` with value `#aff0ad`

## Task 2
Add class `grid-item-background` to odd children inside `grid-1`. 

_[Task 1 and 2 expected result](http://prntscr.com/syhfwk)_

## Task 3
Read text from prompt and add this text to element `.text-placeholder`  
To insert text use:  
```
element.innerText = 'Some text';
```
If the text contains substring '1', add class `numeric` to the `.text-placeholder` element

_[Task 4 expected result](http://prntscr.com/syhq2g)_


## Task 4
- Create file `todo.js` and `todo.html`, include script to HTML file.  
- Create array of 5 todo objects with random data.  
Todo Object fields: `userId`, `id`, `title`, `completed`.   
Example:   
```
{
  userId: 1,
  id: 1,
  title: "Todo Item 1",
  completed: false
}
```

- Create function `addTodo(userId, id, title, completed)`  
  addTodo ads new todo object to array

- Create function `deleteTodo(id)`  
  deleteTodo deletes todo object with specific id from array

- Create function `setTodoState(id, state)`  
  setTodoState changes field completed for specific todo object