export class Game {
  constructor() {
    this.rooms = [[],[],[]];
  }
}

export class Player {
  constructor() {
    this.currentX = 0;
    this.currentY = 0;
    this.health = 100;
    this.potions = 0;
    this.currentWeapon = 'sword';
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

export class Room {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  buildRoom(type) {
    this.type = type;
    // if(type === 'encounter')
  }
}