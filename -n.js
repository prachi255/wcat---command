// //implementing -n command
// //gives numbering to all the lines

function addcount_1(contentArr)
  {
 
  for(let i=0;i<contentArr.length;i++){
    
    contentArr[i]=(i+1) + " " + contentArr[i];
  }
  }

  module.exports={
    adc_1:addcount_1
  }

