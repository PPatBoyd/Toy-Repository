

// import type { Channel, Moderator } from './NightBotModCheck';
//const x = require('NightBotModCheck.js');
import * as x from './NightBotModCheck';
  
  
//   const mod : Moderator = {
//     status:200,
//     user:"woooords",
//     cursor:"",
//     channels:[
//       {
//         name:"akanemsko",
//         followers:261120,
//         views:23508664,
//         partnered:true
//       },
//       {
//         name:"chessweeb",
//         followers:16627,
//         views:3338792,
//         partnered:true
//       },
//       {
//         name:"tfblade",
//         followers:1116175,
//         views:83458655,
//         partnered:true
//       },
//       {
//         name:"woohoot",
//         followers:77,
//         views:1447,
//         partnered:false
//       }
//      ]};

let mod : x.Moderator;

  let channelsModerated : string = mod.user + " moderates for: ";

  mod.channels.forEach((channel:x.Channel) =>{
    channelsModerated = channelsModerated + channel.name + ", ";
  });

  channelsModerated = channelsModerated.substring(0, channelsModerated.length-2);

  channelsModerated;