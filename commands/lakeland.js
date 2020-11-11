const Discord = require('discord.js');
const hook = new Discord.WebhookClient(config.webid, config.webtoken);

module.exports = {
  let img = [
    "https://i.imgur.com/a5A2Nrn.png",
    "https://i.imgur.com/QTMqNKl.png",
    "https://i.imgur.com/BpNjHCB.png",
    "https://i.imgur.com/sAzFTuU.png",
    "https://i.imgur.com/drrZWgz.png",
    "https://i.imgur.com/6eBcAm8.png",
    "https://i.imgur.com/xDB7CaY.png",
    "https://i.imgur.com/MpKfFHw.png"
  ],

  function sendImage() {
    let embeds = [];
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland A")
      .setImage(img[0])
    )
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland B")
      .setImage(img[1])
    )
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland C")
      .setImage(img[2])
    )
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland D")
      .setImage(img[3])
    )
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland E")
      .setImage(img[4])
    )
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland F")
      .setImage(img[5])
    )
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland G")
      .setImage(img[6])
    )
    embeds.push(
      new Discord.RichEmbed()
      .setTitle("Lakeland H")
      .setImage(img[7])
    )
    hook.send({embeds: embeds});
  }


}