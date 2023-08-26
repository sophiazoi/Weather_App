// const userOne = {
//   username: "ryu",
//   email: "ryu@thenetninja.co.uk",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

// const userTwo = {
//   username: "chun li",
//   email: "chun.li@thenetninja.co.uk",
//   login() {
//     console.log("the user logged in");
//   },
//   logout() {
//     console.log("the user logged out");
//   },
// };

// console.log(userTwo.email, userTwo.username);
// userTwo.login();

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((u) => u.username !== user.username);
//   }
// }

// const userOne = new User("mario", "mario@thenetninja.co.uk");
// const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
// const userThree = new Admin(
//   "shaun",
//   "shaun@thenetninja.co.uk",
//   "black-belt-ninja"
// );

// console.log(userThree);

// userOne.login().incScore().incScore().logout();

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email, title);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function () {
  // delete a user
};

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//   }
// }

const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin(
  "shaun",
  "shaun@thenetninja.co.uk",
  "black-belt-ninja"
);

console.log(userOne, userTwo, userThree);
userOne.login().logout();
