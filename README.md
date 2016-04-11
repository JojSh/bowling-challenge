
# Bowling Challenge
=================

This program is a basic bowling score-keeper, allowing you the user to save the
score of each roll and applying the relevant additional points to spares, strikes
and tenth frame bonuses.

* To run and install on your own machine, having cloned this repo from:

  <GitHub URL>

1) Install required gems, by opening your console in the appropriate directory and
  running:

  $ bundle

2) To check everything is working as it should run

  $ open SpecRunner.html

3) Require <Game.js> in your browser's console


* Recording your game's progress

1) Create a new game with:
```
  game = new Game()
```

2) Save the result of a roll with:
```
  game.saveRoll(<number of pins knocked down>)
```

3) Calculate score so far with:
```
  game.calculateScore()
```
4) Bonuses will be applied on the fly, calculated once the result for subsequent
 roll/s have been calculated.
