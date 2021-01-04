const Discord = require('discord.js');
const fetch = require('node-fetch'); //Not used? does the parser module handle the request by itself?
const Parser= require('rss-parser');
let parser= new Parser();

const embed = new Discord.MessageEmbed()
  .setColor(0x91EE60)
  .setAuthor('Cannabis News');

const feedGrab = async (channel) => {
  let feed = await parser.parseURL('https://hightimes.com/news/feed/');
  console.log(feed.title);
  let embedBoy = "";
  for(i = 0; i < 5; i++){
    console.log(`**${feed.items[i].title}` + ':\n\t' + `**${feed.items[i].link}**` + '\n')
    //embedBoy +=  `**${feed.items[i].title}**` + ':\n \t' + `${feed.items[i].link}` + '\n\n';
    embedBoy += `\[${feed.items[i].title}\]\(${feed.items[i].link} \"${feed.items[i].title}\"\)\n\n`;
  }
  embed.setDescription(embedBoy)
  .attachFiles(['assets/newsLogo.png'])
  .setThumbnail('attachment://newsLogo.png')
  .setFooter('coded by Brad Ganley, ruined by society');
  channel.send(embed);
}


module.exports = {
  name: 'news',
  description: 'Gets strain info from the strain API',
  execute(channel) {
    feedGrab(channel);
  }
}
