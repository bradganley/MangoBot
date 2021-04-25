const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

const woof = async (message,args) => {
    const dogPic = await axios.get('https://dog.ceo/api/breeds/image/random');
    dogSon = await dogPic.data;
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