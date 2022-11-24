module.exports = {
    name: "nom",
    description: "Nom someone",
  async run(client, message, args){
      const Discord = require("discord.js");
        var images = [
            "https://i.gifer.com/4BRL.gif",
            "https://c.tenor.com/CUdLH8fai-AAAAAC/anime-bite.gif",
            "https://c.tenor.com/aKzAQ_cFsFEAAAAC/arms-bite.gif",
            "https://c.tenor.com/5bNd5ko2HDMAAAAC/anime-nom.gif",
            "https://data.whicdn.com/images/280828748/original.gif",
            "https://c.tenor.com/9dOzFGFZxnoAAAAM/bite-anime.gif",
            "http://i.imgur.com/zWv7GbI.gif",
            "https://c.tenor.com/36qdN7w7I28AAAAC/anime-couple-anime-neck.gif",
            "https://c.tenor.com/m-WLBM64EWkAAAAC/anime-nom.gif",
            "https://c.tenor.com/yOCSM9pcw9AAAAAC/nom-anime.gif",
            "https://c.tenor.com/B8-jHnVtSRcAAAAM/cat-bite.gif",
            "https://i.kym-cdn.com/photos/images/original/001/443/180/d25.gif",

        ];
        const image = images[Math.floor(Math.random() * images.length)];
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        if (member == null) return message.reply("Please state a user you would like to nom.");

        else if (message.author == member) return message.reply("You cannot nom yourself! haha....");
        else {
            const memberTarger = message.guild.members.cache.get(member.tag);
        };        
            embed.setTitle(`${message.author.username} nommed ${member.tag}!`)
                .setImage(image)
                .setColor("AQUA"),
            message.reply({embeds: [embed] });
    }
}
