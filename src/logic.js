export class Game {
  constructor() {
    this.rooms = [[],[],[]];
  }
}

export class Player {
  constructor() {
    this.currentX = 0;
    this.currentY = 0;
  }
  move(direction) {
    switch(direction) {
      case "down":
        this.currentY++;
        break;
      case "up":
        this.currentY--;
        break;
      case "right":
        this.currentX++;
        break;
      case "left":
        this.currentX--;
        break;
    }
  }
}