"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NightBotModCheck_1 = require("./NightBotModCheck");
var SoManyMods = [{
        status: 200,
        user: "woooords",
        cursor: "",
        channels: [
            {
                name: "akanemsko",
                followers: 261120,
                views: 23508664,
                partnered: true
            },
            {
                name: "chessweeb",
                followers: 16627,
                views: 3338792,
                partnered: true
            },
            {
                name: "tfblade",
                followers: 1116175,
                views: 83458655,
                partnered: true
            },
            {
                name: "woohoot",
                followers: 77,
                views: 1447,
                partnered: false
            }
        ]
    },
    {
        status: 200,
        user: "ppatboyd",
        cursor: "",
        channels: [
            {
                name: "nymuuu",
                followers: 316,
                views: 7427,
                partnered: false
            }
        ]
    }];
var partneredChannelMatch = { partnered: true };
var partneredChannelPropertyFilter = ["name", "partnered"];
var ModeratorPropertyFilter = ["user", "channels"];
console.log("\nMods and Their Partnered Channels: \n" + (JSON.stringify(NightBotModCheck_1.FilterModerators(SoManyMods, { mutation: "copy" }, null, ModeratorPropertyFilter, partneredChannelMatch, partneredChannelPropertyFilter), null, "\t")));
var notPartneredChannelMatch = { partnered: false };
var coolModsNamedWordsModMatch = { user: "woooords" };
console.log("\nCooler Mods Named Words and Their Not-Partnered Channels: " + JSON.stringify(NightBotModCheck_1.FilterModerators(SoManyMods, { mutation: "copy" }, coolModsNamedWordsModMatch, ModeratorPropertyFilter, notPartneredChannelMatch, partneredChannelPropertyFilter), null, "\t"));
//# sourceMappingURL=index.js.map