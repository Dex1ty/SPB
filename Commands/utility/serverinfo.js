module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    description: "Get the serverinfo.",
  async run(client, message, args){
    const moment = require("moment");
      const Discord = require("discord.js");
      const embed = new Discord.MessageEmbed();
      embed.setTitle(`${message.guild.name}'s Serverinfo`)
      .setThumbnail(message.guild.iconURL())
      .setColor("AQUA")
      .addField("General Info", [
        `ID: ${message.guild.id}`,
        `Name: ${message.guild.name}`,
        `Owner: ${message.guild.owner}`
      ])
      .addField("Info", [
        `Server Creation Date: ${moment(message.guild.createdTimestamp).format("LT")}, ${moment(message.guild.createdTimestamp).format("LL")}, ${moment(message.guild.createdTimestamp).fromNow()}`,
        `Region: ${message.guild.region}`,
      ])
      message.reply({embeds: [embed] })

    }
}
