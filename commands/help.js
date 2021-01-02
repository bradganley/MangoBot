const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

module.exports = {
    name: 'help',
    description: 'Lists the commands and their descriptions',
    execute(message, args) {
        const { commands } = message.client;
        console.log('ok');
        const data = [];
        try {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => `**${command.name}**\n\t _${command.description}_`).join('\n'));
            console.log(data);
            return message.reply(data, { split: true })
        } catch (err) { console.log }


    }
}
