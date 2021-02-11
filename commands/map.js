const { lakelanda, lakelandb, lakelandc, lakelandd, lakelande, lakelandf, lakelandg, lakelandh,
        amha, amhb, amhc, amhd, amhe, amhf, amhg, amhh,
        ilmhega, ilmhegb, ilmhegc, ilmhegd, ilmhege, ilmhegf, ilmhegg, ilmhegh,
        raka, rakb, rakc, rakd, rake, rakf, rakg, rakh,
        tempa, tempb, tempc, tempd, tempe, tempf, tempg, temph,
        khoa, khob, khoc, khod, khoe, khof, khog, khoh } = require('../imagedata.json')
const Discord = require('discord.js')

module.exports = {
  name: 'map',
  async execute (message, args) {

  console.log(args)

  if (args[0] === "1") {

  let callEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("This is my collection of treasure maps available for Lakeland!")
        .setDescription("Which one matches with yours?\n\nTo select, please respond with the corresponding letter of your map location.\n`Example: A`")
        .setImage("https://i.imgur.com/8Khirwm.png")
        .setTimestamp();

  await message.channel.send(callEmbed);

  await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
    {max: 1, time: 30000}).then(collected => {
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
    } else if (args[0] === "2") {
      let callEmbedB = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("This is my collection of treasure maps available for Ahm Araeng!")
        .setDescription("Which one matches with yours?\n\nTo select, please respond with the corresponding letter of your map location.\n`Example: A`")
        .setImage("https://i.imgur.com/efUWKth.png")
        .setTimestamp();

      await message.channel.send(callEmbedB);

      //what lies beyond is a horror from beyond the stars. Turn back.

      await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
        {max: 1, time: 5000}).then(collected => {
            if (collected.first().content.toLowerCase() == "a") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amha)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "b") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amhb)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "c") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amhc)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "d") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amhd)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "e") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amhe)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "f") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amhf)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "g") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amhg)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "h") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(amhh)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else {
              return message.channel.send('Invalid selection.')
            }
          }).catch(() => {
            message.reply('No selection after 10 seconds. Request cancelled.')
          })

    } else if (args[0] === "3") {
      let callEmbedB = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("This is my collection of treasure maps available for Kholusia!")
        .setDescription("Which one matches with yours?\n\nTo select, please respond with the corresponding letter of your map location.\n`Example: A`")
        .setImage("https://i.imgur.com/9739Zwt.png")
        .setTimestamp();

      await message.channel.send(callEmbedB);

      await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
        {max: 1, time: 5000}).then(collected => {
            if (collected.first().content.toLowerCase() == "a") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khoa)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "b") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khob)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "c") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khoc)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "d") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khod)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "e") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khoe)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "f") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khof)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "g") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khog)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else if (collected.first().content.toLowerCase() == "h") {
              let mapEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(collected.first().content.toUpperCase())
                    .setImage(khoh)
                    .setTimestamp();
                    return message.channel.send(mapEmbed);
            } else {
              return message.channel.send('Invalid selection.')
            }
          }).catch(() => {
            message.reply('No selection after 10 seconds. Request cancelled.')
          })
      } else if (args[0] === "4") {
        let callEmbedB = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("This is my collection of treasure maps available for Il Mheg!")
          .setDescription("Which one matches with yours?\n\nTo select, please respond with the corresponding letter of your map location.\n`Example: A`")
          .setImage("https://i.imgur.com/fvNIYIN.png")
          .setTimestamp();
  
        await message.channel.send(callEmbedB);
  
        await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
          {max: 1, time: 5000}).then(collected => {
              if (collected.first().content.toLowerCase() == "a") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhega)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "b") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhegb)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "c") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhegc)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "d") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhegd)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "e") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhege)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "f") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhegf)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "g") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhegg)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "h") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(ilmhegh)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else {
                return message.channel.send('Invalid selection.')
              }
            }).catch(() => {
              message.reply('No selection after 10 seconds. Request cancelled.')
            })
      } else if (args[0] === "5") {
        let callEmbedB = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("This is my collection of treasure maps available for Raktika Greatwood!")
          .setDescription("Which one matches with yours?\n\nTo select, please respond with the corresponding letter of your map location.\n`Example: A`")
          .setImage("https://i.imgur.com/mEQbudw.png")
          .setTimestamp();
  
        await message.channel.send(callEmbedB);
  
        await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
          {max: 1, time: 5000}).then(collected => {
              if (collected.first().content.toLowerCase() == "a") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(raka)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "b") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(rakb)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "c") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(rakc)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "d") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(rakd)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "e") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(rake)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "f") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(rakf)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "g") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(rakg)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "h") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(rakh)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else {
                return message.channel.send('Invalid selection.')
              }
              }).catch(() => {
                message.reply('No selection after 10 seconds. Request cancelled.')
              })

        } else if (args[0] === "6") {

        let callEmbedB = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("This is my collection of treasure maps available for the Tempest!")
          .setDescription("Which one matches with yours?\n\nTo select, please respond with the corresponding letter of your map location.\n`Example: A`")
          .setImage("https://i.imgur.com/rls3lSe.png")
          .setTimestamp();
  
        await message.channel.send(callEmbedB);
  
        await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
          {max: 1, time: 30000}).then(collected => {
              if (collected.first().content.toLowerCase() == "a") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(tempa)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "b") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(tempb)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "c") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(tempc)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "d") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(tempd)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "e") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(tempe)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "f") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(tempf)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "g") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(tempg)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              } else if (collected.first().content.toLowerCase() == "h") {
                let mapEmbed = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle(collected.first().content.toUpperCase())
                      .setImage(temph)
                      .setTimestamp();
                      return message.channel.send(mapEmbed);
              }  else {
                return message.channel.send('Invalid selection.')
              }
            }).catch(() => {
              message.reply('No selection after 30 seconds. Request cancelled.')
            })
      } else {
      message.channel.send("Hello there!\nNeed my help in finding Zonureskin Treasure Maps?\nWhich location is indicated on your map?\n\nTo select, please respond with !map, followed by the corresponding number of your map location.\n`Example: !map 1`\n\n```!map 1: Lakeland\n!map 2: Amh Araeng\n!map 3: Kholusia\n!map 4: Il Mheg\n!map 5: Raktika Greatwood\n!map 6: Tempest```")
    }
  } 
}
