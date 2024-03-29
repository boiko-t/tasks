## Task 1
Fix the code
```
(function() {
  console.info('init...');
});

const user = { name: 'Ann', age: 54 };
const user2 = user;
user2.age = 40;

user2.sayHi = () => console.log(`Hi from ${this.name}`);
user2.sayHi();

let userAges = [user, user2].map(item => it.age);
const oldestUserAge = Math.max(userAges);
console.log(oldestUserAge);
```

*Expected result in console:*  
```
init...  
Hi from Ann  
54    
```

## Task 2
In `index.html` create HTML markup:
- div element with class `container`
- h1 element inside `.container` with text 'Hello'
- p element inside `.container` with text 'This is a text paragraph'

## Task 3
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
  setTodoState changes field `completed` for specific todo object
  
- Test functions in console

> Example 
```
let todos = [
  {
    userId: 1,
    id: 548,
    title: "Todo Item 1",
    completed: false
  }
];

addTodo(888, 2, 'Todo Item 2', true);
// todos:
  [
    { userId: 1, id: 548, title: "Todo Item 1", completed: false },
    { userId: 2, id: 888, title: "Todo Item 2", completed: true }
  ]

setTodoState(548, true);
// todos:
  [
    { userId: 1, id: 548, title: "Todo Item 1", completed: true },
    { userId: 2, id: 888, title: "Todo Item 2", completed: true }
  ]
  
deleteTodo(548);
// todos:
  [{ userId: 2, id: 888, title: "Todo Item 2", completed: true }]
```

