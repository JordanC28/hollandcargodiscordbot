const {client} = require('../holland');
const {message} = require('../holland')
const config = require("../config.json");
const prefix = config.prefix

client.on("ready", async () => {
        console.log("Estoy listo!");
        client.user.setActivity(`latinosgaming.com`, { type: 'Watching'})
        console.log(prefix);
        client.channels.get("842031637633957908").send(`El bot se a cargado para ${client.users.cache.size} miembros, sin errores ni problemas.`);
        
        //acá irán todos los mensajes de reacción en este y sincronización
        /* Reaction */

        //Mensaje de reglas
       
        client.channels.get("758542185007415387").fetchMessage("761085949014704129");



})

