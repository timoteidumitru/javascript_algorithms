class User {
  constructor(firstName) {
    this.firstName = firstName;
  }
  static getName() {
    return this.firstName;
  }
}

const newUser = new User("Jessie");

console.log(User.getName()); // will return undefined
