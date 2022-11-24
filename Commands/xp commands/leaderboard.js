module.exports = {
    name: "leaderboard",
    aliases: ['lb', 'leaderboards'],
    description: "Shows bot ping",
  async run(client, message, args){
      const Discord = require("discord.js");
      const Levels = require("discord-xp");
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5); //We grab top 5 users with most xp in the current server.

        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.
        const embed = new Discord.MessageEmbed();
        embed.setTitle("Leaderboard")
                .setDescription(`${lb.join("\n\n")}`
                )
                .setColor("AQUA")
                message.reply({embeds: [embed] });
    }
}
