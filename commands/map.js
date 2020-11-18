const { lakelanda, lakelandb, lakelandc, lakelandd, lakelande, lakelandf, lakelandg, lakelandh } = require('../imagedata.json')
const Discord = require('discord.js')

module.exports = {
  name: 'map',
  async execute (message, args) {

  console.log(args)

  if (args[0] === "lakeland") {

  let callEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Lakeland selected, please choose your map:")
        .setImage("https://i.imgur.com/5WpULWU.png")
        .setTimestamp();

  await message.channel.send(callEmbed);

  await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
    {max: 1, time: 5000}).then(collected => {
        if (collected.first().content.toLowerCase() == "a") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelanda)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else if (collected.first().content.toLowerCase() == "b") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelandb)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else if (collected.first().content.toLowerCase() == "c") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelandc)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else if (collected.first().content.toLowerCase() == "d") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelandd)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else if (collected.first().content.toLowerCase() == "e") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelande)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else if (collected.first().content.toLowerCase() == "f") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelandf)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else if (collected.first().content.toLowerCase() == "g") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelandg)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else if (collected.first().content.toLowerCase() == "h") {
          let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(collected.first().content.toUpperCase())
                .setImage(lakelandh)
	              .setTimestamp();
                return message.channel.send(mapEmbed);
        } else {
          return message.channel.send('Invalid selection.')
        }
      }).catch(() => {
        message.reply('No selection after 10 seconds. Request cancelled.')
      })
    } else if (args[0] === "ahm" && args[1] === "araeng") {
      let callEmbedB = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Ahm Araeng selected, please choose your map:")
        .setImage("https://i.imgur.com/DAXW4Kz.png")
        .setTimestamp();

      await message.channel.send(callEmbedB);

      await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
        {max: 1, time: 5000}).then(collected => {
            if (collected.first().content.toLowerCase() == "a") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelanda)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "b") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelandb)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "c") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelandc)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "d") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelandd)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "e") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelande)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "f") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelandf)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "g") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelandg)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "h") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(lakelandh)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else {
              return message.channel.send('Invalid selection.')
            }
          }).catch(() => {
            message.reply('No selection after 10 seconds. Request cancelled.')
          })

    } else {
      message.channel.send(`Please select your current area (Example: !map Lakeland)`)
    }
  } 
}
