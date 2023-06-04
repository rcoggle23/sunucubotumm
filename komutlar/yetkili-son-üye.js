const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }   
let veri = await db.fetch(`sonüye_${message.guild.id}`)
let miran = args[0]
if(miran !== "aç" && miran !== "kapat") return message.reply("<a:uyar:1114935085406367794> Yanlış Kullanım!\n Örnek Kullanım : `.son-üye aç/kapat`")
if(miran === 'aç') {
    if(veri === 'acik') return message.reply("<a:uyar:1114935085406367794> Son Üye Sistemi Zaten Açık.\nKapatmak İçin : `.son-üye kapat`")
    message.reply("<a:uzaylih_evt:700331722012622929> **Son Üye Kanalı Başarıyla Oluşturuldu.**")
  let role = message.guild.roles.find("name", "@everyone");

let kanal = message.guild.createChannel(`Son Üye`, "voice").then(c => {
  c.overwritePermissions(role, {
CONNECT: false,
});
let kanals = client.channels.get(kanal) // Berk - Miran ~ CodEming ÇALMAYIN
  db.set(`sonüye_${message.guild.id}`, 'acik')
  db.set(`codeming_${message.guild.id}`, c.id)
})
}

if(miran === 'kapat') {


    if(!veri) return message.reply("<a:uyar:1114935085406367794> Son Üye Sistemi Zaten Kapalı.\nAçmak İçin : `.son-üye aç`")
  
  let kanals = client.channels.get(db.fetch(`codeming_${message.guild.id}`)) 
  
    if(!kanals) {
       message.reply("<a:uzaylih_evt:700331722012622929> **Son Üye Sistemi Başarıyla Kapatıldı.**")
       db.delete(`sonüye_${message.guild.id}`)
    db.delete(`codeming_${message.guild.id}`)
  return
    }
  
  message.reply("<a:uzaylih_evt:700331722012622929> **Son Üye Sistemi Başarıyla Kapatıldı.**")
  
      db.delete(`sonüye_${message.guild.id}`)
    db.delete(`codeming_${message.guild.id}`)
    // Berk - Miran ~ CodEming ÇALMAYIN
    kanals.delete()
    

}

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

module.exports.help = {
  name: "son-üye",
  description: "üye-durum",
  usage: "üye-durum"
};