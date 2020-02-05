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
    expect(player.currenY).toEqual(0);
  })
})