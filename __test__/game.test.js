import { Game, Player } from './../src/logic.js'


describe('Game', () => {
  test('should check for successful Game constructionk', () => {
    const board = new Game();
    expect(typeof board).toEqual("object");
  })
  test('should check that Game constructor creates a rooms array of arrays', () => {
    const board = new Game();
    expect(board.rooms).toEqual([[],[],[]]);
  })
  test('should check that Player constructor creates a Player with currentX and currentY values equal to 0', () => {
    const player = new Player();
    expect(player.currentX).toEqual(0);
    expect(player.currentY).toEqual(0);
  })
  test('should check that the move() method on the player object changes the players current position values correctly', () => {
    const player = new Player();
    player.move("down");
    expect(player.currentY).toEqual(1);
    player.move("up");
    expect(player.currentY).toEqual(0);
    player.move("right");
    expect(player.currentX).toEqual(1);
    player.move("left");
    expect(player.currentX).toEqual(0);
  })
})