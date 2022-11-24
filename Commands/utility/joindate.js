module.exports = {
    name: "joindate",
    aliases: ['joineddate', 'datejoined'],
    description: "Shows when someone joined a server.",
  async run(client, message, args){
         const { guild, channel } = message
        const Discord = require("discord.js");
        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id);

        const joindate = new Discord.MessageEmbed();
    
        joindate.setAuthor(`Join date for ${user.username}`)
        .setThumbnail(user.avatarURL({ dynamic: false }))
        .addFields({
        name: `Date that ${user.username} joined the server`,
        value: `${new Date(member.joinedTimestamp).toLocaleDateString()}`,
        inline: false
        });

        message.reply({embeds: [joindate] });
    }
}
