const Discord = require("discord.js");

module.exports = {
    name: "inventory",
    aliases: ["inv"],
    cooldown: 1000 * 5,
    description: "daily coins baybee",
  async run(client, message, args, ProfileData){
    const invEmbed = new Discord.EmbedBuilder();
    const member = message.mentions.users.first() || message.author;
    const memberTarger = message.guild.members.cache.get(member.tag);    

     let userQuery =  { userID: member.id };
   let user = await ProfileData.findOne(userQuery);

    let fishingRODTOF;
    if(user.fishingRodTOF === true){
      fishingRODTOF = "Crafted"
    } else {
      fishingRODTOF = "Not Crafted"
    }
    
   if(!user){
     return message.reply("That person has not ran the command \`!prcreate\` . Get them to run that command to create their account.")
   } else {
     invEmbed.setTitle(`${member.tag}'s Inventory`)
     invEmbed.setColor("AQUA")
     invEmbed.addField("Coins <:coinSenpaiBot:991198069909626941>", `${user.coins}`, true)  
     invEmbed.addField("Wood <:woodSenpaiBot:991194685198577684>",`${user.wood}`, true)
    invEmbed.addField("Stone <:stoneSenpaiBot:991201733944541306>", `${user.stone}`, true)
    invEmbed.addField("Iron <:metalSenpaiBot:991202814191738941>", `${user.iron}`, true)
    invEmbed.addField("Rope <:ropeSenpaiBot:991203313502654514>", `${user.rope}`, true)
    invEmbed.addField("Fishing Rod <:fishingRodSenpaiBot:991207429771636766>", fishingRODTOF, true)


     message.channel.send({ embeds: [invEmbed] })   

    

    


    
    }
}}
