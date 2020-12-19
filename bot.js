/* The official bot of mango science weed smoking get high 
fruit myrcene terpene chemistry intoxicant something whatever */
const fetch = require('node-fetch');
require('dotenv').config();
const Discord = require('discord.js');
const querystring = require('querystring');
//BOT_URL=https://discord.com/oauth2/authorize?client_id=787936572754493481&scope=bot&permissions=268691458


const prefix = "🥭:";
const client = new Discord.Client();
const _db_ = require('@replit/database');
const db = new _db_();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function between(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

roleSet = async (user) => {
  try {
    user.addRole(role);
    console.log('Role Set');
  } catch (err) { console.log(err); }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}. I'm ready for you, Daddy`);
});

//we need the join event listener

client.on('message', async message => {
  try {
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
    if (command === "meow") {
      const catPic = await fetch('https://aws.random.cat/meow');
      catSon = await catPic.json();
      message.reply(catSon.file);
    }
    
    if (command === "accuse") {
      const argsNO = message.content.slice(prefix.length).trim().split(' ', 2)
      console.log(argsNO[1]);
      message.reply(`\n
      :mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango:\n
      Is that ${argsNO[1]}?! HOLY CRAP everybody get a load of this mango-ass mango!\n
      :mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango:\n
      `)
    }
    if (command == "verify") {
      if (message.member.roles.has('787812999435649026')) {
        console.log(`Yay, the author of the message has the role!`);
      } else {

        //let myRole = '787812999435649026';
        message.member.addRole('787812999435649026').then(console.log).catch(console.error);

        message.reply("You've broken through the firewall.");
        console.log(`Nope, noppers, nadda.`);
      }

    }
    if (command === "hello") {
      await sleep(3000);
      message.reply(`Hey.`);
      await sleep(30000);
      message.reply('lololol made you look');
    }
    if (command === "why") {
      message.reply(`The \"Mango\" in my name is a reference to the fact that mangoes are abnormally high in myrcene, a terpene believed to be responsible for increased THC CB1 reception. Or something. Whatever.`);
    }
    if (command === "favoritebudtender") {
      let embed = new Discord.RichEmbed()
        .setImage("https://www.tiktok.com/@its.demo.ysmf/video/6899908289325239558")
        .setColor(0x91EE60)
        .setDescription("https://www.tiktok.com/@its.demo.ysmf/video/6899908289325239558")
        .setImage('https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/71808f71da0e212cbfa8872bbbb046c8~c5_720x720.jpeg?x-expires=1608404400&x-signature=yWJhrvcsv4NZQfSKdItNaQwE1e4%3D')
        .setAuthor("Me, Demo!");
      message.reply(embed);
    }
    if (command === "botherdemo") {
      console.log("Ok, gonna annoy demo");
      await sleep(between(5000, 180000));
      message.channel.send("Hi, <@667084378672726022> lol")
    }

  } catch (err) { console.log(err); message.reply(`fucking idiot: ${err}`); }
});

client.on('guildMemberAdd', async member => {
  await sleep(5000)
  member.guild.channels.get('784114534238912574').send(`Welcome to the server, ${member}! To reduce spam and minimize underage users on the server, we have implemented this bot! Please send the message \n":mango:: verify"\n to serve as your digital SOLEMN VOW that you are of age, not a cop, and generally cool.`);
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