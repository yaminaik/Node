const name = "Yami";
let year = 2026;
console.log(`Hello ${name}, it's ${year}`);

console.log(typeof 42, typeof "hi", typeof null, typeof undefined);
console.log(5 == "5", 5 === "5");
console.log("5" + 3, "5" - 3);
console.log(Number("12px"), parseInt("12px"));
console.log(Boolean(""), Boolean("0"), Boolean([]));
console.log(10 / 3, Math.floor(10 / 3), 10 % 3);

let marks = 72;
console.log(marks >= 60 ? "pass" : "fail");

// logical operators
console.log(true && false, true || false, !true);
console.log("" || "Guest");        // Guest
console.log(null ?? "default");    // default

// if / else if / else
let score = 72;
if (score >= 90) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else {
  console.log("C");
}