const fs = require('fs');
const Discord = require('discord.js');
const reactions = require('./commands/reactions');
const prefix = "!"
const token = ""

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const chatID = '512110863378022420'

client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);

// User joins server: logging

client.on('guildMemberAdd', member => {

  var role = member.guild.roles.cache.get("806169048265392148");

  if (!member.roles.cache.has("806169048265392148")) {
    member.roles.add(role).catch(console.error);
  }

  const introEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
  .setTitle(member.user.username + " has checked into the Kirin's Flight")
  .setThumbnail(member.avatarURL)
	.setTimestamp();

  console.log('User ' + member.user.username + ' has joined the server!')

  console.log(member)

  client.channels.cache.get(chatID).send(introEmbed);

});

client.on('guildMemberRemove', member => {

  const exitEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(member.user.username + " has left the Kirin's Flight")
  .setThumbnail(member.avatarURL)
  .setTimestamp();
  
  console.log('User ' + member.user.username + ' has left the server!')

  console.log(member)

  client.channels.cache.get(chatID).send(exitEmbed);


})

client.on('messageUpdate', (oldMessage, newMessage) => {
  let oldMsg = oldMessage
  let newMsg = newMessage

  if (!oldMsg.author) {
    const updateEmbedErr = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`A user updated a message outside of my cache.`)
    .setDescription(`Original: ` + oldMsg.content + `\nUpdated: ` + newMsg.content)
    .setThumbnail(oldMsg.avatarURL)
    .setTimestamp();
    return client.channels.cache.get(chatID).send(updateEmbedErr)
  } else {

  const updateEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${oldMsg.author.username} updated a message.`)
  .setDescription(`Original: ` + oldMsg.content + `\nUpdated: ` + newMsg.content)
  .setThumbnail(oldMsg.avatarURL)
  .setTimestamp();

  if(oldMessage.author.id != client.user.id && newMessage.content != oldMessage.content) {
    client.channels.cache.get(chatID).send(updateEmbed)
  }
}
})

client.on('messageDelete', message => {
  let msg = message
  if (!msg.author) {
    const updateEmbedErr = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`A user deleted a message outside of my cache.`)
    .setTimestamp();
    return client.channels.cache.get(chatID).send(updateEmbedErr)
  } else {

  const delEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${msg.author.username} deleted a message.`)
  .setDescription(`Original: ` + msg.content)
  .setThumbnail(msg.avatarURL)
  .setTimestamp();
  if(msg.author.id != client.user.id) {
    client.channels.cache.get(chatID).send(delEmbed)
  }
}
})

client.on('message', message => {

  if (message.channel.id === "806123826509381632") {
    if (message.content.toLowerCase() !== "!greentea" && !message.author.bot) {
      message.delete();
    }
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'map') {
    client.commands.get('map').execute(message, args);
  } else if (command === 'raffle') {
    if (!message.member.roles.cache.some(role => role.name === 'Seneschal' || 'Architect' || 'Patriarch' || 'Matriarch')) return message.channel.send("Hello! Are you interested to hold a **raffle** or **giveaway?**\nKindly approach one of the **moderators** to help you!");
    client.commands.get('raffle').execute(client, message, args);
  } else if (command === 'greentea') {
    if (!message.channel.id === "806123826509381632") return;
    client.commands.get('greentea').execute(message, args);
  } else if (command === 'roles') {
    client.commands.get('roles').execute(message, args);
  } else if (command === 'buffs') {
    client.commands.get('buffs').execute(message, args);
  } else if (command === 'random') {
    client.commands.get('random').execute(message, args);
  } else if (command === 'help') {
    client.commands.get('help').execute(message, args);
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return

  if (reaction.message.channel.id === "806123826509381632") {
    if (reaction.emoji.name === "🏰"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("284216738575417344");
      reaction.message.guild.members.cache.get(user.id).roles.remove("806169048265392148");
    }
    reaction.message.delete()
  }

  if (reaction.message.channel.id === "806114037507031060") {
    if (reaction.emoji.name === "462435362376122378"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("805480718742192198")
    }
  }

  if (reaction.message.id === "807231405876183051") {
    if (reaction.emoji.name === "🪚"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("805480718742192198")
    } else if (reaction.emoji.name === "🪓"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("805481234405785600")
    } else if (reaction.emoji.name === "🛡️"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("805481452207603722")
    } else if (reaction.emoji.name === "🗡️"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("805484587660476447")
    } else if (reaction.emoji.name === "⚔️"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("805484763250688021")
    } else if (reaction.emoji.name === "🎭"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("805484933186322453")
    }
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return

  if (reaction.message.channel.id === "806123826509381632") {
    if (reaction.emoji.name === "🏰"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("284216738575417344")
    }
  }

  if (reaction.message.id === "807231405876183051") {
    if (reaction.emoji.name === "🪚"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("805480718742192198")
    } else if (reaction.emoji.name === "🪓"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("805481234405785600")
    } else if (reaction.emoji.name === "🛡️"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("805481452207603722")
    } else if (reaction.emoji.name === "🗡️"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("805484587660476447")
    } else if (reaction.emoji.name === "⚔️"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("805484763250688021")
    } else if (reaction.emoji.name === "🎭"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("805484933186322453")
    }
  }
})