const Discord = require('discord.js')

exports.run = async (client,message,args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
        const embed = new Discord.RichEmbed()
 .setColor('GRAY')
                .setDescription(`<a:yan:1096417554710417518> Bize Destek Olmak İçin; \n<a:yan:1096417554710417518> ` +
     `İninal Barkod : 4092560678078 \n<a:yan:1096417554710417518> Destekleriniz İçin Teşekkürler <3`  )
                .setTimestamp()
        message.channel.send({embed})
}


exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: ['bağışyap','bağış'], 
    permLevel: 0,
    kategori: 'kullanıcı' 
}

exports.help = {
    name: 'bağış', 
    aciklama: 'Bu bir bağış komuttur.', 
    kullanim: 'bağış'
}