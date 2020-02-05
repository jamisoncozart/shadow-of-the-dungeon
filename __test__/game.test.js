import { Game } from './../src/logic.js'

describe('Game', () => {
  test('should check for successful board constructionk', () => {
    const board = new Game();
    expect(typeof board).toEqual("object");
  })
})