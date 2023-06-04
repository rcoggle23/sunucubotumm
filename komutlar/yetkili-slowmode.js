const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }     if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
             
            message.reply('<a:uyar:1114935085406367794> Yanlış Kullanım \nÖrnek Kullanım : `.yavaş-mod 3`')
            return
          }
if (limit > 120) {
    return message.reply(`<a:uyar:1114935085406367794> **120'den Fazla Yavaş-Mod Açamazsın!**`)
}
    message.reply(`<a:uzaylih_evt:700331722012622929> **Yavaş Mod __${limit}__ saniye olarak ayarlandı!**`)
var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", 'yavaşmod'],
  permLevel: 0
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Slowmode Ayarlar',
  usage: 'yavaş-mod',
};