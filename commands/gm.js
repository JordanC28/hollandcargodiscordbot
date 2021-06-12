const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    message.delete().catch() 
    if (message.channel.id == "742499773826859028" || message.member.roles.has("742510815965479022")){
    }else{
        return message.reply("acceso denegado, comando solo disponible para <#742510815965479022>").then(m => m.delete(10000));
    }

    var options = [
        "https://tenor.com/view/good-morning-coffee-grinch-gif-13099550", 
        "https://tenor.com/view/milk-milk-and-mocha-bears-good-morning-love-cute-gif-14401648", 
        "https://tenor.com/view/good-morning-funny-animals-insomnia-cat-tired-crazy-cute-gif-12542605", 
        "https://tenor.com/view/good-morning-stitch-gif-10228845", 
        "https://tenor.com/view/good-morning-sunshine-dog-cute-gif-15765872",
        "https://media.giphy.com/media/JoHCsfie23fag/giphy.gif",
        "https://media.giphy.com/media/Nwz6NZkToYC4M/giphy.gif",
        "https://media.giphy.com/media/dilBP4FslWpm8/giphy.gif",
        "https://media.giphy.com/media/elhuGTZkFbq7nJOnjy/giphy.gif",
        "https://media.giphy.com/media/Md4hX5a83YNt75lpZu/giphy.gif",
        "https://media.giphy.com/media/cNO3rOkE7TOTnI6Zf4/giphy.gif"
    ];
    var response = options[Math.floor(Math.random()*options.length)];
    message.channel.send("Buenos días " + message.member + ", esperamos que tengas un gran día! " + response).then().catch(console.error);
}
module.exports.help = {
    name: "gm"
}