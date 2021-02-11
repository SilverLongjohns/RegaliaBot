const Discord = require('discord.js')

module.exports = {
  name: 'raffle',

  async execute (client, message, args) {

    async function raffle() {
    
    if (!args.length) {
      return message.channel.send("Hello! Are you about to hold a **raffle** or **giveaway**? Allow me to help you set it up!\n\n*Please specify a **length of time in hours**, followed by the **name of the prize.***\n`Example: !raffle 0.5 :gil: 1,000,000, !raffle 1 Fat Cat minion, !raffle 72 50 Glamour Prisms`")
    } else if (args.length < 2) {
      return message.channel.send("Oh dear, I'm afraid you need to give me more information!\n\n*Please specify a **length of time in hours**, followed by the **name of the prize.***\n`Example: !raffle 0.5 :gil: 1,000,000, !raffle 1 Fat Cat minion, !raffle 72 50 Glamour Prisms`")
    } else if (isNaN(args[0])) {
      return message.channel.send("Oh dear, I'm afraid you need to give me more information!\n\n*Please specify a **length of time in hours**, followed by the **name of the prize.***\n`Example: !raffle 0.5 :gil: 1,000,000, !raffle 1 Fat Cat minion, !raffle 72 50 Glamour Prisms`")
    } else if (args[0] > 7500) {
      return message.channel.send("I'm sorry! A giveaway cannot last longer than a month!\n\n*Please specify a **length of time in hours**, followed by the **name of the prize.***\n`Example: !raffle 0.5 :gil: 1,000,000, !raffle 1 Fat Cat minion, !raffle 72 50 Glamour Prisms`")
    } else {

    let hour_s = "hour"

    let time = args[0]
    let actual_duration_hours = time * 3600000 //hour
    // let actual_duration_hours = time * 60000 //minute
    let input = []

    for (let i=1; i < args.length; i++){
      input.push(args[i])
    }

    let prize = input.join(" ")
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`🎁 ${prize}`)
    .setColor('36393F')
    .setDescription(`Raffle ends in: **${time}** ${hour_s}\n*To join, simply **click on the Reaction below!***\nGood luck to everyone participating!`)
    .setTimestamp(Date.now() + (time *60*60*1000))
    .setFooter('Ends at')
    let msg = await message.channel.send(':stars: REGALIA RAFFLE :stars:', embed)

    await msg.react("🎁")
    setTimeout(() => {
      msg.reactions.cache.get('🎁').users.remove(client.user.id)
    setTimeout(() => {
      let winner = msg.reactions.cache.get("🎁").users.cache.random();
      if (msg.reactions.cache.get("🎁").users.cache.size < 1) {
        const winner_embed = new Discord.MessageEmbed()
        .setTitle(`🎁 ${prize}`)
        .setColor('36393F')
        .setDescription(`Sorry, not enough participants this time!`)
        .setTimestamp()
        .setFooter('Ended at')
        msg.edit(':fireworks: RAFFLE ENDED :fireworks:', winner_embed);
      }
      if (!msg.reactions.cache.get('🎁').users.cache.size < 1) {
        const winner_embed = new Discord.MessageEmbed()
        .setTitle(`🎁 ${prize}`)
        .setColor('36393F')
        .setDescription(`The **winner** is ${winner}!\nCongratulations, and thank you for joining!`)
        .setTimestamp()
        .setFooter('Ended at')
        msg.edit(':fireworks: RAFFLE ENDED :fireworks:', winner_embed);
      }
    }, 1000)
  }, actual_duration_hours);
  }
  }
  raffle();
}
}
