const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

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
     let strainLoad = await fetch(`https://strainapi.evanbusse.com/A1E9hg5/strains/search/name/${strName}`);
     message.reply(strName);
     strSon = await strainLoad.json();
     message.reply(strSon[0].name);
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