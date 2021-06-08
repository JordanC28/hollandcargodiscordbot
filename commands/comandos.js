const Discord = require('discord.js');
const config = require('../config.json')
const prefix = config.prefix

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
  //canal donde desea enviar a usar los comandos 
     
        message.channel.send('**'+message.author.username+'**, Hola acá te dejamos unos comandos que puedes usar en nuestro servidor, si eres parte del staff usa el comando **!admin**\n```\n'+
                        '-> '+prefix+'discord :: Muestra la invitación al servidor.\n'+
                        '-> '+prefix+'botinfo    :: Muestra información del bot.\n'+
                        '-> '+prefix+'whois      :: Muestra información sobre un usuario mencionado.\n'+
                        '-> '+prefix+'server     :: Muestra información del servidor.\n```\n\n');
}

module.exports.help = {
    name: "comandos"
  }