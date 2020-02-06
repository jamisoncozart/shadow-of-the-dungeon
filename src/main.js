import { Game, Player, Room } from './logic.js';
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


const displayOptions = (name)=> {
  if(name === 'Goblin') {
    $("#button-cont").hide();
    $("#goblinBtns").show();
  }

}

$(document).ready(function() {
  for(let i = 0; i < roomsArray.length; i++) {
    let temp = Math.round(Math.random());
    roomsArray[i].buildRoom(roomTypes[temp]);
  }
  game.addRooms(roomsArray);
  const player = new Player();
  // let currentRoom= {};
  $("#output").html(`<img src='${player.enterRoom(game)}' alt='something'>`);
  //click listeners for movement buttons
  $("#button-cont").on('click', 'button', event => {
    player.move(event.target.id)
    $('#output').empty()
   let currentRoom = player.enterRoom(game);
    $("#output").html(`<div class="room"><img src='${currentRoom.img}' alt='something'><h2 class="title">${currentRoom.name}</h2><hr><p class="description"></p></div>`)
    displayOptions(currentRoom.name);
    // console.log(game);
    // console.log(player);
    console.log(currentRoom.dead);
    if(currentRoom.dead){
      $('#message').text("You have allready killed this goblin")
      $("#button-cont").show();
      $("#goblinBtns").hide();
    }else {
    $("#goblinBtns").on('click', 'button', event => {
    
        if(event.target.id === "fight") {
          $('#message').text(currentRoom.takeDamage(player))
          if(currentRoom.health < 0 ){
            $("#button-cont").show();
            $("#goblinBtns").hide();
          }
      
      } else if(event.target.id === "run") {
        console.log("You coward");
      }
      
      
    })
  }

  })
  //click listeners for goblin buttons
 
})