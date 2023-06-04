//Komutlar/bototorol.js Dosyasına Atılacaktır!

const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
  let prefix = ayarlar.prefix;


  if (!args[0])
    return message.reply(
      `<a:uyar:1114935085406367794> Hatalı Kullanım \nAçmak İçin : ${prefix}bototorol aç @rol\n Kapatmak İçin : \`${prefix}bototorol kapat\``
    );
  let rol = message.mentions.roles.first();
  if (args[0] == "aç") {
    if (!rol)
      return message.reply(
        `<a:uyar:1114935085406367794> Bir rol etiketlemelisin.\nÖrnek Kullanım : \`${prefix}bototorol aç @Bot\``
      );

    db.set(`bototorol_${message.guild.id}`, rol.id);
    message.reply(
      `<a:uzaylih_evt:700331722012622929> Bot otorol \`${rol.name}\` olarak ayarlandı. Kapatmak için : \`${prefix}bototorol kapat\``
    );
  }

  if (args[0] == "kapat") {
    db.delete(`bototorol_${message.guild.id}`);
    message.channel.send("<a:uzaylih_evt:700331722012622929> Sistem Sıfırlandı");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bot-oto-rol"],
  permLevel: 0
};

exports.help = {
  name: "bototorol",
  description: "Sunucuya giren bota seçtiğiniz rolü otomatik verir.",
  usage: "bototorol <@rol>"
};