const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
require("./functions")(client);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

module.exports = {
    client: client

    
};


////// Token del bot de la comunidad
client.login(process.env.BOT_TOKEN)
