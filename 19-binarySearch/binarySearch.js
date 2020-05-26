class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    if(nums.length<=1)
      if(nums[0]==target)
        return true;
      else
        return false;
    let min=0;
    let max=nums.length-1;
    var mid=Math.floor((max+min)/2);
    var splitArray;
    if(nums[mid]==target)
      return true;
    else if(nums[mid]<target){
        splitArray=nums.slice(mid+1,nums.length)
        return this.binarySearch(splitArray,target);
    }
    else{
      splitArray=nums.slice(0,mid);
      return this.binarySearch(splitArray,target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;