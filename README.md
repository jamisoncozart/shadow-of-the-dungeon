|Behavior|Input|Output|
|:-:|:-:|:-:|
|When creating a new Game, Game constructor should create a new class object|var game = new Game()|_Object_|
|Game constructor should create a rooms array of 3 arrays|var game = new Game()|game.arrays === [[],[],[]]|
|When creating a new Player object, the player should include currentX and currentY values|let player = new Player();|player.currentX === 0, player.currentY === 0|
|The Player.prototype.move() should take an argument of up, down, left, or right and change the Player.current positions based on the input|player.move(down)|player.currentY++|
|Room constructor should create a Room object with x and y values associates with parameters|let room1 = new Room(0,0)|room1.x === 0, room1.y === 0|