module.exports = {
    name: "about",
    description: "Gets info about the bot",
  async run(client, message, args){
        const Discord = require("discord.js");
        const { guild, channel } = message
        const vs11 = process.env["vs10"];
        const about = new Discord.MessageEmbed();
    
        about.setAuthor(`Information about me... Senpai Bot!! T-thanks for using me!!`)
            .setDescription("I-I was created to be an awesome bot for all to use.")          
            .setColor("AQUA")
            .addFields({
                name: "Developer",
                value: "Dex1ty",
                inline: false
            })
            .addFields({
                name: "Version",
                value: vs11,
                inline: false
            })
            .addFields({
                name: "Prefix",
                value: "!",
                inline: false
            })
            .addFields({
                name: "If you have any suggestions or find an issue message:",
                value: "Dex1ty#9935",
                inline: false
            })

            

        message.reply({ embeds: [about] });
    }
}
