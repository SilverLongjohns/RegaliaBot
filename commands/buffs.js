const Discord = require('discord.js')

module.exports = {

name: 'buffs',

async execute (message, args) {

  const day = 24*60*60*1000

  const timeNow = Date.now()

  const setEmbed = new Discord.MessageEmbed()
  .setTitle(`Company buffs refreshed!`)
  .setColor('36393F')
  .setDescription(`Thanks ${message.author}!`)
  .setTimestamp(timeNow + day)
  .setFooter('Needs refreshing')

  const updateEmbed = new Discord.MessageEmbed()
  .setTitle(`Please refresh company buffs!`)
  .setColor('36393F')
  .setTimestamp(timeNow)
  .setFooter('Last refreshed')

  let msg = await message.channel.send(`<@&778611608406327317>!`, setEmbed)

  setTimeout(() => {
    message.channel.send(`<@&778611608406327317>!`, updateEmbed)
  }, 30000)
}

}