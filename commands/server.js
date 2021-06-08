const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete().catch() 

    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "europe": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor('#ff1616')
        .addField("Nombre: ", message.guild.name, true)
        .addField("ID: ", message.guild.id, true)
        .addField("Propietario: ", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Región: ", region[message.guild.region], true)
        .addField("Total | Humanos | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("nivel de verificación: ", verifLevels[message.guild.verificationLevel], true)
        .addField("Canales: ", message.guild.channels.size, true)
        .addField("Roles: ", message.guild.roles.size, true)
        .addField("Fecha de creación: ", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.SiconURL)
    message.channel.send({embed});
    message.delete().catch();
}

module.exports.help = {
    name: "server",
    description: "Muestra información del servidor!"
}