module.exports = {
    name: "daily",
    cooldown: 1000 * 86400,
    description: "daily coins baybee",
  async run(client, message, args, ProfileData){
   userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 


          let min = 750;
          let max = 2000;
          let median = max - min;
          

          const money = Math.floor(Math.random() * median) + 1;

            await ProfileData.updateOne(userQuery, {
      "$inc": { "coins": money }
          });
          await message.reply(`You received your daily allowance of ${money} coins.`);
    }
}
