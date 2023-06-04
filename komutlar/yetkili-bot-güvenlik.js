const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }   

  let aktif = await db.fetch(`bottemizle_${message.guild.id}`)
  if (aktif) {
    db.delete(`bottemizle_${message.guild.id}`)
    message.reply('<a:uzaylih_evt:700331722012622929> Sistem Başarıyla Kapatıldı. Artık Sunucuya Eklenen Botlar Kicklenmeyecek.\n Açmak İçin : `.bot-güvenlik`')
  }
 
  if (!aktif) {
    db.set(`bottemizle_${message.guild.id}`, 'aktif')
    message.reply('<a:uzaylih_evt:700331722012622929> Sistem Başarıyla Açıldı. Artık Sunucuya Eklenen Botlar Otomatik Olarak Kicklenecek.\n Kapatmak İçin : `.bot-güvenlik`')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botgüvenlik'],
  permLevel: 0
};

exports.help = {
  name: 'bot-güvenlik',
  description: 'Sunucuya bot eklendiğinde atılmasını sağlayan sistemi başarıyla aktifleştirirsiniz/kapatırsınız.',
  usage: 'bot-güvenlik'
};