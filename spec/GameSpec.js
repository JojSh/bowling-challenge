describe("Game", function() {
  //  var game;
  //  var frame1;
  //  var badFrame;
  //  var spareFrame;
  //  var strikeFrame;

  beforeEach(function(){
    game = new Game("Bob");
    frame1 = new Frame(3,4);
    frame2 = new Frame(8,1);
    badFrame = new Frame(0,0);
    spareFrame = new Frame(5,5)
    strikeFrame = new Frame(10,0)

    threeStrikes = new TenthFrame(10, 10, 10)
  })

  it("receives player name as an argument", function() {
    expect(game.player).toEqual("Bob");
  });

  it("can show me my score after 10th frame", function(){
    tenFrames(frame1)
    expect(game.currentScore()).toEqual(70)
  })

  it("can roll a gutter game (scoring zero)", function(){
    tenFrames(badFrame)
    expect(game.currentScore()).toEqual(0)
  })

  it("can roll a game of just ones", function(){
    tenFrames(new Frame(0,1))
    expect(game.currentScore()).toEqual(10)
  })

  it("is initialized with 10 empty (unscored) frames ", function(){
    expect(game.scoreSheet.length).toEqual(10)
    expect(game.scoreSheet).toEqual([null,null,null,null,null,null,null,null,null,null]);
  })

  tenFrames = function(frame) {
    for(var i  = 0; i < 10; i++) {
      game.saveFrame(frame)
    }
  }

describe("(after three frames)", function(){

    beforeEach(function(){
      game.saveFrame(frame1)
      game.saveFrame(frame2)
      game.saveFrame(frame1)  // = 23
    })

    it("can save the results of a frame", function(){
      expect(game.scoreSheet).toEqual([7,9,7,null,null,null,null,null,null,null])
    })

    it("can show me my score so far", function(){
      expect(game.currentScore()).toEqual(23)
    })

    it("spare score is saved as 'spare'", function(){
      game.saveFrame(spareFrame)
      expect(game.scoreType[3]).toEqual("spare")
    })

    it("strike score is also saved as 'strike'", function(){
      game.saveFrame(strikeFrame)
      expect(game.scoreType[3]).toEqual("strike")
    })

    it("first roll after a spare is added to the prev' frame's total", function(){
      game.saveFrame(spareFrame)
      game.saveFrame(frame2)
      expect(game.currentScore()).toEqual(50)
      expect(game.scoreSheet[3]).toEqual(18)
    })

    it("frame tally after a strike is to the previous frame's total", function() {
      game.saveFrame(strikeFrame)
      game.saveFrame(frame2)
      expect(game.currentScore()).toEqual(51)
      // console.log(game.scoreSheet)
      // console.log(game.scoreType)
      expect(game.scoreSheet[3]).toEqual(19)
    })

    it('consecutive strikes stack up', function() {
      game.saveFrame(frame1)  // 30
      game.saveFrame(strikeFrame)
      game.saveFrame(strikeFrame)
      game.saveFrame(strikeFrame)
      expect(game.currentScore()).toEqual(60)
    })

    it("can play a full game with strikes and spares",function() {
      game.saveFrame(spareFrame)
      game.saveFrame(strikeFrame)
      for(var i = 5 ; i < 10 ; i++){
        game.saveFrame(frame1)
      }
      // console.log(game.scoreSheet)
      expect(game.currentScore()).toEqual(95)
    })



  })

describe("Tenth frame rules", function(){
  // it("can roll a perfect game",function(){
  //   for(var i = 0; i < 9; i++) {
  //     game.saveFrame(strikeFrame)
  //   }
  //   game.saveFrame(threeStrikes)
  //   console.log(game.scoreSheet)
  //   console.log(game.scoreType)
  //   expect(game.currentScore()).toEqual(300)
  // })


  xit("a spare in the tenth frame accepts an extra roll", function () {
    for(var i = 0; i < 9; i++){
      game.saveFrame(frame1)
    }
    game.saveFrame(new tenthFrame(5,5,5))
    expect(game.currentScore()).toEqual(78)


  })

  xit("a completed tenth frame ends the game", function() {
    //stuff
  })

})


})
