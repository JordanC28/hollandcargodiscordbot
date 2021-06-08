const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
  if (message.member.roles.has("841911350371942401")){
      
  } else {
      message.reply("No puedes usar este comando debido a que solo  <@841911350371942401> puede hacer publicidad en el server.").then(m => m.delete(10000))
  }
    const embed = new Discord.RichEmbed()
      .setTitle("Latinos Gaming")
      .setColor('#0ff1616')
      .setDescription("Latinos Gaming se fundo juntos con cuatros personas, con la idea de crear una comunidad flexible, donde todas las personas tienen la oportunidad compartir momentos con miembros de otras nacionalidades. Ahora buscamos crear una comunidad segura para todos sin importar las edades, lo importante es que se diviertan y se sienta seguros del ambiente. Costantemente nos encontramos mejorando para toda la comunidad, hacemos mejorar escuchando sus sugerencias, esos detalles los tomamos en cuenta para mejorar y a si cualquier persona se adapta de una manera sencilla. Esta comunidad esta abierta a todo tipo de gamer, esos que buscan un espacio donde demostrar sus habilidades y destrezas.")
      .setFooter("Latinos Gaming", client.user.avatarURL)
      .setThumbnail('https://cdn.discordapp.com/attachments/762121963950702602/851154822680936483/image0.gif')
      .setTimestamp()
      .setURL("https://discord.io/latinosgaming")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "lg",
        category: "advertising",
    
    }