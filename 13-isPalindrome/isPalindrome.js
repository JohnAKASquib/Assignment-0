function isPalindrome(word) {
  if(word.length==1)
    return true;
  let startPos=0;
  let endPos=word.length-1;
  for(i=startPos;i<Math.floor(word.length/2);i++){
    if(word[i]!=word[endPos-i])
      return false;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;