## Task 0
Read more information about Scope:  
- [ENG](https://javascript.info/closure)  
- [RU](https://learn.javascript.ru/closure)


## Task 1
[Answer the question](https://javascript.info/task/closure-latest-changes) 

## Task 2
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

addTodo(2, 2, 'Todo Item 2', true);
// todos:
  [
    { userId: 1, id: 1, title: "Todo Item 1", completed: false },
    { userId: 2, id: 2, title: "Todo Item 2", completed: true }
  ]

setTodoState(1, true);
// todos:
  [
    { userId: 1, id: 1, title: "Todo Item 1", completed: true },
    { userId: 2, id: 2, title: "Todo Item 2", completed: true }
  ]
  
deleteTodo(1);
// todos:
  [{ userId: 2, id: 2, title: "Todo Item 2", completed: true }]
```

