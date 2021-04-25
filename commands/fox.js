const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

const fox = async (message, args) => {
    const foxPic = await axios.get('https://randomfox.ca/floof/');
    foxSon = await foxPic.data;
    message.reply(foxSon.image);
}
module.exports = {
    name: 'fox',
	description: 'Shows you a cute fox',
    execute(message, args) {
        fox(message,args);
	}
}