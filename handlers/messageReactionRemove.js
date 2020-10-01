const {client} = require('../holland');

client.on('messageReactionRemove', async (reaction, user) => {
    if(user.bot) return;
    
     // AMONGUS
    if (reaction.message.id == "761085949014704129") {
        /* Template
            if (reaction.emoji.id == "EMOJI ID"){
                reaction.message.guild.members.get(user.id).removeRole("ROLE ID", "ReactionRole -> ROLE NAME");
                client.channels.get("656363899012251648").send(user + ", you were removed from the ROLE NAME Role!").then(m => m.delete(5000))
            }
        */
       if (reaction.emoji.id == "761087431708508221"){
        reaction.message.guild.members.get(user.id).removeRole("758538813424533536", "ReactionRole -> Trainee");
        }

        if (reaction.emoji.id == "761087445834924042"){
            reaction.message.guild.members.get(user.id).removeRole("758536871604781067", "ReactionRole -> Friends");
            }
    };

});