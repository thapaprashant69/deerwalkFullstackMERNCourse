const fs = require("fs");

fs.writeFile("text.txt","Hello from MERN stack.",()=>{
    console.log("Data write in file action completed");
    fs.readFile("text.txt","utf-8",(err,data)=>
{
    console.log("Read file completed");
    console.log(data);
    fs.appendFile("text.txt","We are appending the file.",()=>{
        console.log("Text file appended");
        fs.rename("text.txt","texts.txt",()=>{
            console.log("Rename completed");
        });
    });
});
});





// console.log(textData);

