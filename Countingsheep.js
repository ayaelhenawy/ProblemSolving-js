function countSheeps(sheep) {
    // TODO
    if(sheep==null) return 0;
    return sheep.filter((ele)=>ele!=null).map((ele)=>Number(ele)).reduce((sum,ele)=>sum+ele,0)
    }