const fs = require("fs")
function ownCopyFile( copyType , srcContent , destFile){
    // file1 > file2 => put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist.
    if(copyType=='>'){
        
          fs.writeFile(destFile, srcContent, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
          });
                  
    }

    else{
        fs.appendFile(destFile, "\n"+srcContent, (err) => {
            if (err) {
              console.log(err);
            }
          
          });
          }
}
module.exports={
    cFO:ownCopyFile
  }