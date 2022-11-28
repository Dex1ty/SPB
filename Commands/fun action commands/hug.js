  module.exports = {
    name: "hug",
    description: "Hug someone",
  async run(client, message, args){
      const Discord = require("discord.js");
      const fetch = require("node-fetch");
      fetch('https://some-random-api.ml/animu/hug')
      .then(res => res.json())
      .then(json => {

    
        const member = message.mentions.users.first();
        const embed = new Discord.EmbedBuilder();
        if (member == null) return message.reply("Please state a user you would like to hug.");

        else if (message.author == member) return message.reply("You cannot hug yourself! haha....");
        else {
            const memberTarger = message.guild.members.cache.get(member.tag);
        };        
            embed.setTitle(`${message.author.username} hugged ${member.tag}!`)
                .setImage(json.link)
                .setColor("AQUA"),
            message.reply({ embeds: [embed] });
      })
    }
}
