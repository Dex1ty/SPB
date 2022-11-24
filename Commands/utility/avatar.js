module.exports = {
    name: "avatar",
    description: "Shows an avatar of a user",
  async run(client, message, args){
      const Discord = require("discord.js")
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        let avatar = member.displayAvatarURL({ size: 1024, dynamic: true });
 
        const userEmbed = new Discord.MessageEmbed()
         .setTitle(`${member.username}'s Avatar`)
         .setImage(avatar)
         .setColor("AQUA")
         .setFooter(`Requested by ${message.author.username} `);
         message.reply({embeds: [userEmbed] });
    }
}
