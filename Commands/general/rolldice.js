module.exports = {
    name: "rolldice",
    description: "Rate something",
  async run(client, message, args){
            const Discord = require("discord.js");
             var numbers = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",

        ];
        const number = numbers[Math.floor(Math.random() * numbers.length)];
        const embed = new Discord.MessageEmbed();      
            embed.setTitle(`You rolled the number ${number}`)
                .setColor("AQUA"),
            message.reply({embeds: [embed] });
    }
}
