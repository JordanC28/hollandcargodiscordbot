const discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.find('name', config.reportsChannel);

    if (!target) return message.reply('muestra el ID de un miembro!');
    if (!reason) return message.reply('especifica una razón!');
    if (!reports) return message.reply(`crea un canal llamado ${config.reportsChannel} para loguear los reportes!`);

    let embed = new discord.RichEmbed()
        .setColor('#084d6e')
        .setThumbnail(target.user.avatarURL)
        .addField('Miembro reportado: ', `${target.user.username} with an ID: ${target.user.id}`)
        .addField('Reportado por: ', `${message.author.username} with an ID: ${message.author.id}`)
        .addField('Hora del reporte: ', message.createdAt)
        .addField('Reportado en ', message.channel)
        .addField('Razón del reporte: ', reason)
        .setFooter('Información de la persona reportada', target.user.displayAvatarURL);

    message.channel.send(`${target} fue reportado por  el moderador ${message.author} por ${reason}`);
    reports.send(embed);

};

module.exports.help = {
    name: 'report',
    aliases: []
};