const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }

if(new Date().getTime() - message.createdTimestamp < 100) return message.channel.send(`<:uzayli_ping_iyi:708491128353062983> Gecikme: ${new Date().getTime() - message.createdTimestamp}ms`)
if(new Date().getTime() - message.createdTimestamp < 500) return message.channel.send(`<:uzayli_ping_orta:708491128747589672> Gecikme: ${new Date().getTime() - message.createdTimestamp}ms`)
if(new Date().getTime() - message.createdTimestamp > 500) return message.channel.send(`<:uzayli_ping_kotu:708491128671961168> Gecikme: ${new Date().getTime() - message.createdTimestamp}ms`)

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};