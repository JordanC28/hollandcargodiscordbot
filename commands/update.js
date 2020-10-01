const { Client, RichEmbed } = require('discord.js');
const { prefix } = require('../config');

exports.run = async (client, message, args) => {
    message.delete()
    if(message.author.id === "712395861165998124"){
        let embed = new RichEmbed()
            .setColor('#ffff00')
            .setTitle("Reglas de la comunidad y servidor")
            .setDescription("Acá podrás solicitar los roles de los siguientes juegos: **AmongUS**, **GTA-V RolePlay** y **CSGO** para poder usar los canales junto a tus amigos.")
            .setFooter("última actualización")
            .setTimestamp()

        client.channels.get("757801977886277664").fetchMessage("757819448483774595").then(msg => msg.edit(embed))
    }

}

module.exports.help = {
name: "update"
} 