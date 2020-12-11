const Discord = require("discord.js");
const client = new Discord.Client(({ partials: ['MESSAGE'] }))
const { token } = require("./config.json");
const Message = require("./message.json");

client.on("ready", message => {
  console.log("Chill bot is active.");
});

client.on("guildMemberAdd", (member) => {
  let channel = member.guild.channels.cache;
  
  let embed = new Discord.MessageEmbed()
  .setColor(Message.color)
  .setThumbnail(Message.thumbnail)
  .addField(`Hello, welcome to chill <@${member.user.id}>!`,Message.message.join("\n"))
  .setImage(Message.image)

  channel.find(channel => channel.id === Message.channelId).send(embed);
});

client.login(token);