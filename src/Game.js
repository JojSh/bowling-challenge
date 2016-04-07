/*jshint esversion: 6 */

function Game(player) {
    this.player = player;
    this.scoreSheet = [null,null,null,null,null,null,null,null,null,null]
    this.scoreType  = [null,null,null,null,null,null,null,null,null,null]
    this.frameNumber = 0
}

Game.prototype.saveFrame = function(frame) {
  frame.tally()
  this.scoreType.splice(this.frameNumber, 1, frame.bonus)
  var prevBonus = this.scoreType[this.frameNumber-1]

  this.frameNumber++
  if (prevBonus === "spare") {
  this.scoreSheet.splice(this.frameNumber-2, 1,frame.roll1+10);
  } else if (prevBonus === "strike") {
    this.scoreSheet.splice(this.frameNumber-2, 1,frame.tally()+10);
  }
  this.scoreSheet.splice(this.frameNumber-1,1,frame.tally());
}

Game.prototype.currentScore = function(){
  var flatArray = [].concat.apply([], this.scoreSheet)
  var sum = flatArray.reduce((a,b) => a + b);
  return sum;
}
