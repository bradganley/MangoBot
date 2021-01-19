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
    .attachFiles(['assets/nasa.png'])
    .setColor(0x91EE60)
    .setAuthor('NASA', 'attachment://nasa.png', 'http://nasa.gov')
    .setTitle('NASA Astronomy Picture of the Day')
    //.setDescription(json.title + '\n' + json.explanation + '\n' + json.date)
    .addField("Date", json.date, true)
    .addField("Title", json.title, true)
    .setDescription(json.explanation)
    .setImage(json.hdurl)
    .setURL(json.url)
    .setFooter('Data provided by NASA.gov')
    mes.channel.send(embed)
}

module.exports = {
    name: 'apod',
    description: 'Retrieves and posts the NASA picture of the day',
    execute(message) {
        apodGet(message);
    }
}