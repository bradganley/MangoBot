/* const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const endPoint = `https://tiktok4.p.rapidapi.com/user/profile?user_name=`;
const header = new fetch.Headers({
    "X-RapidAPI-Host": "tiktok4.p.rapidapi.com"
});

const getUser = async (message, args) => {
    let query = endPoint + args[0];
    try {
        let payLoad = await fetch(`https://tiktok4.p.rapidapi.com/user/profile?user_name=${args[0]}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.RAPID_KEY,
                "x-rapidapi-host": "tiktok4.p.rapidapi.com"
            }
        });
        let paySon = await payLoad.json();
        message.reply(paySon.userInfo.user.bioLink.link);
        
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
*/