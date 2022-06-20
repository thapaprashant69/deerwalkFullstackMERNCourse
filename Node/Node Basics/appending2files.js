const fs = require("fs");

fs.writeFile("a.txt","Hello,this is file A.",(err)=>{
    if(err) throw err;
    console.log("File A written successfully.");
    fs.readFile("a.txt","utf8",(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
    fs.writeFile("b.txt","Hello,this is file B.",(err)=>{
        if(err) throw err;
        console.log("File B written successfully.");
        fs.readFile("b.txt","utf8",(err,data)=>{
            if(err) throw err;
            console.log(data);
            fs.appendFile("a.txt",data,(err)=>{
                if(err) throw err;
                console.log("File A and B appended successfully.");
                fs.readFile("a.txt","utf8",(err,data)=>{
                    if(err) throw err;
                    console.log(data);
                })
            })
        })
    })
    
})









