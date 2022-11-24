  module.exports = {
    name: "pat",
    description: "Hug someone",
  async run(client, message, args){
      const Discord = require("discord.js");
      const fetch = require("node-fetch");
      fetch('https://some-random-api.ml/animu/pat')
      .then(res => res.json())
      .then(json => {

    
        const member = message.mentions.users.first();
        const embed = new Discord.MessageEmbed();
        const selfPat = new Discord.MessageEmbed();
        if (member == null) return message.reply("Please state a user you would like to pat.");          
        else if (message.author == member){
          selfPat.setTitle(`UwU I'll Pat you! :D`)
          .setImage(json.link)
          .setColor("AQUA")
         return message.reply({ embeds: [selfPat] });
        }  
        else {
            const memberTarger = message.guild.members.cache.get(member.tag);
        };        
            embed.setTitle(`${message.author.username} patted ${member.tag}!`)
                .setImage(json.link)
                .setColor("AQUA"),
            message.reply({ embeds: [embed] });
      })
    }
}
