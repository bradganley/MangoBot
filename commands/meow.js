const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

const meow = async (message, args) => {
    const catPic = await axios.get('https://aws.random.cat/meow');
    catSon = await catPic.data;
    message.reply(catSon.file);
}
module.exports = {
    name: 'meow',
    description: 'I\'m a cat!',
    execute(message, args) {
        meow(message, args);
    }
}