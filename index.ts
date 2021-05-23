import { Channel, FilterModerators, Moderator } from "./NightBotModCheck";

const SoManyMods: Moderator[] = [{
    status:200,
    user:"woooords",
    cursor:"",
    channels:[
      {
        name:"akanemsko",
        followers:261120,
        views:23508664,
        partnered:true
      },
      {
        name:"chessweeb",
        followers:16627,
        views:3338792,
        partnered:true
      },
      {
        name:"tfblade",
        followers:1116175,
        views:83458655,
        partnered:true
      },
      {
        name:"woohoot",
        followers:77,
        views:1447,
        partnered:false
      }
     ]},
     {
       status:200,
       user:"ppatboyd",
       cursor:"",
       channels:[
         {
           name:"nymuuu",
           followers:316,
           views:7427,
           partnered:false
          }]
      }];

  const partneredChannelMatch : Channel = {partnered: true};
  const partneredChannelPropertyFilter : (keyof Channel)[] = ["name", "partnered"];
  const ModeratorPropertyFilter : (keyof Moderator)[] = ["user", "channels"];

  console.log("\nMods and Their Partnered Channels: \n" + (JSON.stringify(FilterModerators(SoManyMods, { mutation: "copy" }, null, ModeratorPropertyFilter, partneredChannelMatch, partneredChannelPropertyFilter), null, "\t")));

  const notPartneredChannelMatch : Channel = { partnered: false };
  const coolModsNamedWordsModMatch : Moderator = { user: "woooords" };

  console.log("\nCooler Mods Named Words and Their Not-Partnered Channels: " + JSON.stringify(FilterModerators(SoManyMods, { mutation: "copy" }, coolModsNamedWordsModMatch, ModeratorPropertyFilter, notPartneredChannelMatch, partneredChannelPropertyFilter), null, "\t"));
