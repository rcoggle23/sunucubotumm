const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
   if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 
 
var kanal = message.guild.channels.get(args.join(' ')) || message.mentions.channels.first()
if (!kanal) {
	message.reply("<a:uyar:1114935085406367794> Lütfen bir kanal etiketleyiniz.")
} else {
	db.set(`onk_${message.guild.id}`, kanal.name)  
	message.reply(`<a:uzaylih_evt:700331722012622929> Önerilerin gönderileceği kanal ${kanal} olarak ayarlandı.`)
} 
  if (args[0] === "sıfırla") {
	db.delete(`onk_${message.guild.id}`)
	message.reply("<a:uzaylih_evt:700331722012622929> Önerilerin gönderileceği kanal sıfırlandı.")
}


 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
}
exports.help = {
 name: 'öneri-kanal',
 description: 's',
 usage: 's'
};