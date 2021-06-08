const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
    message.channel.send("Servidor de Latinos Gaming y sus bot estan funcionando correctamente.");
  }
  module.exports.help = {
      name: "estado"
    }