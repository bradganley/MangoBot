const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const apiKey = process.env.DEEPAI_KEY;
const endPoint =  'https://api.deepai.org/api/deepdream'

const getDream = async (message) => {
    if(!message.attachments){
        message.reply('You idiot.');
        return;
    }
    imgUrl = message.attachments.array()[0].url;
    let body = 'image='+imgUrl
    
    try{
        let resp = await fetch(endPoint, {
            method: 'POST',
            headers: {
                'api-key': process.env.DEEPAI_KEY,
            },
            body: {
                'image': imgUrl
            }
        });
        let respSon = await resp.json();
        console.log(respSon);
    } catch(err){console.log}
}
module.exports = {
    name: 'dream',
	description: '',
    execute(message, args) {
        getDream(message);
	}
}