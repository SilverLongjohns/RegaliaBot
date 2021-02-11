const Discord = require('discord.js')

module.exports = {
  name: 'random',

  execute (message, args) {
    if (!args.length) {
      return message.channel.send("Hello! Do you need a **random number?**\n\nSpecify a number for the **lower and upper limit**, beginning with the **lower number first.**\n`Example: !random 1 10, !random 69 420. Maximum number is 999.`")
    } else if (args.length < 2 || args.length > 2) {
      return message.channel.send("Aww, I'm sorry! I can't help you!\nPlease begin with the lower number first, and try again!\n\nSpecify a number for the **lower and upper limit**, beginning with the **lower number first.**\n`Example: !random 1 10, !random 69 420. Maximum number is 999.`")
    } else if (isNaN(args[0])) {
      return message.channel.send("Aww, I'm sorry! I can't help you!\nPlease begin with the lower number first, and try again!\n\nSpecify a number for the **lower and upper limit**, beginning with the **lower number first.**\n`Example: !random 1 10, !random 69 420. Maximum number is 999.`")
    } else if (args[0] > args[1]) {
      return message.channel.send("Aww, I'm sorry! I can't help you!\nPlease begin with the lower number first, and try again!\n\nSpecify a number for the **lower and upper limit**, beginning with the **lower number first.**\n`Example: !random 1 10, !random 69 420. Maximum number is 999.`")
    } else if ((args[0] + 1) == args[1]) {
      return message.channel.send("I'd rather the bot only work with whole numbers so brain no hurty.")
    } else {
      const random = (min = args[0], max = args[1]) => {
        let num = Math.random() * (max - min) + min;

        return Math.floor(num);
      };

      message.channel.send(`${message.author}, your number is ` + random(args[0], args[1]) + `!`);
  }

}
}