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
            message.member.addRole('787812999435649026').then(console.log).catch(console.error);
    
            message.reply("You've broken through the firewall.");
            console.log(`Nope, noppers, nadda.`);
          }    
	}
}