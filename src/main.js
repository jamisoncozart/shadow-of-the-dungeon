import { Game, Player, Room, startRoom } from './logic.js';
import $ from 'jquery';
import './styles.css'

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


const displayOptions = (room)=> {
  if(room.name === 'Goblin' && !room.dead) {
    $("#button-cont").hide();
    $("#lootBtns").hide();
    $("#goblinBtns").show();
  } else if(room.name === 'Loot!' && !room.openned){
    $("#button-cont").hide();
    $("#goblinBtns").hide();
    $("#lootBtns").show();
  } else if(room.name === "Enter the Dungeon") {
    // $("")
  }else {
    $("#button-cont").show();
    $("#lootBtns").hide();
    $("#goblinBtns").hide();
  }
}

let currentRoom;
$(document).ready(function() {
  for(let i = 0; i < roomsArray.length; i++) {
    let temp = Math.round(Math.random());
    roomsArray[i].buildRoom(roomTypes[temp]);
  }
  game.addRooms(roomsArray);
  game.rooms[0][0] = new startRoom();
  const player = new Player();
  displayOptions(game.rooms[0][0]);
  console.log(currentRoom);
  // let currentRoom= {};
  $("#output").html(`<img src='${player.enterRoom(game)}' alt='something'>`);
  $("#button-cont").on('click', 'button', event => {
    player.move(event.target.id)
    $('#output').empty()
    currentRoom = player.enterRoom(game);
    $("#output").html(`<div class="room"><img src='${currentRoom.img}'><h2 class="title">${currentRoom.name}</h2><hr></div>`)
    displayOptions(currentRoom);
    console.log("X: " + player.currentX + ", Y: " + player.currentY)
    console.log(currentRoom);
  })
  //click listeners for goblin buttons
  $("#fight").click(function() {
    currentRoom.takeDamage(player);
    if(currentRoom.dead) {
      $("img").attr('src', "https://lh3.googleusercontent.com/proxy/wsqlsO2Cb4iYCQ5h7dRly4pbUKSV_WbwkJq40oZiHREAbkp1AxTh02_pv3dqBGouDbyGWkTXLqOjqK5KnTL4qLD_WhkxysXonqfGn5kAISeGd07vxs4erLI_P4xnqZ8_BPgr")
      $("#message").html("This goblin has been slain.");
      $("#goblinBtns").hide();
      $("#button-cont").show();
    }
    player.takeDamage(currentRoom.weapon.dmg);
    if(player.dead) {
      $("#game").hide();
      $("#gameOver").show();
    }
  })
  $("#loot").click(function() {
    if(currentRoom.openned) {
      $("img").attr("src", "https://runescape.wiki/images/thumb/8/80/Treasure_chest_%28uncharted_isles%29_tier_1_open.png/255px-Treasure_chest_%28uncharted_isles%29_tier_1_open.png?68cf5")
      $("#message").html("You've already taken the spoils");
      $("#button-cont").show();
      $("#lootBtns").hide();
    } else {
      player.gold += 50;
      player.potions++;
      currentRoom.openned = true;
      $("#message").html("Chest Looted.");
      $("#button-cont").show();
      $("#lootBtns").hide();
    }
  })
  $("#leave").click(function() {
    $("#button-cont").show();
    $("#lootBtns").hide();
  })
})

