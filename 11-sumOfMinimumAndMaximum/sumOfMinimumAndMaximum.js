function sumOfMinimumAndMaximum(nums) {
  let max=0;
  let min=nums[0];
  for(i=0;i<nums.length;i++){
    if(max<nums[i])
      max=nums[i];
    if(min>nums[i])
      min=nums[i];
  }
  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;