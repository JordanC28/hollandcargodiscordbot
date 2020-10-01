module.exports.run = async (client, message, args) => {
    message.delete() // Deletes called message
  if(message.author.id === "712395861165998124"){
    try {
        const code = args.join(" ");
        let evaled = eval(code);
   
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(`\`${code}\` returns\n\`\`\`javascript\n${evaled}\n\`\`\``);
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
      }
  }
}
  module.exports.help = {
    name: "eval"
  }
