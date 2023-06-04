const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => { 
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
let codeming = message.mentions.roles.first()
  
if(!codeming) return message.channel.send('<a:uyar:1114935085406367794> Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisin.\n Örnek: `.kayıt-verilecek-rol-ayarla @üye` ')
 
message.reply('<a:uzaylih_evt:700331722012622929> Kayıt Olan Kullanıcılara Verilecek Otomatik Rol '+codeming+' Şeklinde Ayarlandı.')  
  
db.set(`codemingkverilecekrol_${message.guild.id}`, codeming.id)  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-verilecek-rol-ayarla',
  description: 'taslak', 
  usage: 'kayit-verilecek-rol-ayarla'
};