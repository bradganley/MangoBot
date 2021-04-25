const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

let OMDB_KEY = process.env.OMDB_KEY;
const endPoint = `http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=`;
const getID = async (message, args) => {
    try {
        var embed = new Discord.MessageEmbed();
        let searchQ = '';
        for (word in args) {
            searchQ += `${args[word]}%20`;
        }
        searchQ = searchQ.slice(0, -3);
        console.log(searchQ);
        //console.log(searchQ);
        let omdbRes = await axios.get(endPoint + searchQ);
        let omdbSon = await omdbRes.data;
        let results = omdbSon.Search;
        //console.log(omdbSon.Title);
        let description = '';
        var count = 0;
        for(item in results){
            description += `__**${results[item].Title}**__
            _${results[item].Year}_
            [Source 1](https://fsapi.xyz/movie/${results[item].imdbID}), [Source 2](https://dbgo.fun/video.php?id=${results[item].imdbID})\n`;
            count++;
            if(count > 4){
                break;
            }
        }
        
        embed.attachFiles(['assets/stream.png'])
        .setThumbnail('attachment://stream.png')
        .setColor('#0099ff')
        .setTitle("Completely Legal™ Streaming Links")
        .setDescription(description)
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