/* The official bot of mango science weed smoking get high 
fruit myrcene terpene chemistry intoxicant something whatever */
const fetch = require('node-fetch');
require('dotenv').config();
const Discord = require('discord.js');
const querystring = require('querystring');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  //console.log(file);
  const command = require(`./commands/${file}`);
  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
  //console.log(command)
}

//BOT_URL=https://discord.com/oauth2/authorize?client_id=787936572754493481&scope=bot&permissions=268691458

const autonews = require('./autonews.js');
const cron = require('node-cron');
let cronSet = false; //there's definitely a better way to do this

const prefix = "🥭:";
const _db_ = require('@replit/database');
const db = new _db_();
const mangos = ['mango', '🥭', 'MANGO', 'Mango'];


roleSet = async (user) => {
  try {
    user.addRole(role);
    console.log('Role Set');
  } catch (err) { console.log(err); }
}

client.on('ready', () => {
  try {
    let channel = client.channels.cache.get('791050941742448670');
    if (!cronSet) {
      cron.schedule('20 4 * * *', () => { // Zulu/GMT
        //channel.send(':mango::news')  //can mangobot call itself??    ----   No, pretty sure it can't....
        autonews.execute(channel)
      })
      cronSet = true; //it's probably even redundant
    }
  } catch (e) {
    console.log('failed to schedule industry-news message')
  }
  console.log(`Logged in as ${client.user.tag}. I'm ready for you, Daddy`);
});

//we need the join event listener

client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    for (var i = 0; i < mangos.length; i++) {
      if (message.content.includes(mangos[i])) {
        message.react('🥭');
      }
    }
    return;
  }
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    //console.log(command);

    if (!client.commands.has(command)) return;

    try {
      //console.log('!got it!');
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
});

client.on('guildMemberAdd', async member => {
  await sleep(5000)
  member.guild.channels.cache.get('784114534238912574').send(`Welcome to the server, ${member}! To reduce spam and minimize underage users on the server, we have implemented this bot! Please send the message \n":mango:: verify"\n to serve as your digital SOLEMN VOW that you are of age, not a cop, and generally cool.`);
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
