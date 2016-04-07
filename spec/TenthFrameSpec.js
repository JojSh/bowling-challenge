describe("TenthFrame", function() {

  beforeEach(function() {
    tenthFrame = new TenthFrame(1, 2, 3)
    spareFrame = new TenthFrame(5, 5, 5)
    strikeFrame = new TenthFrame(10, 5, 5)
    threeStrikes = new TenthFrame(10, 10, 10)
  })

  it("receives the result of three rolls", function() {
    expect(tenthFrame.roll1 >= 0 && tenthFrame.roll1 <= 10).toBeTruthy();
    expect(tenthFrame.roll2 >= 0 && tenthFrame.roll2 <= 10).toBeTruthy();
    expect(tenthFrame.roll3 >= 0 && tenthFrame.roll3 <= 10).toBeTruthy();
  });

  it("if first two rolls tally below 10, 3rd roll is not allowed", function() {
    expect(tenthFrame.tally()).toEqual(3)
  })


  it("receives a 3rd roll if spare in tenth frame", function() {
    expect(spareFrame.tally()).toEqual(15)
  })

  it("receives a 3rd roll if strike in tenth frame", function() {
    expect(strikeFrame.tally()).toEqual(20)
  })

  it("can score 30 with three strikes in tenth frame", function() {
    expect(threeStrikes.tally()).toEqual(30)
  })

})
