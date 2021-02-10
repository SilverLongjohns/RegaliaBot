const Discord = require('discord.js')

module.exports = {
  name: 'roles',

  async execute (message, args) {
      message.channel.messages.fetch({limit: 1}).then (messages => {
      message.channel.bulkDelete(messages)
    })

    let embed = new Discord.MessageEmbed()
    .setTitle("Hello, seeker!")
    .setDescription("React to get your role!")

    let msgEmbed = await message.channel.send(embed)

    msgEmbed.react('462435362376122378')
  }

}