const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (client, message, params) => {
if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }

  if(params[0]) if(params[0] === 'sunucu-ikon'){
    if(!message.guild) return message.channel.send('Bu sadece sunucularda kullanılabilir.');
    if(!message.guild.iconURL) return message.channel.send('Bu sunucunun ikonu yok.');

    Jimp.read(message.guild.iconURL, function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
        image.fade(0.5).write('image.png');
        setTimeout(() => {
          message.channel.sendFile('image.png');
        }, 500);
    });
    return;
  }
  if(message.mentions.users.first()) {
      Jimp.read(message.mentions.users.first().avatarURL, function (err, image){
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.fade(0.5).write('image.png');
          setTimeout(() => {
            message.channel.sendFile('image.png');
          }, 500);
      });
  } else{
    Jimp.read(message.author.avatarURL, function (err, image){
        if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen Yapımcıya Bildirin.');
        image.fade(0.5).write('image.png');
        message.channel.sendFile('image.png');
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fade',
  description: 'Avatarın renklerini ters çevirir.',
  usage: 'invert [@<kişi ismi>]'
};