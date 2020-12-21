const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const embed = new Discord.MessageEmbed()
.setColor(0x91EE60)
.setAuthor('Mangobot Strain Search');

const strains = async (message, args) => {
  try {
    let strName = "";
    for (i in args) {
      let strBoy;
      if(args.length > 1){
        strBoy = strName.concat(args[i],"%20");
      console.log(args[i]);
 
      } else {
        strBoy = strName.concat(args[i])
       }
      strName = strBoy;
    }
    try { 
     let strainLoad = await fetch(`https://strainapi.evanbusse.com/A1E9hg5/strains/search/name/${strName.slice(0, strName.length-3)}`);
     //message.reply(strName);
     strSon = await strainLoad.json();
     //message.reply(strSon[0].name);
     embed.setTitle(strSon[0].name)
     .attachFiles(['assets/straincube.png'])
     .setThumbnail('attachment://straincube.png')
     //.setField(`Name:`, `${strSon[0].name}`, false)
     .setDescription(`${strSon[0].desc}`);
     message.reply(embed);
    } catch (err){ console.log(err);}

    
  } catch (err) { console.log(err) }
}

module.exports = {
  name: 'strain',
  description: 'Gets strain info from the strain API',
  execute(message, args) {
    strains(message, args);
  }
}