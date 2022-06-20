// const fs = require('fs');

// // // fs.writeFileSync("text.txt","Hello from MERN Class");

// // // fs.appendFileSync("text.txt","Today is Thursday")
// // const data = fs.readFileSync("text.txt","utf-8");
// // fs.renameSync("text.txt","info.txt")

// fs.mkdirSync("New Folder From Node");
// // console.log(data);


// const fs = require("fs");

// fs.mkdirSync("node-app");
// fs.writeFileSync("./node-app/details.txt","Hello from the writeFileSync side.");
// fs.appendFileSync("./node-app/details.txt","We are appending something.");
// const data = fs.readFileSync("./node-app/details.txt","utf-8");
// console.log(data);
// fs.renameSync("./node-app/details.txt","./node-app/myDetails.txt");

// fs.unlinkSync("./node-app/myDetails.txt");
// fs.rmdirSync("node-app");

const circle = require("./circle.js");

console.log(circle.calculateArea(5));
console.log(circle.calculatePerimeter(5));