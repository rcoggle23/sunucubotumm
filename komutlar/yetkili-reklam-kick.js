const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) { // <a:uzaylih_evt:700331722012622929>
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
    if (!args[0]) return message.reply('<a:uyar:1114935085406367794> Hatalı Kullanım \n Örnek Kulanım : `.reklamkick aç/kapat`')
    if (args[0] == 'aç') {
      let açıkkapalı = await db.fetch(`reklamkick_${message.guild.id}`)
      if(açıkkapalı) return message.reply(`<a:uyar:1114935085406367794> Sistem Zaten Açık`)
      
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.reply(`<a:uzaylih_evt:700331722012622929> Reklam Kick Sistemi Başarı İle Açıldı`)
    }
    if (args[0] == 'kapat') { 
      let açıkkapalı = await db.fetch(`reklamkick_${message.guild.id}`)
      if(!açıkkapalı) return message.reply(`<a:uyar:1114935085406367794> Sistem Zaten Kapalı`)
      
        db.delete(`reklamkick_${message.guild.id}`, 'kapali')
        message.reply(`<a:uzaylih_evt:700331722012622929> Reklam Kick Sistemi Başarı İle Kapatıldı`)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklam-kick'],
    permLevel: 0
};
exports.help = {
    name: 'reklamkick',
    description: 'Reklam kick sistemini açıp kapatır',
    usage: 'reklamkick aç/kapat'
};