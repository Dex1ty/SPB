const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Test"),
    async run(interaction) {
        interaction.reply("Working")
    }
}