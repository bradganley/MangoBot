/* The official bot of mango science weed smoking get high 
fruit myrcene terpene chemistry intoxicant something whatever */



require('dotenv').config();
const Discord = require('discord.js');
const querystring = require('querystring');
//BOT_URL=https://discord.com/oauth2/authorize?client_id=787936572754493481&scope=bot&permissions=268691458
const prefix = "🥭:";
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}. I'm ready for you, Daddy`);
});

//we need the join event listener

client.on('message', async message => {
    try{
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === "list") {
        for (i in args) {
            message.reply(`Argument ${i}: ${args[i]}`);
        }
    }
    if (command === "hello") {
        message.reply(`Hey.`);
    }
    if (command === "why") {
        message.reply(`The \"Mango\" in my name is a reference to the fact that mangoes are abnormally high in myrcene, a terpene believed to be responsible for increased THC CB1 reception. Or something. Whatever.`);
    }
    if (command === "favoritebudtender") {
        message.reply(`https://www.tiktok.com/@its.demo.ysmf/video/6899908289325239558`);
    }
    
}  catch(err) {message.reply(err);}
});

client.on('guildMemberAdd', member => {
   
    member.guild.channels.cache.get('784114534238912574').send('🥭');
});
  
client.login(process.env.CLIENT_TOKEN);

/*
OH SHIT IT'S A FUCKING GHOST OMG
     .-.
   .'   `.
   :g g   :
   : o    `.
  :         ``.
 :             `.
:  :         .   `.
:   :          ` . `.
 `.. :            `. ``;
    `:;             `:'
       :              `.
        `.              `.     .
          `'`'`'`---..,___`;.-'

*/