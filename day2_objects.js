// const person = {
//   name: "Yami",
//   age: 25,
//   city: "Ahmedabad"
// };

// console.log(person.name); // Yami
// console.log(person["age"]); // 25
// person.job = "Engineer";
// console.log(person.job); // Engineer
// delete person.city;
// console.log(person); // { name: 'Yami', age: 25, job: 'Engineer' }

// for (const key in person) {
//   console.log(key, person[key]);
// }

// const user = {
//   name: "Yami",
//   sayHi() {
//     return `Hi, I'm ${this.name}`;
//   }
// };
// user.sayHi();            // "Hi, I'm Yami"


// Practice
const double = x => x*2;
console.log(double(5));  // 10

function isAdult(age){
    if (age >= 18) {
        return true;
    }
    else{
        return false;
    }
}
console.log(isAdult(20));  // true

const book ={
    title: "Harry Potter",
    author: "J.K. Rowling",
}
book.pages = 500;
console.log(book);  // { title: 'Harry Potter', author: 'J.K. Rowling', pages: 500 }