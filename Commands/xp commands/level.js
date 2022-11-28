module.exports = {
    name: "level",
    aliases: ['rank'],
    description: "Shows bot ping",
  async run(client, message, args){
      const canvacord = require("canvacord")
      const Discord = require("discord.js");
      const Levels = require("discord-xp"); 
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;
        
        const user = await Levels.fetch(mentionedMember.user.id, message.guild.id, true);
        if (!user) return message.channel.send("The member stated does not have any levels within the server.");
        const target = message.mentions.users.first() || message.author;
    
    const rank = new canvacord.Rank() // Build the Rank Card
        .setAvatar(target.displayAvatarURL({format: 'png', size: 512}))
        .setCurrentXP(user.xp - Levels.xpFor(user.level)) // Current User Xp
        .setRequiredXP(Levels.xpFor(user.level + 1) - Levels.xpFor(user.level) ) // We calculate the required Xp for the next level
        .setRank(user.position) // Position of the user on the leaderboard
        .setLevel(user.level) // Current Level of the user
        .setProgressBar("#1ABC9C")
        .setUsername(target.username)
        .setDiscriminator(target.discriminator);
        
    rank.build()
        .then(data => {
        const attachment = new Discord.AttachmentBuilder(data, "RankCard.png");
        message.reply({ files: [attachment] })
    });
    }
}
