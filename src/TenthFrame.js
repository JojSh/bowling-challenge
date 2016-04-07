function TenthFrame(roll1, roll2, roll3) {

  this.roll1 = roll1;
  this.roll2 = roll2;
  this.roll3 = roll3;

}

TenthFrame.prototype.tally = function() {
  var score = (this.roll1 + this.roll2);

  if (score < 10) {
    this.roll3 = null    
  } else {
    score = score+this.roll3
  }
  return score
}
