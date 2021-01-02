const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const swayzes = [
  'http://images5.fanpop.com/image/photos/31400000/Patrick-Swayze-patrick-swayze-31404258-1280-1024.jpg',
  'http://i1.cdnds.net/14/02/618x400/patrick-swayze.jpg',
  'http://images5.fanpop.com/image/photos/31200000/Point-Break-patrick-swayze-31226708-1786-2560.jpg',
  'http://ilovehorses.net/wp-content/uploads/2014/06/patrick_swayze_tammen2.png',
  'https://media0.giphy.com/media/69OUouHRzrvcA/giphy.gif',
  'https://media.giphy.com/media/a50HSsMdJhSuY/giphy.gif',
  'https://media4.giphy.com/media/rWEr9G9dTWBG/giphy.gif',
  'https://media1.giphy.com/media/3o6ZsTQCqCC8VFg0xi/giphy.gif?cid=ecf05e476lzyripyza911zskawzc74g3s3tpp02oqkcdxr5u&rid=giphy.gif',
  'https://media1.tenor.com/images/dfa48588660a3e458c805a52ea30171e/tenor.gif',
  'https://media.giphy.com/media/3o6Zt1bnn4IFOgnGxi/source.gif'
]

module.exports = {
    name: 'swayze',
	description: 'gives you a lil bit o\' swayze',
    execute(message, args) {
        let swayze = swayzes[ Math.floor(Math.random() * swayzes.length) ]
    message.reply(swayze) 
	}
}
