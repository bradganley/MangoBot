const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'verify',
	description: 'Verifies the realness of new members',
    execute(message, args) {
        if (message.member.roles.cache.has('787812999435649026')) {
            console.log(`Yay, the author of the message has the role!`);
            message.react('🤬');
          } else {
    
            //let myRole = '787812999435649026';
            message.member.roles.add('787812999435649026').then(console.log).catch(console.error);
    
            message.reply("You have been granted access to the rest of the server! Much love! feel free to explore all the sections! If you wanna just talk, come vibe with us in the the rotation chat!");
            console.log(`Nope, noppers, nadda.`);
          }    
	}
}