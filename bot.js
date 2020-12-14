require('dotenv').config();
const Discord = require('discord.js');
const querystring = require('querystring');
//BOT_URL=https://discord.com/oauth2/authorize?client_id=787936572754493481&scope=bot&permissions=268691458
const prefix = "🥭:";
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}. I'm ready for you, Daddy`);
});
client.on('message', async message => {
    try{
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === "list") {
        for (i in args) {
            message.reply(`Command: ${command}\nArguments: ${args[i]}`);
        }
    }
    if (command === "hello") {
        message.reply(`Hey.`);
    }
    if (command === "why") {
        message.reply(`The \"Mango\" in my name is a reference to the fact that mangoes are abnormally high in myrcene, a terpene believed to be responsible for increased THC CB1 reception. Or something. Whatever.`);
    }
    if (command === "favoritebudtender") {
        message.reply(`https://www.tiktok.com/@its.demo.ysmf/video/6899908289325239558?lang=en`);
    }
    
}  catch(err) {message.reply(err);}
});


client.login(process.env.CLIENT_TOKEN);