const Discord = require("discord.js"); //Dcs Ekibi

exports.run = (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  

const avatar = args[0]
if (!avatar) return message.channel.send("<a:uyar:1114935085406367794> Bir Link Girmelisin!")
const dcs_e = new Discord.RichEmbed()
.setTitle("Sunucu Resmi Değiştirildi")
.setColor("GREEN")
.setTimestamp()
.setImage(avatar)
message.channel.send(dcs_e)
message.guild.setIcon(avatar)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
   
};

exports.help = {
  name: 'sunucu-avatar-değiştir',
 
};