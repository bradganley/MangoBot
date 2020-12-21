const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const meow = async (message, args) => {
    const catPic = await fetch('https://aws.random.cat/meow');
    catSon = await catPic.json();
    message.reply(catSon.file);
}
module.exports = {
    name: 'meow',
    description: 'I\'m a cat!',
    execute(message, args) {
        meow(message, args);
    }
}