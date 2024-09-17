
let arr=[1,2,-3,4];
function SumOfPositives(arr){
    return arr.filter((ele)=>ele>0).reduce((curr,ele,)=>curr+ele,0);
}

console.log(SumOfPositives(arr));