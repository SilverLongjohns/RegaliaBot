const Discord = require('discord.js')

module.exports = {
  name: 'reactions',

  async execute (message, args) {
      message.channel.messages.fetch({limit: 1}).then (messages => {
      message.channel.bulkDelete(messages)
    })

    let embed = new Discord.MessageEmbed()
    .setTitle("Hello, new member!")
    .setDescription("To get started, **change your Discord name to your in-game name.**\n\nKindly follow this format: **[ First Name ] [ Last Name ]**\n*Example: Esmeraude Diamandis*\n`Right-click on your name in the list, and select Change Nickname`\n\nAfterwards, **click on the icon below** to join the rest of the members in the discussions!\nI hope to see you there!")

    let msgEmbed = await message.channel.send(embed)

    msgEmbed.react('🏰')
  }

}