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
        if(this.currentY !== 2) this.currentY++;
        break;
      case "up":
        if(this.currentY !== 0) this.currentY--;
        break;
      case "right":
        if(this.currentX !== 2) this.currentX++;
        break;
      case "left":
        if(this.currentX !==0) this.currentX--;
        break;
    }
  }
}