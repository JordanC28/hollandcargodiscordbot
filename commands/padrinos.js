const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 

    const embed = new Discord.RichEmbed()
      .setTitle("THE GODFATHER")
      .setColor('#ff1616')
      .setDescription("De ahora en adelante denominados padrinos a todos los miembros que apoyen con las mejoras de nitro al servidor se les recompensará, para ellos hemos creado lo siguiente:")
      .setDescription("RECOMPENSAS")
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