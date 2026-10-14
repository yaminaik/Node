function greet(name="Guest") {
    console.log(`Hello ${name}`);
}

greet("Yami");


const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));   // 20

const multiple = (a,b) => a*b;
console.log(multiple(4, 5));   // 20