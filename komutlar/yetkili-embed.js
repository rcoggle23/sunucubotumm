const Discord = require("discord.js");  

module.exports.run = async (bot, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
   let wasait = args.slice(0).join(' ');
  if (wasait.length < 1) return message.channel.send('<a:uyar:1114935085406367794> Herhangi Bir Yazı Yazmalısın.\nÖrnek Kullanım : `.embed yazı`');
  const CodEmingembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${wasait}`)
    message.channel.send(CodEmingembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'embed',
  description: 'Yazdığınızı Mesajı Embedli Atar.',
  usage: 'embed',
  category: 'Kullanıcı'
}; 