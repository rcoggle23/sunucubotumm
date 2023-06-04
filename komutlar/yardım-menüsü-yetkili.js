const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;


exports.run = (client, message, args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
    
  }

let davet = "https://www.kisa.link/discord-uzayli-bot"
  let pages = [
              'Moderasyon Komutları Menüsüne Hoşgeldiniz\n\nKomutları Görmek İçin :rewind: ve :fast_forward: emojilerini kullabilirsin.',
              `\n** <a:yan:1096417554710417518> [${prefix}ban](${davet})** : Etiketlediğiniz kullanıcıyı sunucudan yasaklar.\n** <a:yan:1096417554710417518> [${prefix}kick](${davet})** : Etiketlediğiniz kişiyi sunucudan atar.\n**<a:yan:1096417554710417518> [${prefix}botgüvenlik](${davet})** : Sunucuya bot eklenmesini açar/kapatırsınız.\n**<a:yan:1096417554710417518> [${prefix}mod-log](${davet})** : Mod-log kanalını ayarlarsınız.\n** <a:yan:1096417554710417518> [${prefix}otorol](${davet})** : Otorolü ayarlarsınız. \n** <a:yan:1096417554710417518> [${prefix}otorol-kapat](${davet})** : Otorolü kapatırsınız.\n** <a:yan:1096417554710417518> [${prefix}son-üye](${davet})** : Sunucuya gelen son üyeyi ses kanalında gösterir.\n** <a:yan:1096417554710417518> [${prefix}sil](${davet})** : Belirttiğiniz kadar mesajı siler.\n`,
              `\n** <a:yan:1096417554710417518> [${prefix}reklamengel](${davet})** : Reklam korumasını açar/kapatırsınız.\n** <a:yan:1096417554710417518> [${prefix}sayaç](${davet})** : Sayaç sistemini ayarlarsınız.\n** <a:yan:1096417554710417518> [${prefix}sayaç-kapat](${davet})** : Sayacı sistemini kapatırsınız.\n** <a:yan:1096417554710417518> [${prefix}ses-limit](${davet})** : İd'sini yazdığınız ses kanalının limitini ayarlarsınız.\n** <a:yan:1096417554710417518> [${prefix}sunucu-avatar-değiştir](${davet})** : Sunucunun avatarını değiştirirsiniz.\n** <a:yan:1096417554710417518> [${prefix}yavaşmod](${davet})** : Yavaşmodu ayarlarsınız.\n** <a:yan:1096417554710417518> [${prefix}uyar](${davet})** : Etiketlediğiniz kişiyi dm den uyarırsınız. \n** <a:yan:1096417554710417518> [${prefix}embed](${davet})** : Yazdığınız mesajı embedli atar. `,
              `\n** <a:yan:1096417554710417518> [${prefix}öneri-ayarla](${davet})** : Öneri kanalını ayarlarsınız.\n** <a:yan:1096417554710417518> [${prefix}görselkanal](${davet})** : Belirttiğiniz kanala sadece resim atılmasını sağlar.\n** <a:yan:1096417554710417518> [${prefix}kayıt-sistemi](${davet})** : Kayıt sistemini ayarlarsınız.\n** <a:yan:1096417554710417518> [${prefix}unban](${davet})** : İd'sini girdiğiniz kişinin banını açar.\n** <a:yan:1096417554710417518> [${prefix}otobotsiliciaç](${davet})** : Botların mesajlarını 2 dakika sonra silmesini açar/kaparsınız.\n** <a:yan:1096417554710417518> [${prefix}otobotsilicikapat](${davet})** : Botların mesajlarını 2 dakika sonra silmesini açar/kaparsınız.\n** <a:yan:1096417554710417518> [${prefix}roller](${davet})** : Sunucudaki rolleri gösterir.\n** <a:yan:1096417554710417518> [${prefix}bototorol](${davet})** : Sunucuya giren botlara otomatik olarak verilecek rolü ayarlarsınız. `,
              `\n** <a:yan:1096417554710417518> [${prefix}anons-yap](${davet})** : Süreli Mesajı Ayarlarsınız \n** <a:yan:1096417554710417518> [${prefix}anons-sil](${davet})** : Süreli Mesaj Olan Kanaldaki Süreli Mesajı Silersiniz`
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⏪')
  .then(r => {
    msg.react('⏩')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('GREEN')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('GREEN')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["mod","yetkili"],
permLevel: 0
};

exports.help = {
name: 'moderasyon',
description: 'Yardım Listesini Gösterir',
usage: 'sayfalıyardım'
};