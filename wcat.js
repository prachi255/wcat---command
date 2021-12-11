const fs = require("fs")
const sObj=require('./commands/-s')
const nObj=require('./commands/-n')
const bObj=require('./commands/-b')
const copyFileObj=require('./commands/copy_file')

let inputArr=process.argv.slice(2)

//commandsArr will contain all the commands
let commandsArr=[]
//fileNameArr will contain all the file names
let filesArr=[]

//one by one inserting commands to commandsArr and files to fileArr
for(let i=0;i<inputArr.length;i++){
if(inputArr[i].charAt(0)=='-' || inputArr[i]=='>' || inputArr[i]=='>>'){
    commandsArr.push(inputArr[i])
}

else{
    filesArr.push(inputArr[i])
}
}
// 1st edge case
// checking if command -b and -n are not together because exists together
if(commandsArr.includes('-b') && commandsArr.includes('-n')){
    console.log(`ERROR:
    WRONG SET OF COMMANDS ENTERED:
    Enter either -n or -b command`)
    return;
}


//2nd edge case
// checking if all the file exists or not
for(let i=0;i<filesArr.length;i++){

    if(!fs.existsSync(filesArr[i]) ){
         if(commandsArr.includes('>') || commandsArr.includes('>>')){
             continue
         }
         else{
          console.log(`ERROR:
          ENTER A VALID FILE NAME`)
          return
         }      
      }
  }

if(!commandsArr.includes('>') && !commandsArr.includes('>>')){
    
// reading contents of given files

// empty string initialized to store content of the files 
let contentOfEachFile = "";
for(let i=0; i < filesArr.length; i++)
{
  if(!fs.existsSync(filesArr[i])){
      continue
  }
 //They're different characters. \r is carriage return, and \n is line feed. On "old" printers, \r sent the print head back to the start of the line, and \n advanced the paper by  one line.
    contentOfEachFile+= fs.readFileSync(filesArr[i])+"\r\n";
}

//The split() function is a string function of Node.js which is used to split string into sub-strings. This function returns the output in array form.
let contentArr = contentOfEachFile.split("\r\n");

// implementing -s command
//It converts big line breaks into a singular line break ✔

if(commandsArr.includes('-s')){
    sObj.rlb(contentArr)
}
//implementing -n command
//gives numbering to all the lines

if(commandsArr.includes('-n')){
nObj.adc_1(contentArr)
}

 //implementing -b command
 //give numbering to non-empty lines 

 if(commandsArr.includes('-b'))
 {
bObj.adc_2(contentArr)
 }

//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
console.log(contentArr.join("\n"))

  return
}

//for inserting file contents from one into another
let srcContent=""

let srcContentArray=[]

// file1 > file2 => put all the content of file1 into file2 by overriding and also creates filename2 if it doesn't exist.

//  file1 >> file2 => append all the content of file1 into file2

//  -s file1 > file2 =>get the file content of file1 remove large spaces and save the output in file2


if(commandsArr.includes('>') || commandsArr.includes('>>')){

    for(let i=1;i<inputArr.length-1;i++){
       
    if(inputArr[i]=='>' || inputArr[i]=='>>'){
        srcContent+=fs.readFileSync(inputArr[i-1])
    
// if commandsArr includes both (-s,-n/-b) && (>/>>)
 if(commandsArr.includes('-s') || commandsArr.includes('-n') || commandsArr.includes('-b'))
 {
    srcContentArray = srcContent.split("\r\n")


if(commandsArr.includes('-s')){
    sObj.rlb(srcContentArray)
}


if(commandsArr.includes('-n')){
nObj.adc_1(srcContentArray)
}



 if(commandsArr.includes('-b'))
 {
bObj.adc_2(srcContentArray)
 }

srcContent=srcContentArray.join("\n")
}
        copyFileObj.cFO(inputArr[i],srcContent,inputArr[i+1])
                                              }

    }
    return
}

// 










