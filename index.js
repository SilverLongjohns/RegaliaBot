const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const chatID = '787270961241522196'

client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);

// User joins server: logging

client.on('guildMemberAdd', member => {

  const introEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
  .setTitle(member.user.username + " has checked into the Kirin's Flight")
  .setThumbnail(member.avatarURL)
	.setTimestamp();

  console.log('User ' + member.user.username + ' has joined the server!')

  console.log(member)

  member.send("Howdy! Welcome to Regalia. Please change your name to match your FFXIV one, and a mod will be about shortly to give you perms.")

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

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'map') {
    client.commands.get('map').execute(message, args);
  } else if (command === 'raffle') {
    client.commands.get('raffle').execute(client, message, args);
  } else if (command === 'reactions') {
    client.commands.get('reactions').execute(message, args);
  } else if (command === 'buffs') {
    client.commands.get('buffs').execute(message, args);
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) returnl

  if (reaction.message.channel.id === "778608212219527228") {
    if (reaction.emoji.name === "👍"){
      await reaction.message.guild.members.cache.get(user.id).roles.add("778611608406327317")
    }
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) returnl

  if (reaction.message.channel.id === "778608212219527228") {
    if (reaction.emoji.name === "👍"){
      await reaction.message.guild.members.cache.get(user.id).roles.remove("778611608406327317")
    }
  }
})