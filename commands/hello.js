const hello = async () => {
        message.reply(`Hey.`);
}
module.exports = {
    name: 'hello',
	description: 'Says hello',
    execute(message, args) {
         hello();
	}
}
