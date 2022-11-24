      const Discord = require("discord.js");
module.exports = {
    name: "userinfo",
    aliases: ['ui'],
    description: "Get a users info",
  async run(client, message, args){
const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id);

        const profile = new Discord.MessageEmbed();
    
        profile.setAuthor(`User info for ${user.username}`)
            .setThumbnail(user.avatarURL({ dynamic: false }))            
            .setColor("AQUA")
            .addFields({
                name: "User tag",
                value: `${user.tag}`,
                inline: false
            })
            .addFields({
                name: "Is bot",
                value: `${user.bot}`,
                inline: false
            })
            .addFields({
                name: "Nickname",
                value: `${member.nickname}` || "None",
                inline: false
            })
            .addFields({
                name: `Date that ${user.username} joined the server`,
                value: `${new Date(member.joinedTimestamp).toLocaleDateString()}`,
                inline: false
            })
            .addFields({
                name: `Date that ${user.username} joined Discord`,
                value: `${new Date(user.createdTimestamp).toLocaleDateString()}`,
                inline: false
            });

        message.reply({embeds: [profile] });

    }
}
