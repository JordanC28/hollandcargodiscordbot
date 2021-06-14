const {client} = require('../holland');
const {message} = require('../holland')
const config = require("../config.json");
const prefix = config.prefix

client.on("ready", () => {
        console.log(`Estoy listo!, 
                 conectado en ${client.guilds.cache.size} servidores y  ${client.users.cache.size} usuarios.`);
     
        client.user.setPresence( {
            activity: {
                name: `-help | Estoy en ${client.guilds.cache.size} servidores, genial no?.`,
                type: "WATCHING"
            },
            status: "online"
         });
     
     });
     

