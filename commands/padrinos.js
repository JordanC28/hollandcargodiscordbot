const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 

    const embed = new Discord.RichEmbed()
      .setTitle("THE GODFATHER")
      .setColor('#084d6e')
      .setDescription("Acá te dejamos la invitación a nuestra **Comunidad de Discord** [https://discord.io/latinosgaming](https://discord.io/latinosgaming) para que puedas invitar a tus amigos a nuestro servidor.")
      .setFooter("Latinos Gaming", client.user.avatarURL)
      .setThumbnail('https://cdn.discordapp.com/attachments/762121963950702602/851154822680936483/image0.gif')
      .setTimestamp()
      .setURL("https://discord.io/latinosgaming")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "padrinos",
        category: "advertising",
    
    }