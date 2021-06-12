const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    message.delete().catch() 
    if (message.channel.id == "742499773826859028" || message.member.roles.has("742510815965479022")){
    }else{
        return message.reply("acceso denegado, comando solo disponible para <#742510815965479022>!!").then(m => m.delete(10000));
    }

    var options = [
        "https://tenor.com/view/good-afternoon-sunshine-sun-good-day-gif-12381167", 
        "https://tenor.com/view/busu6s-good-afternoon-gif-7860109", 
        "https://tenor.com/view/coffee-sunday-good-afternoon-gif-10179673", 
        "https://tenor.com/view/good-afternoon-russell-up-movie-gif-4814746", 
        "https://tenor.com/view/snoopy-peanuts-woodstock-sleeping-nap-gif-11621859",
        "https://media.giphy.com/media/69qoOqKRnQ90O3zvsV/giphy.gif",
        "https://media.giphy.com/media/1ncq2XAnrLN2d90Q3C/giphy.gif"
    ];
    var response = options[Math.floor(Math.random()*options.length)];
    message.channel.send("Buenas tardes, " + message.member + " " + response).then().catch(console.error);
}
module.exports.help = {
    name: "ga"
}