const Discord = require('discord.js')

exports.run = async (client,message,args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
        const embed = new Discord.RichEmbed()
 .setColor('GRAY')
                .setDescription(`<a:yan:1096417554710417518> Discord üzerinden destek vermiyoruz. \n<a:yan:1096417554710417518> ` +
     `Tek Destek Adresimiz Sahibin İnstagram Hesabıdır. \n<a:yan:1096417554710417518> İnstagram Adresimiz : **\`denichx\`**`  )
                .setTimestamp()
        message.channel.send({embed})
}


exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ['iletisim'], 
    permLevel: 0,
    kategori: 'kullanıcı' 
}

exports.help = {
    name: 'iletişim', 
    aciklama: 'Bu bir bağış komuttur.', 
    kullanim: 'bağış'
}