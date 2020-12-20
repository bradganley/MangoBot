const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const woof = async (message,args) => {
    const dogPic = await fetch('https://dog.ceo/api/breeds/image/random');
    dogSon = await dogPic.json();
    message.reply(dogSon.message);
}
module.exports = {
    name: 'woof',
    description: 'Am doggo',
    execute(message, args) {
        console.log('woof');
        woof(message,args);
    }
}