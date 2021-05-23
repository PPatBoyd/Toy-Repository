import { cloneDeep, matches } from "lodash";

type Channel = {
  name?: string,
  followers?: number,
  views?: number,
  partnered?: boolean,
};

type Moderator = {
  status?: number,
  user?: string,
  cursor?: string,
  channels?: Channel[],
};

type FilterActionOptions = {
  mutation: "copy" | "inplace";
}

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


  function filterProps<T>(channel: T, allowedProps: (keyof T)[]) : T {
    return Object.fromEntries(
      Object.entries(channel).filter(([key/*, value*/]) => {
        return (allowedProps.includes(key as keyof T));
      })
    ) as T;
  }

  // Returns a filtered copy of a channel list
  function FilterChannels(channels: Channel[], filterOptions : FilterActionOptions, channelMatch : Channel, channelPropertyFilter : (keyof Channel)[]) : Channel[] {

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
  
  // Returns a filtered copy of a moderator list
  function FilterModerators(mods: Moderator[], filterOptions : FilterActionOptions, modMatch : Moderator, modPropFilter : (keyof Moderator)[], channelMatch : Channel, channelPropFilter : (keyof Channel)[]) : Moderator[] {

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

  const partneredChannelMatch : Channel = {partnered: true};
  const partneredChannelPropertyFilter : (keyof Channel)[] = ["name", "partnered"];
  const ModeratorPropertyFilter : (keyof Moderator)[] = ["user", "channels"];

  console.log("\nMods and Their Partnered Channels: \n" + (JSON.stringify(FilterModerators(SoManyMods, { mutation: "copy" }, null, ModeratorPropertyFilter, partneredChannelMatch, partneredChannelPropertyFilter), null, "\t")));

  const notPartneredChannelMatch : Channel = { partnered: false };
  const coolModsNamedWordsModMatch : Moderator = { user: "woooords" };

  console.log("\nCooler Mods Named Words and Their Not-Partnered Channels: " + JSON.stringify(FilterModerators(SoManyMods, { mutation: "copy" }, coolModsNamedWordsModMatch, ModeratorPropertyFilter, notPartneredChannelMatch, partneredChannelPropertyFilter), null, "\t"));


  const wooordsMod = SoManyMods[0];

  let channelsModerated : string = "Wooords moderates for: ";

  wooordsMod.channels.forEach((channel:Channel) =>{
    channelsModerated = channelsModerated + channel.name + ", ";
  });

  channelsModerated = channelsModerated.substring(0, channelsModerated.length-2);

  console.log(channelsModerated);