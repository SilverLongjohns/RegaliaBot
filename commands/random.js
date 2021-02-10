const Discord = require('discord.js')

module.exports = {
  name: 'random',

  execute (message, args) {
    if (!args.length) {
      return message.channel.send("Please specify a lower and upper limit.")
    } else if (args.length < 2 || args.length > 2) {
      return message.channel.send("Please specify an lower and upper limit.")
    } else if (isNaN(args[0])) {
      return message.channel.send("Please enter a valid number.")
    } else if (args[0] > args[1]) {
      return message.channel.send("Please enter the lower number first.")
    } else if ((args[0] + 1) == args[1]) {
      return message.channel.send("I'd rather the bot only work with whole numbers so brain no hurty.")
    } else {
      const random = (min = args[0], max = args[1]) => {
        let num = Math.random() * (max - min) + min;

        return Math.floor(num);
      };

      message.channel.send(random(args[0], args[1]));
  }

}
}