import { Game, Player, Room } from './../src/logic.js'

let game;
let player;
let roomTest;
let room1 = new Room();
let room2 = new Room();
let room3 = new Room();
let room4 = new Room();
let room5 = new Room();
let room6 = new Room();
let room7 = new Room();
let room8 = new Room();

describe('Game', () => {
  beforeEach(() => {
    game = new Game();
    player = new Player();
    roomTest = new Room();
    room1 = new Room();
    room2 = new Room();
    room3 = new Room();
    room4 = new Room();
    room5 = new Room();
    room6 = new Room();
    room7 = new Room();
    room8 = new Room();
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
  test('should check that the Room.buildRoom() method should add roomType to Room object based on parameter', () => {
    roomTest.buildRoom('encounter');
    expect(roomTest.content.name).toEqual('Goblin');
  })
  test('should check the Player constructor should add health, potions and currentWeapon values to the player object', () => {
    expect(player.health).toEqual(100);
    expect(player.potions).toEqual(0);
    expect(player.currentWeapon.name).toEqual('Excalibur');
  })
  test('should check if player has taken damage and return appropiate message depending on health remaining', ()=>{
    expect(player.takeDamage(20)).toEqual('You took 20 damage')
    expect(player.takeDamage(120)).toEqual('You Died.....')
  })
  test('should confirm that the addRooms method should take an array of rooms and add the rooms to the Game object in a random order', () => {
    let roomsArray = [roomTest, room1, room2, room3, room3, room4, room5, room6, room7, room8];
    game.addRooms(roomsArray);
    for(let i = 0; i < 3; i++) {
      expect(game.rooms[i].length).toEqual(3)
    }
  })
})