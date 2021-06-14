const {client} = require('../holland');

client.on("guildMemberRemove", function(member){
    var channel = client.channels.get("834590430242013214").send({embed:{ //channel ID
        color: 15158332,
        author: {
            name: member.user.tag,
            icon_url: member.user.avatarURL || "https://media.discordapp.net/attachments/758548412244951062/761076086385541130/H2_1_copia.png?width=943&height=475"
        },
        description: `Un miembro de nuestro discord se ha ido! ${member.user.tag}`,
        thumbnail: {
            url: member.user.avatarURL || member.guild.iconURL
        },
        footer: {
            text: `User ID: ${member.id}`,
        }
    }})
})

client.on("guildMemberRemove", (member) => {
    let canal = client.channels.cache.get("839622902768467978"); 
    canal.send(`${member.user}, a dejado el servidor.`);
   
});