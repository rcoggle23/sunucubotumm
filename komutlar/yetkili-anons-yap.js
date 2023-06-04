const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms');

exports.run = async(client, message, args) => {
 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  

  let kanal = message.mentions.channels.first()
  if (!kanal) return message.reply(' <a:uyar:1114935085406367794> Yanlış kullanım! \nÖrnek Kullanım : `.anons-yap #kanal 5m  Deneme`')
  let sure = args[1]
  if (!sure) return message.reply(' <a:uyar:1114935085406367794> Yanlış kullanım! \nÖrnek Kullanım : `.anons-yap #kanal 5m  Deneme`')
  let mesaj = args[2]
  if (!mesaj) return message.reply(' <a:uyar:1114935085406367794> Yanlış kullanım! \nÖrnek Kullanım : `.anons-yap #kanal 5m  Deneme`')

  if (ms(sure) < 60000) return message.channel.send('Anonslar en az 5 dk olur!') 
  
  message.reply(`<a:uzaylih_evt:700331722012622929> Artık ${sure} aralığı ile ${kanal} adlı kanala, belirtilen mesaj **gönderilecek!**`)
  
  await db.set(`anonsk_${message.guild.id}_${kanal.id}`, kanal.id)
  await db.set(`anonss_${message.guild.id}_${kanal.id}`, ms(sure))
  await db.set(`anonsm_${message.guild.id}_${kanal.id}`, args.slice(2).join(' '))
  
  
   let sure2 = await db.fetch(`anonss_${message.guild.id}_${kanal.id}`) //ananı sikim oc
   if (!sure2) return
  
  
 setInterval(async()=>{
    let mesaj2 = await db.fetch(`anonsm_${message.guild.id}_${kanal.id}`)
    if (!mesaj2) return
    let kanal2 = await db.fetch(`anonsk_${message.guild.id}_${kanal.id}`)
   if (!kanal2) return
   let kanal3 = message.guild.channels.get(kanal2)
   if (!kanal3) return
   kanal3.send(mesaj2)
 }, sure2)
  
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
  kategori: 'moderasyon'
};

exports.help = {
  name: 'anons-yap', 
  description: 'Mesajınızı emoji haline getirir',
  usage: 'anons-yap <mesaj>'
};