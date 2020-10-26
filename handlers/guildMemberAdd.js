const {client} = require('../holland')

client.on("guildMemberAdd", function(member){
    client.channels.get("758546977671086080").send({embed:{
        color: '#084d6e',
        title: `**Bienvenido al Discord de Holland Cargo**`,
        description: `Bienvenido ${member}.`,
        thumbnail: {
            url: member.user.avatarURL || "https://media.discordapp.net/attachments/758548412244951062/761133578758651914/H2_2.png?width=679&height=679"
        },
        fields: [
            {
                name: "Información",
                value: "Por favor leer nuestras <#758542086113984522> para mantener un orden en el discord."
            },
            {
                name: "¿Quieres pertenecer a Holland Cargo?",
                value: "Por favor lee nuestros <#758759495743570030> y envia el formulario de ingreso y pronto un Recruiter se contactará contigo."
            },
            {
                name: `¿Deseas solicitar algún rol?`,
                value: "Por favor ve a <#761121208745459752> y adquiere tu rol."
            }
        ],
        footer: {
            text: member.guild.name,
            icon_url: member.guild.iconURL,
        }
    }})
    console.log(`${client.user.tag} connected to Discord`);
    var role = member.guild.roles.find("id", "758538816885358624");
    member.addRole(role);
})

client.on("guildMemberAdd", function(member){
    var channel = client.channels.get("758556800445448193").send({embed:{
        color: 3066993,
        author: {
            name: member.user.tag,
            icon_url: member.user.avatarURL || "https://media.discordapp.net/attachments/758548412244951062/761076086385541130/H2_1_copia.png?width=943&height=475"
        },
        description: `${member.user.tag} a entrado al servidor`,
        thumbnail: {
            url: member.user.avatarURL || member.guild.iconURL
        },
        footer: {
            text: `User ID: ${member.id}`,
        }
    }})
})