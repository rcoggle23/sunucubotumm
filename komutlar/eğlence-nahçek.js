const Discord = require('discord.js');

exports.run = (client, message, args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('<a:uyar:1114935085406367794>  Nah çekeceğin kişiyi etiketlemelisin.');

    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj}! ${message.author} Sana Nah Çekti!**`)
    .setImage(`https://cdn.discordapp.com/attachments/708336677000577116/719292834515255376/uzaylbot.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nahçek',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'nahçek'
};