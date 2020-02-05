import { Game, Player, Room } from './logic.js';

const game = new Game();
const roomTypes = ['encounter', 'loot'];
const room1 = new Room();
const room2 = new Room();
const room3 = new Room();
const room4 = new Room();
const room5 = new Room();
const room6 = new Room();
const room7 = new Room();
const room8 = new Room();
const room9 = new Room();
const roomsArray = [room1, room2, room3, room4, room5, room6, room7, room8, room9];
roomsArray.forEach( room => {
  var temp = Math.floor((Math.random()*2)-1)
  room.buildRoom(roomTypes[temp])
})
console.log(roomsArray);