const Discord = require('discord.js'),
      db = require('quick.db'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 
  
const ibrahim = message.mentions.channels.first()
if(!ibrahim) return message.reply(`<a:uyar:1114935085406367794> Bir Kanal Etiketlemelisin.`)
  
await db.set(`FrenzyGörselKanal_${message.guild.id}`,ibrahim.id)  

message.reply(` <a:uzaylih_evt:700331722012622929> Sadece görsel atılabilir kanalını ${ibrahim} olarak ayarladım.`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'görselkanal',
  description: 'Frenzy Code',
  usage: 'görselkanal #kanal'
}; 
