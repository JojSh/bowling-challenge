describe("Game", function() {
  var game;

  beforeEach(function() {
   game = new Game()
  })

  it("can create a new game", function(){
    expect(game.scoreSheet).toEqual([])
  })

  it("can roll a gutter game", function() {
    fullGame(0, 20)
    expect(game.calculateScore()).toEqual(0)
  })

  it("can roll a basic game", function() {
    fullGame(1, 20)
    expect(game.calculateScore()).toEqual(20)
  })

  it("can roll a single frame", function() {
    game.saveRoll(3);
    game.saveRoll(3);
    expect(game.calculateScore()).toEqual(6)
  })

  it("can receive spare bonus", function() {
    game.saveRoll(5);
    game.saveRoll(5);
    game.saveRoll(1);
    expect(game.calculateScore()).toEqual(12)
  })

  it("can receive strike bonus", function() {
    game.saveRoll(10);
    game.saveRoll(1);
    game.saveRoll(1);
    expect(game.calculateScore()).toEqual(14)
  })

  it("can play a perfect game", function() {
    fullGame(10, 12)
    expect(game.calculateScore()).toEqual(300)
  })

  var fullGame = function(roll, length) {
    for (var i = 0; i < length; i++) {
      game.saveRoll(roll)
    }
  }

})
