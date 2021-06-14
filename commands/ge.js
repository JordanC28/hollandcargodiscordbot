const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    if (message.member.roles.has("758538816885358624")){
    }else{
        return message.reply("acceso denegado, comando solo disponible para <#742510815965479022>").then(m => m.delete(10000));
    }

    var options = [
        "https://tenor.com/view/greetings-good-evening-flowers-cherry-blossoms-nature-gif-16556509", 
        "https://tenor.com/view/hello-kitty-have-agood-evening-lay-down-gif-12940132", 
        "https://tenor.com/view/good-evening-gif-10751006", 
        "https://tenor.com/view/good-evening-happy-hello-greetings-peek-gif-16533528", 
        "https://tenor.com/view/good-evening-good-night-whatever-begins-also-ends-sunset-gif-12666018",
        "https://media.giphy.com/media/SIb2l6sHfGKNG/giphy.gif",
        "https://media.giphy.com/media/1msBocXxuxFvbvXM9H/giphy.gif",
        "https://media.giphy.com/media/l0Ex8iNKgyFqml356/giphy.gif"
    ];
    var response = options[Math.floor(Math.random()*options.length)];
    message.channel.send("Buenas noches " + message.member + ", ¡Espero que hayas tenido un gran día! " + response).then().catch(console.error);
}
module.exports.help = {
    name: "ge"
}