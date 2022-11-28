const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("queue")
        .setDescription("Shows the current songs in the queue."),
        async run(client, interaction) {
            const queue = client.player.getQueue(interaction.guild)

            if(!queue || !queue.playing) {
                await interaction.reply("There is no song playing right now.")
                return;
            }

            const queueString = queue.tracks.slice(0, 10).map((song, i) => {
                return `${i + 1}) [${song.duration}]\ ${song.title} - <@${song.requestedBy.id}>`;
            }).join("\n")
            
            const currentSong = queue.current;

            await interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                    .setDescription(`**Currently Playing:**\n\` ${currentSong.title} - <@${currentSong.requestedBy.id}>\n\n**Queue:**\n${queueString}`)
                    .setThumbnail(currentSong.thumbnail)
                ]
            })
        }
}

