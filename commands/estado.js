const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
    message.channel.send("Server y bots operativos");
  }
  module.exports.help = {
      name: "estado"
    }