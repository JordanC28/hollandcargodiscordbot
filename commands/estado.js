const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
    message.channel.send("Bien chingón perro:v!");
  }
  module.exports.help = {
      name: "estado"
    }