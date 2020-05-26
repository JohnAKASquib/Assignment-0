function fizzBuzz(start, end) {
  index=0
  arr= new Array((end-start)+1);
  for(i=start;i<=end;i++){
    if((i)%3==0&&(i)%5==0)
      arr[index++]='FizzBuzz';
    else if((i)%3==0)
      arr[index++]='Fizz';
    else if((i)%5==0)
      arr[index++]='Buzz';
    else
      arr[index++]=i;
  }
  return arr;
}
// Do not edit this line;
module.exports = fizzBuzz;