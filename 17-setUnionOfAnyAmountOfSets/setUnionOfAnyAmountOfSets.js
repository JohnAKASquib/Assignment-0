function setUnionOfAnyAmountOfSets(...args) {
  let size=0;
  let earlyLeave=false;
  theSet = new Set();
  for(i=0;i<args.length;i++){
    for(j=0;j<args[i].length;j++){
      if(size==0){
        theSet.add(args[0][0]);
        size++;
      }
      else{
        earlyLeave=false;
        for(k=0;k<size;k++){
          if(theSet[k]==args[i][j]){
            earlyLeave=true;
            break;
          }
        }
        if(earlyLeave==false){
          theSet.add(args[i][j]);
          size++;
        }
      }
    }
  }
  //console.log(theSet); 
  return theSet;
}
//setUnionOfAnyAmountOfSets([1,2,3],[4,5,6],[7,8,9],[10,11,3]);
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;