const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  message.delete().catch() 
      let user;

      if (message.mentions.users.first()) {
           user = message.mentions.users.first();
      } else {
           user = message.author;
       }

       const member = message.guild.member(user);

       const embed = new Discord.RichEmbed()
          .setColor('#084d6e')
          .setThumbnail(user.avatarURL || "https://cdn.discordapp.com/attachments/758548412244951062/761133578758651914/H2_2.png")
          .setTitle(`${user.username}#${user.discriminator}`)
          .addField('ID:', `${user.id}`, true)
          .addField('Apodo:', `${user.username !== null ? `${user.username}` : 'None'}`, true)
          .addField('Cuenta Creada:', `${moment.utc(user.createdAt).format('dddd, Do MMMM YYYY, HH:mm:ss')}`, true)
          .addField('Fecha de Ingreso:', `${moment.utc(member.joinedAt).format('dddd, Do MMMM YYYY, HH:mm:ss')}`, true)
          .addField('Jugando a:', `${user.presence.status}`, true)
          .addField('Juego:', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
          .addField('Roles:', member.roles.map(roles => `<@&${roles.id}>`).join('\n '), true)
  message.channel.send({embed});
  
  message.delete().catch();
}
module.exports.help = {
  name: "whois",
  description: "informacion del usuario"
}