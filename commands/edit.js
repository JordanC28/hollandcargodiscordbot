const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete()
  if(message.author.id === "712395861165998124"){
      message.guild.channels.get(args[0]).fetchMessage(args[1]).then(m => m.edit(args.slice(2).join(" ")))
  }
}

module.exports.help = {
    name: "edit"
  }