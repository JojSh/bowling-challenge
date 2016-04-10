function Game(player) {
  this.scoreSheet = [];
}

Game.prototype.saveRoll = function(roll) {
  this.scoreSheet.push(roll)
}

Game.prototype.currentScore = function() {
  var score = 0;
  var rollIndex = 0;

  for (var i = 0; i < (this.scoreSheet.length / 2); i++) {
    if (this.isStrike(rollIndex)) {
      score += this.scoreStrike(rollIndex);
      rollIndex -= 1
    } else if (this.isSpare(rollIndex)) {
      score += this.scoreSpare(rollIndex);
    } else {
      score += this.scoreDefault(rollIndex);
    }
    rollIndex += 2
  }
  return score;
};

Game.prototype.isSpare = function(rollIndex) {
  return this.scoreSheet[rollIndex] + this.scoreSheet[rollIndex+1] === 10;
}

Game.prototype.isStrike = function(rollIndex) {
  return this.scoreSheet[rollIndex] === 10;
}

Game.prototype.scoreDefault = function(rollIndex) {
  var scores = this.scoreSheet
  var x = rollIndex
  return scores[x] + scores[x+1];
}

Game.prototype.scoreSpare = function(rollIndex) {
  var scores = this.scoreSheet
  var x = rollIndex
  return scores[x] + scores[x+1] + (2*scores[x + 2]);
}

Game.prototype.scoreStrike = function(rollIndex) {
  var scores = this.scoreSheet
  var x = rollIndex
  return scores[x] + (2*scores[x+1]) + (2*scores[x + 2])
};
