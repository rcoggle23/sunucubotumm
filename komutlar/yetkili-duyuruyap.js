const Discord = require('discord.js');

exports.run = function (client, message, args) {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send("<a:uyar:1114935085406367794> Hata bir kanal etiketlemelisini!");
  if(!duyurumetni) return message.channel.send("<a:uyar:1114935085406367794> Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send("<a:uzaylih_evt:700331722012622929>  Başarıyla duyuruldu!");
    kanal.createWebhook("Duyuru 📢")
    .then(webhook => webhook.edit("Uzaylı")
        .then(wb => {
            const duyurucu = new Discord.WebhookClient(wb.id, wb.token);
            duyurucu.send(duyurumetni)
            duyurucu.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'duyuruyap'
};