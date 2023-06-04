const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
   if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 
const code = message.mentions.channels.first() || message.channel
const frenzy = args[0]
if (!frenzy) return message.reply(`<a:uyar:1114935085406367794> Hatalı Kullanım\nÖrnek Kullanım : \`.reklamengel aç #kanal\``)
 
  if (frenzy == 'aç') { 
  let açıkkapalı = await db.fetch(`reklamEngelFrenzy_${code.id}`)
  if(açıkkapalı) return message.reply(`<a:uzaylih_evt:700331722012622929> Zaten reklam engel bu kanalda/belirttiğiniz kanalda aktif!`)
    
db.set(`reklamEngelFrenzy_${code.id}`,'açık')
message.reply(`<a:uzaylih_evt:700331722012622929> Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda aktif edildi!`)
  }
  
  if (frenzy == 'kapat') {
  let açıkkapalı = await db.fetch(`reklamEngelFrenzy_${code.id}`)
  if(!açıkkapalı) return message.reply(`<a:uzaylih_evt:700331722012622929> Zaten Reklam engel bu kanalda/belirttiğiniz kanalda deaktif!`)
    
db.delete(`reklamEngelFrenzy_${code.id}`)
message.reply(`<a:uzaylih_evt:700331722012622929> Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda deaktif edildi!`)
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['reklam-engel'],
  permLevel: 0
};
exports.help = {
  name: 'reklamengel',
  description: 'Frenzy Code',
  usage: 'Frenzy Code!'
}