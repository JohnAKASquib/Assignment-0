function productOfAnyAmountOfNumbers(...args) {
  let prod=args[0]*args[1];
  for(i=2;i<args.length;i++){
    prod*=args[i];
  }
  return prod;
}
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;