const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
  if (message.member.roles.has("758536290156937248")){
      
  } else {
      message.reply("No puedes usar este comando debido a que solo  <@758536290156937248> puede hacer publicidad en el server.").then(m => m.delete(10000))
  }
    const embed = new Discord.RichEmbed()
      .setTitle("Latinos Gaming")
      .setColor('#084d6e')
      .setDescription("En LATINOS GAMING, queremos llevarte a vivir los juegos en primera persona, y no solo juegos si no lo geek y entretenimiento.

      Nuestra Misión
      
      1- Ser la comunidad una de las mejores de Latinoamérica.
      2- Llevar calidad de contenido a todo al publico geek y gamer.
      3- Generar espacios donde los jugadores serios y casuales puedan reunirse y disfrutar de los juegos.
      
      Nuestra Visión
      
      1- Dar una mirada objetiva hacia este ambiente.
      2- Disfrutar al máximo la entretención y las comodidades de nuestro servidor.
      3- Actuando de manera fresca, espontanea y cercana a nuestra comunidad.")
      .setFooter("Holland Cargo advertising", client.user.avatarURL)
      .setThumbnail('https://cdn.discordapp.com/attachments/758548412244951062/761133578758651914/H2_2.png')
      .setTimestamp()
      .setURL("https://discord.gg/4VbkeME")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "woh",
        category: "advertising",
    
    }