function frequencyCounter(word) {
  earlyLeave=false;
  letters =new Array();
  frequencies=new Array();
  var joinedObject={};
  for(i=0;i<word.length;i++){
    if(i==0){
      letters[0]=word[0];
      frequencies[0]=1;
    }
    else{
      for(j=0;j<letters.length;j++){
        earlyLeave=false;
        if(letters[j]==word[i]){
          frequencies[j]++;
          earlyLeave=true;
          break;
        }
      }
      if(earlyLeave==false){
        letters[j]=word[i];
        frequencies[j]=1;
      }
    }
  }
  for(i=0;i<letters.length;i++){
    joinedObject[letters[i]]=frequencies[i];
  }
 return joinedObject;
}
// Do not edit this line;
module.exports = frequencyCounter;