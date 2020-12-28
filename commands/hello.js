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
  const hello = async () => {
    await sleep(3000);
        message.reply(`Hey.`);
        console.log("got it");
        await sleep(30000);
        message.reply('lololol made you look');
}
module.exports = {
    name: 'hello',
	description: 'Says hello',
    execute(message, args) {
         hello(message, args);
	}
}
