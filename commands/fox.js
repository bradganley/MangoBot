const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const fox = async (message, args) => {
    const foxPic = await fetch('https://randomfox.ca/floof/');
    foxSon = await foxPic.json();
    message.reply(foxSon.image);
}
module.exports = {
    name: 'fox',
	description: 'Shows you a cute fox',
    execute(message, args) {
        fox(message,args);
	}
}