const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const key = process.env.NASA_KEY;
const endPoint = `https://api.nasa.gov/planetary/apod?api_key=${key}&thumbs=true`;

const apodGet = async (mes) => {
    let raw = await fetch(endPoint);
    let json = await raw.json();
    console.log(json);
    var embed = new Discord.MessageEmbed()
    .setColor(0x91EE60)
    .setAuthor('NASA')
    .setTitle('NASA Astronomy Picture of the Day')
    .setDescription(json.title + '\n' + json.explanation + '\n' + json.date)
    .setImage(json.hdurl)
    //.setThumbnail(json.url)
    .setFooter('Your cat is trying to kill you annd I can prove it.');
    mes.reply(embed)
}

module.exports = {
    name: 'apod',
    description: 'Retrieves and posts the NASA picture of the day',
    execute(message) {
        apodGet(message);
    }
}