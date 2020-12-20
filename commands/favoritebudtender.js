const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
    name: 'favoritebudtender',
	description: 'Me, Demo',
    execute(message, args) {
        let embed = new Discord.MessageEmbed()
        .setColor(0x91EE60)
        .setDescription("https://www.tiktok.com/@its.demo.ysmf/video/6899908289325239558")
        .attachFiles(['assets/meDemo.jpg'])
        .setImage('attachment://meDemo.jpg')
        .setAuthor("Me, Demo!");
        message.reply(embed);  
	},
}