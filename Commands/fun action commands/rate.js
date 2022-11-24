module.exports = {
    name: "rate",
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
            "7",
            "8",
            "9",
            "10",
        ];
        if(!args[0]) return message.reply("B-baka, please state what you would like to rate.")
        const rated = args.join(' ');
        const number = numbers[Math.floor(Math.random() * numbers.length)];
        const embed = new Discord.MessageEmbed();      
            embed.setTitle(`I rate ${rated} ${number}/10`)
                .setColor("AQUA"),
            message.reply({ embeds: [embed] });
    }
}
