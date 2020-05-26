function countOfAllBooleansAndStrings(arr) {
  let count=0;
  for(i=0;i<arr.length;i++){
    if(typeof arr[i]==typeof "str"||typeof arr[i]==typeof true)
        count++;
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;