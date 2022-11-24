module.exports = {
    name: "bug",
    aliases: ['bugs'],
    description: "Bugs for Senpai Bot.",
  async run(client, message, args){
    const Discord = require("discord.js");
    
    const bugID = process.env['bugreportID'];
    const bugEmbed = new Discord.MessageEmbed();

    const bug = args.slice(0).join(' ');

    if(!bug) return message.reply("Please state a bug to report.")
    
    bugEmbed.setTitle(`Bug reported from ${message.author.tag} in ${message.guild.name}`)
    .setDescription(`${bug}`)
    .setColor("AQUA")
    .setTimestamp();


     message.reply("Thanks for the Bug Report!")
     client.channels.cache.get(bugID).send({embeds: [bugEmbed] });
    }
}
