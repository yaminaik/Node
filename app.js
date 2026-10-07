const  add  = require("./math");

console.log(add(2, 3));

const fs = require("fs");

fs.writeFileSync("note.txt", "Learning Node");
console.log(fs.readFileSync("note.txt", "utf8"));