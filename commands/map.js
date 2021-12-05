const imagedata = require('../imagedata.json')
const Discord = require('discord.js')

const validOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

let selectMap = (zone, mapSelection, title) => {
  let mapEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(title.toUpperCase())
                .setImage(imagedata[zone][mapSelection])
                .setTimestamp();
                return mapEmbed;
}

module.exports = {
  name: 'map',
  async execute (message, args) {

  console.log(args)

  if (args[0] === "1") {

  let callEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("This is my collection of treasure maps available for **Lakeland!**")
        .setDescription("Which one matches with yours?\n\n*To select, please respond with the corresponding **letter** of your map location.*\n`Example: A`")
        .setImage("https://i.imgur.com/8Khirwm.png")
        .setTimestamp();

  await message.channel.send(callEmbed);

  await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
    {max: 1, time: 30000}).then(collected => {
      const selectedOption = collected.first().content.toLowerCase();
        if (validOptions.includes(selectedOption)) {
          message.channel.send(selectMap('lakeland', validOptions.indexOf(selectedOption), selectedOption))
        } else {
          return message.channel.send("Aww, I'm sorry. I didn't quite get that! Could you try again, please?")
        }
      }).catch(e => {
        console.log(e);
        message.reply("Do you need a bit more time to look through it? It's no problem, take your time!")
      })
    } else if (args[0] === "2") {
      let callEmbedB = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("This is my collection of treasure maps available for Ahm Araeng!")
        .setDescription("Which one matches with yours?\n\n*To select, please respond with the corresponding **letter** of your map location.*\n`Example: A`")
        .setImage("https://i.imgur.com/efUWKth.png")
        .setTimestamp();

      await message.channel.send(callEmbedB);

      await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
        {max: 1, time: 5000}).then(collected => {
          const selectedOption = collected.first().content.toLowerCase();
            if (validOptions.includes(selectedOption)) {
              message.channel.send(selectMap('amh', validOptions.indexOf(selectedOption), selectedOption))
            } else {
              return message.channel.send("Aww, I'm sorry. I didn't quite get that! Could you try again, please?")
            }
          }).catch(e => {
            console.log(e);
            message.reply("Do you need a bit more time to look through it? It's no problem, take your time!")
          })

    } else if (args[0] === "3") {
      let callEmbedB = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("This is my collection of treasure maps available for Kholusia!")
        .setDescription("Which one matches with yours?\n\n*To select, please respond with the corresponding **letter** of your map location.*\n`Example: A`")
        .setImage("https://i.imgur.com/9739Zwt.png")
        .setTimestamp();

      await message.channel.send(callEmbedB);

      await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
        {max: 1, time: 5000}).then(collected => {
          const selectedOption = collected.first().content.toLowerCase();
            if (validOptions.includes(selectedOption)) {
              message.channel.send(selectMap('kho', validOptions.indexOf(selectedOption), selectedOption))
            } else {
              return message.channel.send("Aww, I'm sorry. I didn't quite get that! Could you try again, please?")
            }
          }).catch(e => {
            console.log(e);
            message.reply("Do you need a bit more time to look through it? It's no problem, take your time!")
          })
      } else if (args[0] === "4") {
        let callEmbedB = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("This is my collection of treasure maps available for Il Mheg!")
          .setDescription("Which one matches with yours?\n\n*To select, please respond with the corresponding **letter** of your map location.*\n`Example: A`")
          .setImage("https://i.imgur.com/fvNIYIN.png")
          .setTimestamp();
  
        await message.channel.send(callEmbedB);
  
        await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
          {max: 1, time: 5000}).then(collected => {
            const selectedOption = collected.first().content.toLowerCase();
            if (validOptions.includes(selectedOption)) {
              message.channel.send(selectMap('ilmheg', validOptions.indexOf(selectedOption), selectedOption))
              } else {
                return message.channel.send("Aww, I'm sorry. I didn't quite get that! Could you try again, please?")
              }
            }).catch(e => {
              console.log(e);
              message.reply("Do you need a bit more time to look through it? It's no problem, take your time!")
            })
      } else if (args[0] === "5") {
        let callEmbedB = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("This is my collection of treasure maps available for Raktika Greatwood!")
          .setDescription("Which one matches with yours?\n\n*To select, please respond with the corresponding **letter** of your map location.*\n`Example: A`")
          .setImage("https://i.imgur.com/mEQbudw.png")
          .setTimestamp();
  
        await message.channel.send(callEmbedB);
  
        await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
          {max: 1, time: 5000}).then(collected => {
            const selectedOption = collected.first().content.toLowerCase();
            if (validOptions.includes(selectedOption)) {
              message.channel.send(selectMap('rak', validOptions.indexOf(selectedOption), selectedOption))
              } else {
                return message.channel.send("Aww, I'm sorry. I didn't quite get that! Could you try again, please?")
              }
              }).catch(e => {
                console.log(e);
                message.reply("Do you need a bit more time to look through it? It's no problem, take your time!")
              })

        } else if (args[0] === "6") {

        let callEmbedB = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle("This is my collection of treasure maps available for the Tempest!")
          .setDescription("Which one matches with yours?\n\n*To select, please respond with the corresponding **letter** of your map location.*\n`Example: A`")
          .setImage("https://i.imgur.com/rls3lSe.png")
          .setTimestamp();
  
        await message.channel.send(callEmbedB);
  
        await message.channel.awaitMessages(msg => msg.author.id == message.author.id,
          {max: 1, time: 30000}).then(collected => {
            const selectedOption = collected.first().content.toLowerCase();
            if (validOptions.includes(selectedOption)) {
              message.channel.send(selectMap('temp', validOptions.indexOf(selectedOption), selectedOption))
              }  else {
                return message.channel.send("Aww, I'm sorry. I didn't quite get that! Could you try again, please?")
              }
            }).catch(e => {
              console.log(e);
              message.reply("Do you need a bit more time to look through it? It's no problem, take your time!")
            })
      } else {
      message.channel.send("Hello there!\nNeed my help in finding **Zonureskin Treasure Maps?**\nWhich **location** is indicated on your map?\n\n*To select, please respond with **!map**, followed by the corresponding **number** of your map location.*\n`Example: !map 1`\n\n```!map 1: Lakeland\n!map 2: Amh Araeng\n!map 3: Kholusia\n!map 4: Il Mheg\n!map 5: Raktika Greatwood\n!map 6: Tempest```")
    }
  } 
}
