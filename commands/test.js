module.exports = {

    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging....`);

        msg.edit(`🏓 Pong!
        Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
        API Latency is ${Math.round(client.ping)}ms`);
    }

}
module.exports.help = {
    name: "test",
    aliases: []
}

                     
let ping = Math.floor(message.client.ping);
message.channel.send("Cargando...").then(m => {
  m.edit({embed: {
    title: "Pong!:ping_pong: ",
    description: `Mensaje: **${Math.floor(
      m.createdTimestamp - Date.now()
    )}ms**, API: **${ping}ms**`
    }});
});