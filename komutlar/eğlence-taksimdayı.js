const Discord = require('discord.js')
const client = new Discord.Client()

module.exports.run = async (bot, message, args) => {

if(message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) {
    return message.author.send('bu komut sadece sunucularda kullanılabilir.**');
  }

    let replies = ["https://cdn.discordapp.com/attachments/708336677000577116/719298396480864256/tagsimdayuzayl.gif"]
  
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("helo tagsim havagiii")
        .setColor("GRAY")
        .setFooter(`${message.author.tag} tarafından istendi `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
 

    
 }; 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['taksimdayı'],
  permLevel: 0
};

exports.help = {
  name: 'taksim-dayı',
  description: 'taksim dayı gifi atar.',
  usage: 'taksim-dayı'
};