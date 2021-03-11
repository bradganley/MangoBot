const rando = (min, max) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
module.exports = {
    name: 'accuse',
    description: 'Accuses The specifed user',
    execute(message, args) {
        const accusations = [
            `:mango:Is that ${args[0]}?! HOLY CRAP everybody get a load of this mango-ass mango!:mango:`,
            `${args[0]} torches the whole fucking bowl when they get the greens.`,
            `You never find out that ${args[0]} has an infectious illness until AFTER the sesh`,
            `${args[0]} passes to the right.`,
            `${args[0]} can't roll. Period.`,
            `I have children younger than ${args[0]}\'s bong water}`,
            `I have footage proving that, utilizing a variety of techniques, ${args[0]} has stolen the Declaration of Independence.`,
            `${args[0]} is a cop.`
        ]
        message.channel.send(accusations[rando(0, accusations.length-1)]);
    }
}