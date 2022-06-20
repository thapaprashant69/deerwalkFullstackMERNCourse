const fs = require("fs");                                           //Importing filesystem as "fs" for implementing methods
const path = require("path");                                       //Importing path as "path" for using in segregating file as per the extension

const fileSegrigate=(urlToFolder)=>{                                //Arrow function that accept provided folder as parameter
    const files=fs.readdirSync(urlToFolder,{withFileTypes:true});   //Importing all file and folder names of provided folder with file type
    const copyFiles = (folder,file)=>{                              //Arrow function that accepts folder and file name and copy them to folder(images/data/others)
        if(!fs.existsSync(`${urlToFolder}/${folder}`)){             //Checks whether the folder(images/data/others) exists
            fs.mkdirSync(`${urlToFolder}/${folder}`);               //Create folder(images/data/others) if they doesnot exist
        }
        fs.copyFileSync(`${urlToFolder}/${file.name}`,`${urlToFolder}/${folder}/${file.name}`);     //Copy files to respective folders as per file type
    }
    for(let file of files){
        if(file.isDirectory()) {                                    //Check if the item is file or folder and skip loop if it is folder
            continue;                                               //We dont need any action to folder
        }
        else if(path.extname(file.name)===".jpg" || path.extname(file.name)===".png"){              //Check if the file is image by extension ".jpg" and ".png"
            copyFiles("images",file);                                                               //Copy the images files to "images" folder
        }
        else if(path.extname(file.name)===".txt" || path.extname(file.name)===".pdf"){              //Check if the file is text by extension ".txt" and ".pdf"
            copyFiles("data",file);                                                                 //Copy the text files to "data" folder
        }
        else{                                                                                       //This block is for all other type of filenames
            copyFiles("others",file);                                                               //Copy the all other remaining files to "others" folder
        }
        fs.unlinkSync(`${urlToFolder}/${file.name}`);                                               //This code deletes the file from main provided directory
    }
}
fileSegrigate("C:/Users/ASUS/Downloads");                           //Function call with absolute path of folder as an argument


//Code below this is for getting back to previous meshed up style
//Code to reverse the previous setup

// const reversePreviousProcess = (urlToRootFolder)=>{
//     const moveFiles=(folder)=>{
//         const files = fs.readdirSync(`${urlToRootFolder}/${folder}`);        //Get all files from folder passed as argument
//         for(const file of files){
//             fs.copyFileSync(`${urlToRootFolder}/${folder}/${file}`,`${urlToRootFolder}/${file}`);    //Copy files from passed folder to root folder
//             fs.unlinkSync(`${urlToRootFolder}/${folder}/${file}`);                                   //Delete file from the previous folder
//         }
//         fs.rmdirSync(`${urlToRootFolder}/${folder}`);                                                //Delete passed folder
//     }  
//     //Function calls with folder-name inside Root folder
//     moveFiles("images");                                     
//     moveFiles("data");
//     moveFiles("others");
// }
// //Calling main reverse process function to get all files to root folder
// reversePreviousProcess("C:/Users/ASUS/Downloads");      