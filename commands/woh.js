const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
  if (message.member.roles.has("758536290156937248")){
      
  } else {
      message.reply("No puedes usar este comando debido a que solo  <@758536290156937248> puede hacer publicidad en el server.").then(m => m.delete(10000))
  }
    const embed = new Discord.RichEmbed()
      .setTitle("World of Haulers")
      .setColor('PURPLE')
      .setDescription("If you are looking for an application to register your loads of ETS2 and ATS here we recommend this new project. You can visit their [Website](https://www.worldofhaulers.com/) and [Discord](https://discord.gg/4YTvG5V), go and give them a lot of love remember to follow the rules.")
      .setFooter("Holland Cargo advertising", client.user.avatarURL)
      .setThumbnail('https://cdn.discordapp.com/attachments/655881963327979562/666715251819151370/logo-bot.jpg')
      .setTimestamp()
      .setURL("https://discord.gg/4YTvG5V")
      
      message.channel.send ({embed});
        
    }
      module.exports.help = {
        name: "woh",
        category: "advertising",
    
    }