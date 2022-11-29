const { SlashCommandBuilder } = require('@discordjs/builders');


const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play a song")
    .addSubcommand((subcommand) => {
      return subcommand
        .setName("search")
        .setDescription("Searches for a song of your choosing")
        .addStringOption((option) => {
          return option
            .setName("query")
            .setDescription("Search any keywords")
            .setRequired(true);
        });
    })
    .addSubcommand((subcommand) => {
      return subcommand
        .setName("playlist")
        .setDescription("Play a youtube playlist")
        .addStringOption((option) => {
          return option
            .setName("query")
            .setDescription("Playlist Query")
            .setRequired(true);
        });
    }),

    async run({client, interaction}) {
        if(!interaction.member.voice.channel) {
            await interaction.reply("You must be in a voice channel to use this command.")
        }



        const embed = new Discord.EmbedBuilder();
        if(interaction.options.getSubcommand() === "playlist") {
            let url = interaction.options.getString("query");
            let queue = client.player.createQueue(interaction.guild.id);
            await queue.join(interaction.member.voice.channel);
            let playlist = await queue.playlist(url).catch(err => {
                console.log(err);
                if(!guildQueue)
                    queue.stop();
            });

            embed.setDescription(`Added **[${playlist.title}](${playlist.url})** to the queue`)
                 .setThumbnail(playlist.thumbnail)
                 .setFooter({text: `Duration ${playlist.duration}`})
                 .setAuthor({name: interaction.user.tag})

        }
        else if(interaction.options.getSubcommand() === "search") {
            let url = interaction.options.getString("query");
            let queue = client.player.createQueue(interaction.guild.id);
            await queue.join(interaction.member.voice.channel);
            let song = await queue.song(url).catch(err => {
                console.log(err);
                if(!guildQueue)
                    queue.stop();
            });

            embed.setDescription(`Added **[${song.title}](${song.url})** to the queue`)
                 .setThumbnail(song.thumbnail)
                 .setFooter({text: `Duration ${song.duration}`})
                 .setAuthor({name: interaction.user.tag})

        }
        


        await interaction.reply({
            embeds: [embed]
        })
    }
}