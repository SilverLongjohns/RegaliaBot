const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const chatID = '677938273967931407'

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

client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'map') {
    client.commands.get('map').execute(message, args);
  }
});