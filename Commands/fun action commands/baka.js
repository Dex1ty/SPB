module.exports = {
    name: "baka",
    description: "Call someone a baka",
  async run(client, message, args){
      const Discord = require("discord.js")
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
// MORE CAN BE ADDED, COULDNT FIND ANY AT THE TIME.

        var images = [
            "https://c.tenor.com/REgUMZiMpf8AAAAC/anime-baka.gif",
            "https://c.tenor.com/Xcr8fHyf84gAAAAC/baka-anime.gif",
            "https://c.tenor.com/B0tolSzp7WkAAAAC/baka-anime.gif",
            "https://c.tenor.com/UsggMuRixo0AAAAM/baka-anime.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/001/028/204/4d9.gif"
        ];
        const image = images[Math.floor(Math.random() * images.length)];

        if (member == null) return message.reply("Please state a user you would like to call a baka.");

        else if (message.author == member) return message.reply(`W-why'd you do that one??`);
        else {
            const memberTarger = message.guild.members.cache.get(member.tag);
        };        
            embed.setTitle(`${message.author.username} called ${member.tag} a b-baka!`)
                .setImage(image)
                .setColor("AQUA"),
            message.reply({ embeds: [embed] });
    }
}
