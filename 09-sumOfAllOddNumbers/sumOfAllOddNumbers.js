function sumOfAllOddNumbers(nums) {
  let count=0;
  for (i=0;i<nums.length;i++)
    if(nums[i]==1||nums[i]%2==1)
      count++;
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;