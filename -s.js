// // implementing -s command
// //It converts big line breaks into a singular line break ✔

function removeLineBreak(contentArr)
{
    // inserting null character at line breaks
for(let i=0;i<contentArr.length-1;i++)
{
    if(contentArr[i]=='' && contentArr[i+1]==''){
        contentArr[i+1] = null;
    }
    if(contentArr[i]==null && contentArr[i+1]==''){
        contentArr[i+1] = null;
    }
}
//removing line breaks in the content array
for(let i=0;i<contentArr.length;i++)
{
    if(contentArr[i]==null ){
        contentArr.splice(i,1);
        i--;
    }
    
}
}

 module.exports ={
      rlb:removeLineBreak
  }