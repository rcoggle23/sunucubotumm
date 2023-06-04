const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  
  let sunucu = message.guild;
  let uyarilacak = message.mentions.users.first();
  let sebep = args.slice(1).join(' ');
  if (message.mentions.users.size < 1) return message.channel.send('<a:yan:1096417554710417518> Uyaracağın Kişiyi Etiketlemelisin.\nÖrnek Kullanım : `.uyar @kişi sebep`').catch(console.error);
  if (sebep.length < 1) return message.channel.send('<a:yan:1096417554710417518> Uyarı Sebebini Yazmalısın.\nÖrnek Kullanım : `.uyar @kişi sebep`');
  if (sebep.length < 3) return message.channel.send('<a:yan:1096417554710417518> En Az 3 Harf Girmelisin.\nÖrnek Kullanım : `.uyar @kişi sebep`');
  message.channel.send('<a:yan:1096417554710417518> **Kişiyi başarıyla uyardım, özel mesajlarında uyarısı gözükecektir.**')
  return uyarilacak.send(`${sunucu} Sunucusunda __\`${sebep}\`__ Sebebiyle Uyarıldın.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı', 'uyarıver'],
  permlevel: 0
};

exports.help = {
  name: 'uyar',
  description: 'Belirtilen kullanıcıyı özel mesajlarında gözükecek şekilde uyarır.',
  usage: 'uyarı'
};
