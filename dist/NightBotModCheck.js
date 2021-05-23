"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterModerators = exports.FilterChannels = exports.filterProps = void 0;
var lodash_1 = require("lodash");
function filterProps(channel, allowedProps) {
    return Object.fromEntries(Object.entries(channel).filter(function (_a) {
        var key = _a[0] /*, value*/;
        return (allowedProps.includes(key));
    }));
}
exports.filterProps = filterProps;
exports.filterProps = filterProps;
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
exports.FilterChannels = FilterChannels;
exports.FilterChannels = FilterChannels;
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
exports.FilterModerators = FilterModerators;
exports.FilterModerators = FilterModerators;
//# sourceMappingURL=NightBotModCheck.js.map