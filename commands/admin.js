const Discord = require('discord.js');
const config = require('../config.json')
const prefix = config.prefix

module.exports.run = async (client, message, args) => {
  message.delete().catch()
  if (message.channel.id == "758548412244951062"){
      
  } else {
      return message.reply("Lo lamento no puedes usar el comando debido a que no eres parte del **STAFF** o estás en el canal equivocado").then(m => m.delete(5000))
  }
      message.channel.send('Hola acá te dejamos unos comandos que puedes usar como administrador del servidor.**\n```\n'+
                      '-> '+prefix+'report :: reporta a un usuarion.\n'+
                      '-> '+prefix+'say    :: Dice algo con el bot.\n'+
                      '-> '+prefix+'clear + cantidad :: Limpia mensajes en el servidor\n'+
                      '-> '+prefix+'invitación :: Muestra la invitación del server.\n```\n\n');
}

module.exports.help = {
  name: "admin"
}