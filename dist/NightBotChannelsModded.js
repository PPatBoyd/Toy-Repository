"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wooordsMod = {
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
};
var channelsModerated = "Wooords moderates for: ";
wooordsMod.channels.forEach(function (channel) {
    channelsModerated = channelsModerated + channel.name + ", ";
});
channelsModerated = channelsModerated.substring(0, channelsModerated.length - 2);
console.log(channelsModerated);
//# sourceMappingURL=NightBotChannelsModded.js.map