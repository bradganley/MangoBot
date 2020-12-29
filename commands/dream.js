const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const deepai = require('deepai');

const apiKey = process.env.DEEPAI_KEY;
deepai.setApiKey(apiKey);

let getDream = async (message) => {
    try{
        let origUrl = message.attachments.array()[0].url;
    var dream = await deepai.callStandardApi("deepdream", {
        image: origUrl
    });
    //console.log(dream);
    message.reply(dream.output_url);
} catch(err) { //console.log(err);
}
}



module.exports = {
    name: 'dream',
	description: 'Runs an attached image through DeepAI\'s Deep Dream generative adversarial network',
    execute(message, args) {
        message.reply('Dreaming your dream. This takes a few seconds.')
        getDream(message);
	}
}