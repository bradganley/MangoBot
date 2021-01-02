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