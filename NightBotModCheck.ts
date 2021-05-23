import { cloneDeep, matches } from "lodash";

export type Channel = {
  name?: string,
  followers?: number,
  views?: number,
  partnered?: boolean,
};

export type Moderator = {
  status?: number,
  user?: string,
  cursor?: string,
  channels?: Channel[],
};

export type FilterActionOptions = {
  mutation: "copy" | "inplace";
}

export function filterProps<T>(channel: T, allowedProps: (keyof T)[]) : T {
  return Object.fromEntries(
    Object.entries(channel).filter(([key/*, value*/]) => {
      return (allowedProps.includes(key as keyof T));
    })
  ) as T;
}


exports.filterProps = filterProps;

// Returns a filtered copy of a channel list
export function FilterChannels(channels: Channel[], filterOptions : FilterActionOptions, channelMatch : Channel, channelPropertyFilter : (keyof Channel)[]) : Channel[] {

  // Apply filter options
  if (filterOptions.mutation == "copy")
  {
    channels = cloneDeep(channels);
  }

  // Filter down to channels that match our spec
  const filteredChannels = channels.filter(matches(channelMatch));
    
  // Iterate over the channels and filter down to the channel properties we want
  filteredChannels.forEach(
    (channel: Channel, index: number, array : Channel[]) => {
      array[index] = filterProps<Channel>(channel, channelPropertyFilter);
    }
  );

  return filteredChannels;
}

exports.FilterChannels = FilterChannels;


// Returns a filtered copy of a moderator list
export function FilterModerators(mods: Moderator[], filterOptions : FilterActionOptions, modMatch : Moderator, modPropFilter : (keyof Moderator)[], channelMatch : Channel, channelPropFilter : (keyof Channel)[]) : Moderator[] {

  // Apply filter options
  if (filterOptions.mutation == "copy")
  {
    mods = cloneDeep(mods);
  }

  const filteredMods : Moderator[] = mods.filter(matches(modMatch));

  filteredMods.forEach((mod: Moderator, index : number, array : Moderator[]) => {

    // Filter each mod's channels
    mod.channels = FilterChannels(mod.channels, filterOptions, channelMatch, channelPropFilter);

    // Filter down to the mod properties we want
    array[index] = filterProps<Moderator>(mod, modPropFilter);
  })

  return filteredMods;
}

exports.FilterModerators = FilterModerators;
