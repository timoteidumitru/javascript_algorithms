class User {
  constructor(firstName) {
    this.firstName = firstName;
  }
  // static getName() { // cus is a static method, that's why return undefined
  getName() { // this will return desired result
    return this.firstName;
  }
}

const newUser = new User("Jessie");

// console.log(User.getName()); // will return undefined -> cus is calling User class instead of newUser constant
console.log(newUser.getName()); // this will return the desired result

