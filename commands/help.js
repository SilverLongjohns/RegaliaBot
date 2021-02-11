const Discord = require('discord.js')

module.exports = {
  name: 'help',

  execute (message, args) {
    message.channel.send("Hello there! Need my help? Here's a list of what I can do for you!\n\n`[ Wind-Up Esmeraude Version 1.0 ]`\n**!maps** - *Assists in discovering treasure map locations.*\n**!random** - *Generate a random number.*\n**!raffle** - *Holds a raffle or giveaway. (Moderators-only Command)*")
}
}