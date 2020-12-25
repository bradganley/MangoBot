const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

let OMDB_KEY = process.env.OMDB_KEY;
const endPoint = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&t=`;
const getID = async (message, args) => {
    try {
        let searchQ = '';

        for (word in args) {
            searchQ += `${args[word]}%20`;
        }

        //console.log(searchQ);
        let omdbRes = await fetch(endPoint + searchQ);
        let omdbSon = await omdbRes.json();
        //console.log(omdbSon.Title);
        var embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Hey here's some shit")
            .setThumbnail(omdbSon.Poster)
            .setDescription(`_**${omdbSon.Title}**_\n${omdbSon.Plot}\nhttps://fsapi.xyz/movie/${omdbSon.imdbID}`)
            .setURL(`https://fsapi.xyz/movie/${omdbSon.imdbID}`)
            .setFooter('Don\'t worry about it');
        message.channel.send(embed);
    } catch (err) { console.log(err) }
}

module.exports = {
    name: 'stream',
    description: 'It finds streams. It\'s fine. Don\'t worry about it.',
    execute(message, args) {
        getID(message, args);
    }
}