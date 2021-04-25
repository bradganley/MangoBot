const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

const diceRoll = async (msg, args) => {
    let responseMsg = "\n";
    let result = await axios.get(`http://roll.diceapi.com/json/${args[0]}${args[1]}`);
    let json = await result.data; 
    for(let die in json.dice){
        let pos = die + 1;
        responseMsg += `${args[1]}: ${json.dice[die].value}\n`;
        console.log(responseMsg);
    }
    msg.reply(responseMsg);
}

module.exports = {
    name: 'roll',
	description: 'Rolls some dice. Use the command as follows to specify the number and type of dice: ```!roll 1 d20```',
    execute(message, args) {
        diceRoll(message, args);
	}
}