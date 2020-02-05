import { Game, Player, Room } from './../src/logic.js'

let game;
let player;
let roomTest;

describe('Game', () => {
  beforeEach(() => {
    game = new Game();
    player = new Player();
    roomTest = new Room(0, 0);
  })
  test('should check for successful Game constructionk', () => {
    expect(typeof game).toEqual("object");
  })
  test('should check that Game constructor creates a rooms array of arrays', () => {
    expect(game.rooms).toEqual([[], [], []]);
  })
  test('should check that Player constructor creates a Player with currentX and currentY values equal to 0', () => {
    expect(player.currentX).toEqual(0);
    expect(player.currentY).toEqual(0);
  })
  test('should check that the move() method on the player object changes the players current position values correctly', () => {
    player.move("down");
    expect(player.currentY).toEqual(1);
    player.move("up");
    expect(player.currentY).toEqual(0);
    player.move("right");
    expect(player.currentX).toEqual(1);
    player.move("left");
    expect(player.currentX).toEqual(0);
  })
  test('should check that the player move is valid based on their current position', () => {
    player.move("up");
    expect(player.currentY).toEqual(0);
    player.move("left");
    expect(player.currentX).toEqual(0);
    player.currentX = 2;
    player.currentY = 2;
    player.move("down");
    expect(player.currentY).toEqual(2);
    player.move("right");
    expect(player.currentX).toEqual(2);
  })
  test('should check that the Room constructor creates a Room with x and y positions', () => {
    expect(roomTest.x).toEqual(0);
    expect(roomTest.y).toEqual(0);
  })
  test('should check that the Room.buildRoom() method should add roomType to Room object based on parameter', () => {
    roomTest.buildRoom('encounter');
    expect(roomTest.type).toEqual('encounter');
  })
})