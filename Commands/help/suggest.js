module.exports = {
    name: "suggestion",
    aliases: ['suggest'],
    description: "Suggest ideas for Senpai Bot.",
  async run(client, message, args){
    const Discord = require("discord.js");
    
    const sugID = process.env['suggestionID'];
    const suggestEmbed = new Discord.MessageEmbed();

    const suggestion = args.slice(0).join(' ');

    if(!suggestion) return message.reply("Please state your suggestion.")

    suggestEmbed.setTitle(`Suggestion from ${message.author.tag} in ${message.guild.name}`)
    .setDescription(`${suggestion}`)
    .setColor("AQUA")
    .setTimestamp();


      message.reply("Thanks for the suggestion!")
     client.channels.cache.get(sugID).send({embeds: [suggestEmbed] });
    }
}
