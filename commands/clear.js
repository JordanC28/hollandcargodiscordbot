const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete().catch() 

  if (message.deletable) {
    message.delete();
}

// miembro no tiene permisos
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("No puedes eliminar mensajes, no tienes permisos necesarios....").then(m => m.delete(5000));
}

// Check if args[0] is a number
if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return message.reply("exacto... ¿Eso no es un número? Por cierto, tampoco puedo eliminar 0 mensajes.").then(m => m.delete(5000));
}

// Maybe the bot can't delete messages
if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("Lo siento ... no puedo borrar mensajes.").then(m => m.delete(5000));
}

let deleteAmount;

if (parseInt(args[0]) > 100) {
    deleteAmount = 100;
} else {
    deleteAmount = parseInt(args[0]);
}

message.channel.bulkDelete(deleteAmount, true)
    .then(deleted => message.channel.send(`Se han borrado \`${deleted.size}\` mensajes.`)).then(m => m.delete(5000))
    .catch(err => message.reply(`Algo salió mal... ${err}`));



}
  module.exports.help = {
      name: "clear"
    }