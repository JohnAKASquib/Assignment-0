class MySolution {
  constructor(){
    this.sum=0;
  }
  countDownSum(num) {
    if(num-1==0){
      this.sum=0;
      return num+this.sum;
    }
   this.sum=this.countDownSum(num-1);
    return num+this.sum;
    //console.log(sum)
  }
}
sol = new MySolution();
sol.countDownSum(5)
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;