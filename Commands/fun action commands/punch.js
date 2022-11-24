module.exports = {
    name: "punch",
    description: "Punch a user",
  async run(client, message, args){
      const Discord = require("discord.js");
 var images = [
            "https://c.tenor.com/VrWzG0RWmRQAAAAC/anime-punch.gif",
            "https://giffiles.alphacoders.com/128/12887.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/000/856/517/938.gif",
            "https://j.gifs.com/m8Xa9k.gif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBbaa-D6YDzDVKnbrymi_NcTlbVRX3a2SvQ&usqp=CAU",
            "https://i.kym-cdn.com/photos/images/original/001/117/646/bf9.gif",
            "https://c.tenor.com/6m7lWU-7P7MAAAAC/anime-punch.gif",
            "https://c.tenor.com/09gnnKSa9vkAAAAC/punch-anime.gif",
            "https://c.tenor.com/Ff1Nulke7-cAAAAC/berserk-anime.gif",
            "https://c.tenor.com/NYw9QD11oYIAAAAC/anime-halo.gif",

        ];
        const image = images[Math.floor(Math.random() * images.length)];
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        if (member == null) return message.reply("Please state a user you would like to punch.");

        else if (message.author == member) return message.reply("You cannot punch yourself! haha....");
        else {
            const memberTarger = message.guild.members.cache.get(member.tag);
        };        
            embed.setTitle(`${message.author.username} punched ${member.tag}!`)
                .setImage(image)
                .setColor("AQUA"),
            message.reply({embeds: [embed] });
    }
}