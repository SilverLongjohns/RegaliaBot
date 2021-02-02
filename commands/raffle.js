const Discord = require('discord.js')

module.exports = {
  name: 'raffle',

  async execute (client, message, args) {

    async function raffle() {
    
    if (!args.length) {
      return message.channel.send("Please specify a length of time in hours.")
    } else if (args.length < 2) {
      return message.channel.send("Please enter length of giveaway and prize")
    } else if (isNaN(args[0])) {
      return message.channel.send("Please enter a valid number for length of giveaway")
    } else if (args[0] > 7500) {
      return message.channel.send("A giveaway cannot last longer than a month.")
    } else {

    let hour_s = "hour"

    let time = args[0]
    // let actual_duration_hours = time * 3600000 //hour
    let actual_duration_hours = time * 60000 //minute
    let input = []

    for (let i=1; i < args.length; i++){
      input.push(args[i])
    }

    let prize = input.join(" ")
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Raffle for ${prize}!`)
    .setColor('36393F')
    .setDescription(`React with 🔥 to enter!\nTime duration: **${time}** ${hour_s}\nHosted by: ${message.author}`)
    .setTimestamp(Date.now() + (time *60*60*1000))
    .setFooter('Ends at')
    let msg = await message.channel.send('🔥 **GIVEAWAY** 🔥', embed)

    await msg.react("🔥")
    setTimeout(() => {
      msg.reactions.cache.get('🔥').users.remove(client.user.id)
    setTimeout(() => {
      let winner = msg.reactions.cache.get("🔥").users.cache.random();
      if (msg.reactions.cache.get("🔥").users.cache.size < 1) {
        const winner_embed = new Discord.MessageEmbed()
        .setTitle(`Raffle for ${prize}!`)
        .setColor('36393F')
        .setDescription(`No entrants!\nHosted by: ${message.author}`)
        .setTimestamp()
        .setFooter('Ended at')
        msg.edit('🔥 **GIVEAWAY ENDED** 🔥', winner_embed);
      }
      if (!msg.reactions.cache.get('🔥').users.cache.size < 1) {
        const winner_embed = new Discord.MessageEmbed()
        .setTitle(`${prize}`)
        .setColor('36393F')
        .setDescription(`Winner:\n${winner}\nHosted by: ${message.author}`)
        .setTimestamp()
        .setFooter('Ended at')
        msg.edit('🔥 **GIVEAWAY ENDED** 🔥', winner_embed);
      }
    }, 1000)
  }, actual_duration_hours);
  }
  }
  raffle();
}
}
