export class Game {
  constructor() {
    this.rooms = [[],[],[]];
  }
  addRooms(roomsArray) {
    // for(let y = 0; y < 3; y++) {
    //   for(let x = 0; x < 3; x++) {
    //     for(let i = 0; i < roomsArray.length; i++) {
      for(let i = 0; i < roomsArray.length; i++) {
        if(i <= 2) {
          this.rooms[0].push(roomsArray[i]);
        } else if(i>2 && i <= 5) {
          this.rooms[1].push(roomsArray[i]);
        } else {
          this.rooms[2].push(roomsArray[i]);
        }
      }
    //     }
    //     // Some spaces are being assigned duplicates of the same room!
    //   }
    // }
  }
}

export class Player {
  constructor() {
    this.currentX = 0;
    this.currentY = 0;
    this.gold = 0;
    this.health = 100;
    this.potions = 1;
    this.dead = false;
    this.currentWeapon = {
      name: "Excalibur",
      dmg: 20
    };
    }

    takeDamage(dmg) {
      this.health -= dmg;
      return this.checkIfDead();
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

    if(currentRoom.content.dead) {
      currentRoom.content.img = "https://lh3.googleusercontent.com/proxy/wsqlsO2Cb4iYCQ5h7dRly4pbUKSV_WbwkJq40oZiHREAbkp1AxTh02_pv3dqBGouDbyGWkTXLqOjqK5KnTL4qLD_WhkxysXonqfGn5kAISeGd07vxs4erLI_P4xnqZ8_BPgr"
      currentRoom.content.message = "This goblin has already been slain."
    } else if(currentRoom.content.openned) {
      currentRoom.content.img = 'https://runescape.wiki/images/thumb/8/80/Treasure_chest_%28uncharted_isles%29_tier_1_open.png/255px-Treasure_chest_%28uncharted_isles%29_tier_1_open.png?68cf5'
    }
    return currentRoom.content;
  }
  checkIfDead() {
    if(this.health <= 0) {
      this.health = 0;
      this.dead = true;
      return true;
    } else {
      this.dead = false;
      return false;
    }
  }
  takePotion() {
    if(this.potions > 0) {
      this.health += 50;
      this.potions--;
    }
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
    this.message = "You have encountered a goblin. Fight for your life!",
    this.weapon = {
      name: 'Goblin Sword',
      dmg: 15
    };
    this.img = 'https://www.stickpng.com/assets/images/5b4eee54c051e602a568ce1b.png';
  }
  takeDamage(player){
    // console.log(player);
    
    this.health -= player.currentWeapon.dmg;
    return this.checkIfDead();
  }
  checkIfDead() {
    if(this.health <= 0) {
      this.health = 0;
      this.dead = true;
      return true;
    } else {
      this.dead = false;
      return false;
    }
  }
}

export class Loot {
  constructor(){
    this.openned = false;
    this.name = "Loot!";
    this.img = 'https://gamepedia.cursecdn.com/paladins_gamepedia/thumb/2/28/Colossal_Chest.png/300px-Colossal_Chest.png?version=7e43e9ee467cc2fa7a912c6c16638c95';
  }
}

export class startRoom {
  constructor() {
    this.name = "Enter the Dungeon";
    this.img = "https://i.pinimg.com/originals/60/78/af/6078af6098937f4ae4e8e130a2b88e97.jpg";
  }
}