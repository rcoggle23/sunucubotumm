const ayarlar = require("../ayarlar.json");
let talkedRecently = new Set();
module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return
  }
  talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 1500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {


    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));

  }else{
    if(command == '') return;
message.delete()
    message.reply("<a:uzaylih_hyr:700331725238173747> **Komutlarım Arasında** `" + command + '` **İsimli Bir Komut Bulamadım.**').then(msg => msg.delete(5000));
  }

  if (cmd) {
    if(cmd.conf.enabled == false) return message.reply("Bu kod şu anda bakımda veya kullanıma kapalı!").then(msg => msg.delete(5000));
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};