
let arr=[1,2,-3,4];
function SumOfPositives(arr){
    return arr.filter((ele)=>ele>0).reduce((sum,ele,)=>sum+ele,0);  //sum=0
}

console.log(SumOfPositives(arr));