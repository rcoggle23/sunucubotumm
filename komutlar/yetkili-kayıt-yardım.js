const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
 if(message.author.bot || message.channel.type === "dm") return;

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  } 

  
let davet = "https://www.kisa.link/discord-uzayli-bot"
let oy = "https://top.gg/bot/639826292619083816/vote"
let desteksunucu = "https://discord.gg/sJXqTeR"
  const yardım = new Discord.RichEmbed()
     .setColor('GRAY')
      .setThumbnail(client.user.avatarURL)
	   .setTitle("**Uzaylı Bot**")

// SADECE ORTA KISIM AYARLANCAK

     .addField("**:white_small_square: | Kayıt Komutları**",`\n
:white_small_square: | [**${prefix}kayıt-kanal-ayarla #kanal**](${davet}) - Kayıt Kanalını Ayarlar
:white_small_square: | [**${prefix}kayıt-log-kanal**](${davet}) - Kayıt Olan Kişileri Gösteren Kanalı Ayarlar
:white_small_square: | [**${prefix}isim-sistemi -uye- -yas-**](${davet}) - İsim Sistemini Ayarlar
:white_small_square: | [**${prefix}kayıt-verilecek-rol-ayarla**](${davet}) - Kayıt Olan Kişiye Verilecek Rol
:white_small_square: | [**${prefix}kayıt-alınacak-rol-ayarla**](${davet}) - Kayıt Olan Kişiden Alınacak Rol
:white_small_square: | [**${prefix}kayıt-sistemi-kapat**](${davet}) - Kayıt Sistemini Kapatır Ve Verileri Siler
:white_small_square: | [**${prefix}giriş-sistemi**](${davet}) - Giriş Mesajını Düzenler.
`)
.addField('**:white_small_square: | Not**', `:white_small_square: | Bütün Komutları Ayarlamasssanız Sistem Çalışmaz.`)

// SADECE ORTA KISIM AYARLANCAK
 return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıtsistemi'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kayıt-sistemi',
    description: 'yardım',
    usage: 'yardım'
  };