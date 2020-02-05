export class Game {
  constructor() {
    this.rooms = [[],[],[]];
  }
  addRooms(roomsArray) {
    for(let i = 0; i < roomsArray.length; i++) {
      for(let y = 0; y < 3; y++) {
        for(let x = 0; x < 3; x++) {
          this.rooms[y][x] = roomsArray[i];
        }
      }
    }
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

    takeDamage(dmg) {
        this.health -= dmg;
        if(this.health <= 0) {return 'You Died.....'}
        else {return `You took ${dmg} damage`}
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
    // this.x = x;
    // this.y = y;
    this.content = {};
  }
  buildRoom(type) {
    this.type = type;
    if(type === 'encounter'){
      let goblin = new Enemy();
      this.content = goblin   
    } else if(type === 'loot'){
      let chest = new Loot();
      this.content = chest;
    }
  }
}

export class Enemy {
  constructor() {
    this.name = "Goblin";
    this.health = 50;
    this.weapon = 'Goblin Sword'
  }
}

export class Loot {
  constructor(){
    this.potions = 1;
    this.gold = 10;
  }
}