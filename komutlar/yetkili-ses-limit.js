const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:uyar:1114935085406367794> Yetkin Yok!`).then(msg => msg.delete(10000));

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 
  let dcs_kanal = args[0];
  if (!dcs_kanal) //Dcs Ekibi
    return message.reply("<a:uyar:1114935085406367794> Bir Ses Kanal İd si Girmelisin.\nÖrnek Kullanım : `\.ses-limit <seskanalid> <sayı>\`").catch(console.error);

  let dcs_sayı = args[1];
  if (!dcs_sayı) 
    return message.reply("<a:uyar:1114935085406367794> Oda Limiti Yazmalısın.\nÖrnek Kullanım : `\.ses-limit <seskanalid> <sayı>\`").catch(console.error);

  let dcs_log = message.guild.channels.get(dcs_kanal);
  if (!dcs_log)
    return message.reply("<a:uyar:1114935085406367794> Belirtilen İd'de Kanal Bulunamadı.").catch(console.error);

  dcs_log.setUserLimit(dcs_sayı);
  message.channel.send(`<a:uzaylih_evt:700331722012622929> **__<#${dcs_kanal}>__ Kanalının Ses Odasının Limiti __${dcs_sayı}__ Oldu!**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seslimit'],
  permLevel: 0
};

exports.help = {
  name: "ses-limit",
  description: "Belirlenen Ses Kanalının Kişi Limitini Ayarlar!", //Dcs Ekibi
  usage: "limit <kanal-id> <oda-limit>"
};