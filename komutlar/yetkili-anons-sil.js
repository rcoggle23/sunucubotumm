const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms');

exports.run = async(client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  

  let kanal = message.mentions.channels.first()
  if (!kanal) return message.reply('<a:uyar:1114935085406367794> Hangi kanaldaki anons silinecek?')
  let kanal2 = await db.fetch(`anonsk_${message.guild.id}_${kanal.id}`)
  if (!kanal2) return message.reply('<a:uyar:1114935085406367794> Bu kanalda bir anons ayarlanmamış!')

  message.reply(`<a:uzaylih_evt:700331722012622929> Artık ${kanal} adlı kanala, mesaj **gönderilmeyecek!**`)
  
  await db.delete(`anonsk_${message.guild.id}_${kanal.id}`)
  await db.delete(`anonss_${message.guild.id}_${kanal.id}`)
  await db.delete(`anonsm_${message.guild.id}_${kanal.id}`) //anani sikim
  
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
  kategori: 'moderasyon'
};

exports.help = {
  name: 'anons-sil', 
  description: 'Mesajınızı emoji haline getirir',
  usage: 'emojiyazı <mesaj>'
};