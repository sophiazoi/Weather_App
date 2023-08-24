// // store data in local storage
// localStorage.setItem("name", "mario");
// localStorage.setItem("age", 50);

// // get data from local storage
// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name, age);

// // updating data
// localStorage.setItem("name", "luigi");
// localStorage.age = "40";

// name = localStorage.getItem("name");
// age = localStorage.getItem("age");
// console.log(name, age);

// // deleting data from local storage
// localStorage.removeItem("name"); // for single
// localStorage.clear(); // for all items

const todos = [
  { text: "play mariokart", author: "shaun" },
  { text: "buy some milk", author: "milk" },
  { text: "buy some bread", author: "luigi" },
];

//console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(JSON.parse(stored));
