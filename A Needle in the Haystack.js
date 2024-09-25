function findNeedle(haystack) {
    // your code here
    return "found the needle at position "+haystack.indexOf('needle')
  }
let arr=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] 

console.log(findNeedle(arr))