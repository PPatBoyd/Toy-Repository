"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
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
function filterProps(channel, allowedProps) {
    return Object.fromEntries(Object.entries(channel).filter(function (_a) {
        var key = _a[0] /*, value*/;
        return (allowedProps.includes(key));
    }));
}
// Returns a filtered copy of a channel list
function FilterChannels(channels, filterOptions, channelMatch, channelPropertyFilter) {
    // Apply filter options
    if (filterOptions.mutation == "copy") {
        channels = lodash_1.cloneDeep(channels);
    }
    // Filter down to channels that match our spec
    var filteredChannels = channels.filter(lodash_1.matches(channelMatch));
    // Iterate over the channels and filter down to the channel properties we want
    filteredChannels.forEach(function (channel, index, array) {
        array[index] = filterProps(channel, channelPropertyFilter);
    });
    return filteredChannels;
}
// Returns a filtered copy of a moderator list
function FilterModerators(mods, filterOptions, modMatch, modPropFilter, channelMatch, channelPropFilter) {
    // Apply filter options
    if (filterOptions.mutation == "copy") {
        mods = lodash_1.cloneDeep(mods);
    }
    var filteredMods = mods.filter(lodash_1.matches(modMatch));
    filteredMods.forEach(function (mod, index, array) {
        // Filter each mod's channels
        mod.channels = FilterChannels(mod.channels, filterOptions, channelMatch, channelPropFilter);
        // Filter down to the mod properties we want
        array[index] = filterProps(mod, modPropFilter);
    });
    return filteredMods;
}
var partneredChannelMatch = { partnered: true };
var partneredChannelPropertyFilter = ["name", "partnered"];
var ModeratorPropertyFilter = ["user", "channels"];
console.log("\nMods and Their Partnered Channels: \n" + (JSON.stringify(FilterModerators(SoManyMods, { mutation: "copy" }, null, ModeratorPropertyFilter, partneredChannelMatch, partneredChannelPropertyFilter), null, "\t")));
var notPartneredChannelMatch = { partnered: false };
var coolModsNamedWordsModMatch = { user: "woooords" };
console.log("\nCooler Mods Named Words and Their Not-Partnered Channels: " + JSON.stringify(FilterModerators(SoManyMods, { mutation: "copy" }, coolModsNamedWordsModMatch, ModeratorPropertyFilter, notPartneredChannelMatch, partneredChannelPropertyFilter), null, "\t"));
var wooordsMod = SoManyMods[0];
var channelsModerated = "Wooords moderates for: ";
wooordsMod.channels.forEach(function (channel) {
    channelsModerated = channelsModerated + channel.name + ", ";
});
channelsModerated = channelsModerated.substring(0, channelsModerated.length - 2);
console.log(channelsModerated);
//# sourceMappingURL=index.js.map