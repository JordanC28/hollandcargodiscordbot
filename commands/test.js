let ping = Math.floor(message.client.ping);
message.channel.send("Cargando...").then(m => {
  m.edit({embed: {
    title: "Pong!:ping_pong: ",
    description: `Mensaje: **${Math.floor(
      m.createdTimestamp - Date.now()
    )}ms**, API: **${ping}ms**`
    }});
});