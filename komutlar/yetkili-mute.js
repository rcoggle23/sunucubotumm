const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

 if(message.author.bot || message.channel.type === "dm") return;
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**<a:uyar:1114935085406367794> Bu Komutu Kullanmak İçin __Yönetici__ Yetkisine Sahip Olmalısın.**`)

  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }  

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("<a:uyar:1114935085406367794> Bir Kullanıcı Gir.");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("<a:uyar:1114935085406367794> Süreyi Girmeyi Unuttun! \nsaniye(s), Dakika(m), Saat(h), Gün(d) \n Örnek Kullanım : `.mute @kullanıcı 1m`");

  await(tomute.addRole(muterole.id));
  message.reply(`<a:uzaylih_evt:700331722012622929> <@${tomute.id}> Adlı Kişi ${ms(ms(mutetime))} Saniye Kadar Mutelendi!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<a:uzaylih_evt:700331722012622929> <@${tomute.id}> Adlı Kişinin Mutesi Kalktı!`);
  }, ms(mutetime));


//yarrak kafalı gloss
}
exports.conf = {
    enabled: true,
    aliases: ['sustur',"mute"],
    permLevel: 0
};

exports.help = {
    name: 'mute',
    description: 's',
    usage: 'tekrar'
};