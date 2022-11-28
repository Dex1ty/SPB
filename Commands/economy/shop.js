const fs = require("fs");
    const Discord = require("discord.js");
module.exports = {
    name: "shop",
    aliases: ['mall'],
    cooldown: 1000 * 5,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
    const shopEmbed = new Discord.EmbedBuilder();
      userQuery = { userID: message.author.id };
      let user = await ProfileData.findOne(userQuery);
  if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
      } 

    shopEmbed.setTitle("Shop")
    .setColor("AQUA")
    .addFields({
      name: "Materials",
      value: "**Oakwood** | Cost: 250 coins \n**Stone** | Cost: 350 coins \n**Rope** | Cost: 175 coins \n**Iron** | Cost: 500 coins",
      inline: false,
    });
  
    

  

  message.channel.send({ embeds: [shopEmbed] })

    }
}
