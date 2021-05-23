function makeList(a) {var aList=a.split(",");return aList};
 
function lowerC(c) {var lower=c.toLowerCase();return lower};
 
function upperB(b) {var bList=b.split("_");var bOutput="";for(var bNumber=0;bNumber<bList.length;bNumber++){var bSlice=bList[bNumber];var bCap=bSlice.charAt(0).toUpperCase();bOutput+=" "+bCap+bSlice.slice(1).toLowerCase()};return bOutput.slice(1)};
 
function upperC(c) {return c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()};
 
function upperBU(b) {var bList=b.split("_");var bOutput="";for(var bNumber=0;bNumber<bList.length;bNumber++){var bSlice=bList[bNumber];var bCap=bSlice.charAt(0).toUpperCase();bOutput+="_"+bCap+bSlice.slice(1).toLowerCase()};return bOutput.slice(1)};
 
function upperBS(b) {var bList=b.split("_");var bOutput="";for(var bNumber=0;bNumber<bList.length;bNumber++){var bSlice=bList[bNumber];var bCap=bSlice.charAt(0).toUpperCase();bOutput+="%20"+bCap+bSlice.slice(1).toLowerCase()};return bOutput.slice(3)};
 
var h=makeList(a);
 
var i=parseInt(h[3]);
var j=parseInt(h[5]);
var k=parseInt(h[7]);
var l=parseInt(h[9]);
var m=parseInt(h[11]);
var n=parseInt(h[13]);
var o=parseInt(h[15]);
 
var p=Math.floor(Math.max(Math.floor(13/40*(i+k)+(1/4*(j+l+(n/2)))),Math.floor(13/40*(m*3/2)+(1/4*(j+l+(n/2)))),Math.floor(13/40*(o*3/2)+(1/4*(j+l+(n/2))))));
 
var q=lowerC(c);
var r=upperB(b);
var s=upperC(c);
var t=upperBU(b);
var u=upperBS(b);
 
h[0]=="Error Connecting To Remote Server"?"Sorry, the RuneScape highscores page is not loading fast enough or it is down. Please try again later.":
h[0]=="Error Connecting To Remote Server "?"Sorry, the RuneScape highscores page is not loading fast enough or it is down. Please try again later.":
 
b==f?"Please check out this link for help with the “!stats” command: https://bit.ly/2Bp8Sfi":
 
h[1]==h[2]?"It appears “"+r+"” does not exist on the highscores. Please make sure you have not misspelled the name.":
 
d!="null"?"Please only fill the first two fields after !stats. (Ex.!stats PotatoAteHer fletching)":
 
q=="total"?r+"’s Total level is "+h[1]+".":
 
q=="attack"?r+"’s Attack level is "+h[3]+".":
 
q=="defense"?r+"’s Defense level is "+h[5]+".":
 
q=="strength"?r+"’s Strength level is "+h[7]+".":
 
q=="hitpoints"?r+"’s Hitpoints level is "+h[9]+".":
q=="hp"?r+"’s Hitpoints level is "+h[9]+".":
 
q=="range"?r+"’s Range level is "+h[11]+".":
 
q=="prayer"?r+"’s Prayer level is "+h[13]+".":
 
q=="magic"?r+"’s Magic level is "+h[15]+".":
 
q=="cooking"?r+"’s Cooking level is "+h[17]+".":
 
q=="woodcutting"?r+"’s Woodcutting level is "+h[19]+".":
q=="wcing"?r+"’s Woodcutting level is "+h[19]+".":
 
q=="fletching"?r+"’s Fletching level is "+h[21]+".":
 
q=="fishing"?r+"’s Fishing level is "+h[23]+".":
 
q=="firemaking"?r+"’s Firemaking level is "+h[25]+".":
q=="fming"?r+"’s Firemaking level is "+h[25]+".":
 
q=="crafting"?r+"’s Crafting level is "+h[27]+".":
 
q=="smithing"?r+"’s Smithing level is "+h[29]+".":
 
q=="mining"?r+"’s Mining level is "+h[31]+".":
 
q=="herblore"?r+"’s Herblore level is "+h[33]+".":
 
q=="agility"?r+"’s Agility level is "+h[35]+".":
 
q=="thieving"?r+"’s Thieving level is "+h[37]+".":
 
q=="slayer"?r+"’s Slayer level is "+h[39]+".":
 
q=="farming"?r+"’s Farming level is "+h[41]+".":
 
q=="runecrafting"?r+"’s Runecrafting level is "+h[43]+".":
q=="rcing"?r+"’s Runecrafting level is "+h[43]+".":
 
q=="hunter"?r+"’s Hunter level is "+h[45]+".":
 
q=="construction"?r+"’s Construction level is "+h[47]+".":
q=="con"?r+"’s Construction level is "+h[47]+".":
 
q=="combat"?r+"’s Combat level is "+p+", and their Combat stats are "+h[3]+" Attack, "+h[5]+" Defense, "+h[7]+" Strength, "+h[9]+" Hitpoints, "+h[11]+" Range, "+h[13]+" Prayer, and "+h[15]+" Magic.":
 
q=="skills1"?r+" has "+h[17]+" Cooking, "+h[19]+" Woodcutting, "+h[21]+" Fletching, "+h[23]+" Fishing, "+h[25]+" Firemaking, and "+h[27]+" Crafting.":
 
q=="skills2"?r+" has "+h[29]+" Smithing, "+h[31]+" Mining, "+h[33]+" Herblore, "+h[35]+" Agility, "+h[37]+" Thieving, and "+h[39]+" Slayer.":
 
q=="skills3"?r+" has "+h[41]+" Farming, "+h[43]+" Runecrafting, "+h[45]+" Hunter, and "+h[47]+" Construction.":
 
b=="list"?"View list of skills and abbreviations here: https://bit.ly/3eX4RfI":
 
c=="null"?"Link to "+r+"’s stats: https://secure.runescape.com/m=hiscore_oldschool/hiscorepersonal?user1="+u:
 
"Sorry, “"+s+"” is either not recognized or you misspelled the skill try the command (!stats list) Or if it is part of a name try “"+t+"_"+s+"” instead."