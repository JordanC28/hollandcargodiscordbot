const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
  if (message.member.roles.has("758536290156937248")){
      
  } else {
      message.reply("No puedes usar este comando debido a que solo  <@758536290156937248> puede hacer publicidad en el server.").then(m => m.delete(10000))
  }
    const embed = new Discord.RichEmbed()
      .setTitle("Holland Cargo")
      .setColor('#084d6e')
      .setDescription("Se fundó en septiembre de 2020, nuestro objetivo es construir una comunidad como ninguna otra donde podamos ofrecer a nuestros conductores la mejor experiencia en el transporte virtual y principalmente generar un buen ambiente de calidad. En Holland no tenemos reglas de actividad estrictas, permitimos que nuestros miembros puedan asistir a los convoyes que se ajusten a sus horarios. De esta manera, hay menos presión sobre nuestros conductores y hace que HLLC sea un VTC mucho mas relajada y amigable. Lamentablemente no contamos con una historia y una trayectoria de tres o cuatro años, pero nuestras bases se respaldan en los valores. Amistad, confianza, respeto y amabilidad.")
      .setFooter("Holland Cargo advertising", client.user.avatarURL)
      .setThumbnail('https://cdn.discordapp.com/attachments/758548412244951062/761133578758651914/H2_2.png')
      .setTimestamp()
      .setURL("https://discord.gg/4VbkeME")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "lg",
        category: "advertising",
    
    }