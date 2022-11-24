module.exports = {
    name: "hourly",
    cooldown: 1000 * 3600,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
       userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 
          let min = 75;
          let max = 200;
          let median = max - min;
          

          const money = Math.floor(Math.random() * median) + 1;

            await ProfileData.updateOne(userQuery, {
      "$inc": { "coins": money }
          });
          await message.reply(`You received your hourly allowance of ${money} coins.`);
    }
}
