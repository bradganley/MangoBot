const Discord = require('discord.js');
const client = new Discord.Client();

const linkBoi = (mes) => {
    var embed = new Discord.MessageEmbed()
        .setColor(0x91EE60)
        .setURL('https://podlink.to/op2')
        .setTitle('Only Posers Don\'t Click All of These Links')
        .addField("Spotify", "https://open.spotify.com/show/1IX9Q8fmVEah2ydG0Ase6G?si=or9LD4-RQIiA3tCvAQM_yw")
        .addField("Youtube", "https://youtube.com/channel/UC6MQuKiyM15B35VjLlKqmng")
        .addField("Instagram", "https://instagram.com/onlyposersdontlisten?igshid=11upu55710s40")
        .addField("Facebook", "https://www.facebook.com/OPDL2P/")
        .addField("TikTok", "https://vm.tiktok.com/ZMJGkWdWF/")

        mes.channel.send(embed)
}

module.exports = {
    name: 'links',
	description: 'Links to all of the Only Posers places you\'d want to go',
    execute(message) {
        linkBoi(message);
    }
}