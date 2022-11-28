const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("Pauses the current song."),
        async run(interaction) {
            const queue = client.player.getQueue(interaction.guild)

            if(!queue){
                await interaction.reply("There is no song playing yet.")
                return;
            }
            const currentSong = queue.current;
            
            queue.setPaused(true);

            await interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                        .setDescription(`Paused **${currentSong.title}**`)
                        .setThumbnail(currentSong.thumbnail)
                ]
            })
        }
}

