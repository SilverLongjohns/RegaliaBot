const Discord = require('discord.js')

module.exports = {
  name: 'reactions',

  async execute (message, args) {
    message.channel.messages.fetch({limit: 1}).then (messages => {
      message.channel.bulkDelete(messages)
    })

    let embed = new Discord.MessageEmbed()
    .setTitle("Roles")
    .setDescription("react to get assigned role.")

    let msgEmbed = await message.channel.send(embed)

    msgEmbed.react('👍')
  }

}