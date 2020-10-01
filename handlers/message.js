const {client} = require('../holland');	
const config = require('../config.json');	

client.on("message", async message => {	
    let admin = [712395861165998124]	
    if(message.author.bot) return;	
    if(message.channel.type === "dm"){	
        client.users.get("712395861165998124").send(`>>> New Message!\nUser: ${message.author}\nMessage: ${message.content}`)	
    }	
    let prefix = config.prefix;	
    let args = message.content.slice(prefix.length).trim().split(' ');	
    let cmd = args.shift().toLowerCase();	
    let command;	

    if (!message.content.startsWith(prefix)) return;	

    if (client.commands.has(cmd)) {	
        command = client.commands.get(cmd);	
    } else {	
        command = client.commands.get(client.aliases.get(cmd));	
    }	

    if (command) command.run(client, message, args);	



    // let cmd = client.commands.get(command.slice(prefix.length));	
    // if (cmd) cmd.run(client, message, args);	
});
