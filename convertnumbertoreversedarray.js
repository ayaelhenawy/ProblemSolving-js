function digitize(n) {
    //code here

    return n.toString().split("").map((ele)=>Number(ele)).reverse()
  }
  console.log(digitize(1234))