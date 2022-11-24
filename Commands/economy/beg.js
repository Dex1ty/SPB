module.exports = {
    name: "beg",
    cooldown: 1000 * 1200,
    description: "Beg for coins.",
  async run(client, message, args, ProfileData){
   userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 

    
    let min = 15;
    let max = 50;
  
    let median = max - min;
  
    let amount = Math.floor(Math.random() * median) + min;

    await ProfileData.updateOne(userQuery, {
      "$inc": { "coins": amount }
    });

    await message.reply(`You have begged for Senpai and received ${amount} coins`);
    }
}
