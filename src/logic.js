export class Game {
  constructor() {
    this.rooms = [[],[],[]];
  }
  addRooms(roomsArray) {
    for(let y = 0; y < 3; y++) {
      for(let x = 0; x < 3; x++) {
        this.rooms[y][x] = roomsArray[Math.floor(Math.random()*roomsArray.length)];
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
    this.currentWeapon = {
      name: "Excalibur",
      dmg: 20,
    };
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
  enterRoom(Game) {
    let currentRoom = Game.rooms[this.currentX][this.currentY];
    return currentRoom.content;
  }
}

export class Room {
  constructor() {
    this.content = {};
  }
  buildRoom(type) {
    if(type === 'encounter'){
      let goblin = new Enemy();
      this.content = goblin ;  
    } else if(type === 'loot'){
      let chest = new Loot();
      this.content = chest;
    }
  }
}

export class Enemy {
  constructor() {
    this.dead = false;
    this.name = "Goblin";
    this.health = 50;
    this.weapon = {
      name: 'Goblin Sword',
      dmg: 15
    };
    this.img = 'https://www.stickpng.com/assets/images/5b4eee54c051e602a568ce1b.png';
  }
  takeDamage(player){
    // console.log(player);
    
    this.health -= player.currentWeapon.dmg;
    let message = ''
    if(this.health <= 0) { 
      message =` Goblin health: 0, You killed the goblin!` 
      this.dead = true
    }
    else if(this.health > 0 ) { message= ` Goblin health: ${this.health}, The goblin took ${player.currentWeapon.dmg} damage`}
    // console.log( player.takeDamage(this.weapon.dmg));
    return message
  }
}

export class Loot {
  constructor(){
    this.name = "Loot!";
    this.potions = 1;
    this.gold = 10;
    this.img = 'https://gamepedia.cursecdn.com/paladins_gamepedia/thumb/2/28/Colossal_Chest.png/300px-Colossal_Chest.png?version=7e43e9ee467cc2fa7a912c6c16638c95';
  }
}