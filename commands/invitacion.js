const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 

    const embed = new Discord.RichEmbed()
      .setTitle("Invitación a Holland Cargo")
      .setColor('#084d6e')
      .setDescription("acá te dejamos la invitación a nuestro **DISCORD** [https://discord.gg/4VbkeME](https://discord.gg/4VbkeME) para que puedas invitar a tus amigos a nuestro servidor.")
      .setFooter("Holland Cargo", client.user.avatarURL)
      .setThumbnail('https://media.discordapp.net/attachments/758548412244951062/761076086385541130/H2_1_copia.png?width=943&height=475')
      .setTimestamp()
      .setURL("https://discord.gg/4VbkeME")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "invitacion",
        category: "advertising",
    
    }