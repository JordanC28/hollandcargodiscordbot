const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    message.delete().catch()
    if (message.member.roles.has("758538816885358624")){
    }else{
        return message.reply("acceso denegado, comando solo disponible para <#742510815965479022>").then(m => m.delete(10000));
    }

    var options = [
        "https://tenor.com/view/puppy-goodnight-gif-9418399", 
        "https://tenor.com/view/milk-and-mocha-bear-couple-sleepy-texting-cute-gif-12498624", 
        "https://tenor.com/view/goodnight-sleep-well-gif-9961423", 
        "https://tenor.com/view/sleepy-drawfs-goodnight-gif-14600220", 
        "https://tenor.com/view/sleep-tight-goodnight-gif-5416967",
        "https://media.giphy.com/media/Sc58cfnpEPsHlClCQs/giphy.gif",
        "https://media.giphy.com/media/mguPrVJAnEHIY/giphy.gif",
        "https://media.giphy.com/media/OjmrBW4ZQbWjkq6RkC/giphy.gif",
        "https://media.giphy.com/media/3o6fJ5LANL0x31R1Ic/giphy.gif",
        "https://media.giphy.com/media/cAuwW15e54lFGXoMyc/giphy.gif",
        "https://media.giphy.com/media/l1J9REbVPRgCVSJb2/giphy.gif",
        "https://media.giphy.com/media/CDVoZtvOq4Io0/giphy.gif",
        "https://media.giphy.com/media/IcdH4BchntX19U7Psm/giphy.gif",
        "https://media.giphy.com/media/g96QRNjWUvdKw/giphy.gif",
        "https://media.giphy.com/media/bHeKwC5anwOw8/giphy.gif"
    ];
    var response = options[Math.floor(Math.random()*options.length)];
    message.channel.send("Descansa " + message.member + ", duerme bien! " + response).then().catch(console.error);
}
module.exports.help = {
    name: "gn"
}