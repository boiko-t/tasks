## Task 0
Read more information about Scope:  
- [ENG](https://javascript.info/closure)  
- [RU](https://learn.javascript.ru/closure)


## Task 1
[Answer the question](https://javascript.info/task/closure-latest-changes) 

## Task 2
Filter through function
Create function `isInBetween` wich returns `bool` value and completes this code:  
```
// code for isInBetween

let array = [1, 2, 3, 4, 5, 6, 7];
arr.filter(isInBetween(3, 6))
```

## Task 3
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

## Task 4
Fix the code
```
const user = { name: 'Ann', age: 54 };
const user2 = user;
user2.age = 40;

user2.sayHi = () => console.log(`Hi from ${this.name}`);

let userAges = [user, user2].map(item => it.age);
const oldestUserAge = Math.max(userAges);
```
