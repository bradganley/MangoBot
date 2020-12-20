module.exports = {
    name: 'accuse',
	description: 'Accuses The specifed user',
    execute(message, args) {
	const argsNO = message.content.slice(prefix.length).trim().split(' ', 2)
      console.log(argsNO[1]);
      message.reply(`\n
      :mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango:\n
      Is that ${argsNO[1]}?! HOLY CRAP everybody get a load of this mango-ass mango!\n
      :mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango::mango:\n
      `)
	}
}