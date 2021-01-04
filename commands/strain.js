const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const embed = new Discord.MessageEmbed()
  .setColor(0x91EE60)
  .setAuthor('Mangobot Strain Search');

const strains = async (message, args) => {
  try {
    if(args.length){
    let strName = "";
    for (i in args) {
      let strBoy;
      if (args.length > 1) {
        strBoy = strName.concat(args[i], "%20");
        console.log(args[i]);

      } else {
        strBoy = strName.concat(args[i])
      }
      strName = strBoy;
    }
    try {
      let strainLoad = await fetch(`https://strainapi.evanbusse.com/A1E9hg5/strains/search/name/${strName.slice(0, strName.length - 3)}`);
      //message.reply(strName);
      strSon = await strainLoad.json();
      let endBarf = "";
      let count = 1;
      for (i in strSon) {
        
        if (count < 4) {
          let tempo
          tempo = endBarf.concat(`**Name**: ${strSon[i].name}\n**About**: ${strSon[i].desc}\n\n`);
          console.log('fuck');
          endBarf = tempo;
          count++;
        }
      }
      embed.setTitle('Search Results')
        .attachFiles(['assets/weed.png'])
        .setThumbnail('attachment://weed.png')
        //.setField(`Name:`, `${strSon[0].name}`, false)
        .setDescription(endBarf);
      message.reply(embed);
    
    } catch (err) { console.log(err); }}  else { return message.reply("You didn't give me a strain to search for"); }


  } catch (err) { console.log(err) }
  }

module.exports = {
  name: 'strain',
  description: 'Gets strain info from the strain API',
  execute(message, args) {
    strains(message, args);
  }
}
