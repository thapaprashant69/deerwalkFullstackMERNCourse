const fs = require("fs");
const path = require("path");

// const fileNames = fs.readdirSync("C:/Users/ASUS/Downloads/",{withFileTypes:true});


// for(const file of fileNames){
//     // console.log(path.extname(file));
//     //console.log(file);
//     if(file.isFile()){
//     console.log(path.extname(file.name));
//     console.log(file.name);
//     }
// }
//const path1="C:/Users/ASUS/Downloads/14.Peaks.Nothing.Is.Impossible.2021.1080p.WEBRip.x264-RARBG";

//console.log(path.extname(path1))

const reversePreviousProcess = (urlToRootFolder)=>{
    const moveFiles=(urlToRootFolder,folder)=>{
        const files = fs.readdirSync(`${urlToRootFolder}/${folder}`);
        for(const file of files){
            fs.copyFileSync(`${urlToRootFolder}/${folder}/${file}`,`${urlToRootFolder}/${file}`);
            fs.unlinkSync(`${urlToRootFolder}/${folder}/${file}`);
        }
        fs.rmdirSync(`${urlToRootFolder}/${folder}`);
    }

    moveFiles(urlToRootFolder,"images");
    moveFiles(urlToRootFolder,"data");
    moveFiles(urlToRootFolder,"others");
}

reversePreviousProcess("C:/Users/ASUS/Downloads");