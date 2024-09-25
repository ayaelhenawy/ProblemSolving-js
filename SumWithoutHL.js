
function sumArray(array) {
    if(array==null) return 0;
   return array.sort((a,b)=>a-b).slice(1,-1).reduce((sum,ele)=>sum+ele,0)
  }
