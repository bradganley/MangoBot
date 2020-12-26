const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const endPoint = `https://tiktok4.p.rapidapi.com/user/profile?user_name=`;
const header = new fetch.Headers({
    "X-RapidAPI-Host": "tiktok4.p.rapidapi.com"
});

const getUser = async (message, args) => {
    var uNameraw = args[0];
    var uName = uNameraw.replace('@', '');
    console.log(uName.trim());
    let query = endPoint + uName;
    try {
        let payLoad = await fetch(query, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.RAPID_KEY,
                "x-rapidapi-host": "tiktok4.p.rapidapi.com"
            }
        });
        let paySon = await payLoad.json();
        let embed = new Discord.MessageEmbed()
            .setColor('#EE1D52')
            .setTitle(paySon.userInfo.user.nickname)
            .setThumbnail(paySon.userInfo.user.avatarMedium)
            .setDescription(`_**${paySon.metaParams.title}**_\n
        ${paySon.metaParams.description}\n${paySon.metaParams.canonicalHref}`)
            .setURL(paySon.metaParams.cononicalHref)
            .setFooter(`Followers: ${paySon.userInfo.stats.followerCount}, Videos: ${paySon.userInfo.stats.videoCount}`);
        message.channel.send(embed);

    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    name: 'tiktok',
    description: 'Get info about a tiktok user',
    execute(message, args) {
        console.log(process.env.RAPID_KEY)
        getUser(message, args);
    }
}
