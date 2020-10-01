const Discord = require('discord.js');
const { RichEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    
           message.delete();
           if(message.mentions.channels.first()){
            const roleColor = message.guild.me.highestRole.hexColor;
    
            if (args[0].toLowerCase() === "embed") {
                const embed = new RichEmbed()
                    .setDescription(args.slice(1).join(" "))
                    .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);
    
                client.channels.get(message.mentions.channels.first().id).send(embed);
            } else {
                client.channels.get(message.mentions.channels.first().id).send(args.slice(1).join(" "));
            }
           } else {
           
                if (!message.member.hasPermission("MANAGE_MESSAGES"))
                    return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000));
        
                if (args.length < 0)
                    return message.reply("Nothing to say?").then(m => m.delete(5000));
        
                const roleColor = message.guild.me.highestRole.hexColor;
        
                if (args[0].toLowerCase() === "embed") {
                    const embed = new RichEmbed()
                        .setDescription(args.slice(1).join(" "))
                        .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);
        
                    message.channel.send(embed);
                } else {
                    message.channel.send(args.join(" "));
                }
            }
        }
    
module.exports.help = {
    name: "say"
  }