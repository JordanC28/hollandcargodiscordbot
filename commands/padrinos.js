const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 

    const embed = new Discord.RichEmbed()
      .setTitle("THE GODFATHER")
      .setColor('#ff1616')
      .setDescription("De ahora en adelante denominados padrinos a todos los miembros que apoyen con las mejoras de nitro al servidor se les recompensará, para ellos hemos creado lo siguiente:")
      .setDescription("RECOMPENSAS")

1.- Nombre de rol totalmente personalizado (el nombre debe cumplir con las reglas del servidor)
2.- Color de rol personalizado
3.- Chat de texto totalmente exclusivo para los padrinos (la única regla que aplica ahí es la NFSW).
4.- Canal de voz totalmente exclusivo.
5.- Se los pondrá en el muro de la fama de este discord (estará más abajo de este mensaje).
6.- Se implementará en un comando del bot propio de nuestro servidor a todos los padrinos, de tal manera cualquier miembro puede ejecutar el comando y el bot les desplazará una lista.

¿Quieres apoyarnos?
Con un mejora que realices al servidor nos ayudarás mucho, debido a que realizamos eventos donde compartimos pantalla, nos resulta de gran importancia disponer de estas mejoras.")
      .setFooter("Latinos Gaming", client.user.avatarURL)
      .setImage('https://cdn.discordapp.com/attachments/762121963950702602/851153611388092466/BANNER.png')
      .setThumbnail('https://cdn.discordapp.com/attachments/762121963950702602/851154822680936483/image0.gif')
      .setTimestamp()
      .setURL("https://discord.io/latinosgaming")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "padrinos",
        category: "advertising",
    
    }