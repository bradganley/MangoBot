const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

let OMDB_KEY = process.env.OMDB_KEY;
const endPoint = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=`;
const getID = async (message, args) => {
    try {
        let searchQ = '';
        for (word in args) {
            searchQ += `${args[word]}%20`;
        }
        searchQ = searchQ.slice(0, -3);
        console.log(searchQ);
        //console.log(searchQ);
        let omdbRes = await fetch(endPoint + searchQ);
        let omdbSon = await omdbRes.json();
        let results = omdbSon.Search;
        //console.log(omdbSon.Title);
        let description = '';
        for(item = 0; item < 4; item++){
            description += `__**${results[item].Title}**__
            _${results[item].Year}_
            https://fsapi.xyz/movie/${results[item].imdbID}
            https://123files.club/imdb/play/?id=${results[item].imdbID}
            https://dbgo.fun/video.php?id=${results[item].imdbID}\n
            `;
        }
        var embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Hey here's some shit")
            //.setThumbnail(results[0].Poster)
            .setDescription(description)
            //.setURL(`https://fsapi.xyz/movie/${results[0].imdbID}`)
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