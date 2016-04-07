function Frame(roll1, roll2){
  this.roll1 = roll1;
  this.roll2 = roll2;
  this.bonus = "none"
}
Frame.prototype.tally = function() {
  var score = (this.roll1 + this.roll2);

  if (this.roll1 === 10) {
    this.bonus = "strike";
  } else if (this.roll1 + this.roll2 === 10) {
    this.bonus = "spare";
   }
   return score;
}
