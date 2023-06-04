const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:uyar:1114935085406367794> Modlog Kanalı Zaten ayarlı değil`).setColor("GREEN"));
    
    db.delete(`codeminglog_${message.guild.id}`)
   message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:uzaylih_evt:700331722012622929> ModLog Kanalı başarıyla sıfırlandı`).setColor("GREEN"));

    return
  }
  
if (!logk) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:uyar:1114935085406367794> Bir modlog kanalı belirt`).setColor("GREEN"));
 

db.set(`codeminglog_${message.guild.id}`, logk.id)

message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:uzaylih_evt:700331722012622929> Mod-Log kanalı başarıyla ${logk} olarak ayarlandı`).setColor("GREEN"));

console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};

//CodEming //Jr.Escomat

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0 ,//Kendi permlerinize göre ayarlayın,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};