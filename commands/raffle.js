const Discord = require('discord.js')

module.exports = {
  name: 'raffle',

  async execute (message, args) {

    const raffleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("React with ")
    .setTimestamp();

    let msg = await message.channel.send(raffleEmbed)
    await msg.react("🔥")

    function winner(msg) {
      let winner = msg.reactions.cache.get("🔥").users.cache.random().id      
      return winner
    }

    setTimeout(() => {
      message.channel.send(`The winner is <@${winner(msg)}>`)
    }, args[0]);
  }
}