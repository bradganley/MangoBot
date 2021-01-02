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
let bother = async () => {
    console.log("Ok, gonna annoy demo");
    await sleep(between(5000, 180000));
    message.channel.send("Hi, <@667084378672726022> lol");
}
module.exports = {
    name: 'botherdemo',
    description: 'Bothers Demo',
    execute(message, args) {
        bother();
    }
}