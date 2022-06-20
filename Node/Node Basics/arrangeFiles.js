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
        console.log(file);
        if(file.isDirectory()) {                                    //Check if the item is file or folder and skip loop if it is folder
            fileSegrigate(`${urlToFolder}/${file.name}`)
            continue;                                               //We dont need any action to folder
        }
        else if(path.extname(file.name)===".jpg" || path.extname(file.name)===".png"){              //Check if the file is image by extension ".jpg" and ".png"
            copyFiles("Images",file);                                                               //Copy the images files to "images" folder
        }
        else if(path.extname(file.name)===".txt" || path.extname(file.name)===".pdf"){              //Check if the file is text by extension ".txt" and ".pdf"
            copyFiles("Data",file);                                                                 //Copy the text files to "data" folder
        }
        else{                                                                                       //This block is for all other type of filenames
            copyFiles("Others",file);                                                               //Copy the all other remaining files to "others" folder
        }
        fs.unlinkSync(`${urlToFolder}/${file.name}`);                                               //This code deletes the file from main provided directory
    }
}
fileSegrigate("C:/Users/ASUS/Documents/React");                           //Function call with absolute path of folder as an argument
