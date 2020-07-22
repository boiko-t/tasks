## Task 0
Read more information about Scope:  
- [ENG](https://javascript.info/closure)  
- [RU](https://learn.javascript.ru/closure)


## Task 1
[Answer the question](https://javascript.info/task/closure-latest-changes) 

## Task 2
Rewrite function `showMessage` to the self-calling:  
```
function showUserInfo(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  function showMessage() {
  	console.log(fullName);
  }

  showMessage();
}
```

## Task 3
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
