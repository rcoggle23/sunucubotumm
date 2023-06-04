const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const ağla = new Discord.RichEmbed()
    .setAuthor('aAaAaaaĞĞH')
    .setColor('GRAY')
    .setTimestamp()
    .setDescription(`${message.author} Bilidim böle olacağnı`)
        .setImage(`https://cdn.discordapp.com/attachments/719283886936555652/719284818717704282/tenor.gif`)
    return message.channel.sendEmbed(ağla);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tabletreis',
  description: 'Bot U Ağlatırsınız',
  usage: 'ağla'
};