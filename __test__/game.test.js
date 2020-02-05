import { Game } from './../src/logic.js'

describe('Game', () => {
  test('should check for successful Game constructionk', () => {
    const board = new Game();
    expect(typeof board).toEqual("object");
  })
  test('should check that Game constructor creates a rooms array of arrays', () => {
    const board = new Game();
    expect(board.rooms).toEqual([[],[],[]]);
  })
})