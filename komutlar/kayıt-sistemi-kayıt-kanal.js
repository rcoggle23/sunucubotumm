const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => { 
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
  let kanal = message.mentions.channels.first()
  
  if(!kanal) return message.reply('<a:uyar:1114935085406367794> Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin.\n Örnek: `.kayıt-kanal-ayarla #kayitkanal`')
  
  message.reply('<a:uzaylih_evt:700331722012622929> Kayıt Kanalını '+kanal+' Olarak Ayarladım.')
  
  db.set(`codemingkkanal_${message.guild.id}`, kanal.id)
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal-ayarla',
  description: 'taslak', 
  usage: 'kayit-kanal-ayarla'
};