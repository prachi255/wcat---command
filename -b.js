// //implementing -b command
// //give numbering to non-empty lines 
let count=1
function addcount_2(contentArr){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i].charAt(0)!='')
        {
        contentArr[i]=count + " " + contentArr[i];
        count++;
      }

}
}

module.exports={
    adc_2:addcount_2
  }