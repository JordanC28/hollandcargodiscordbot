const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete()
  if(message.author.id === "712395861165998124"){
      message.guild.channels.get("656363899012251648").fetchMessage("664670223672147970").then(m => m.react(args[0]))
  }
}

module.exports.help = {
    name: "roles"
  }