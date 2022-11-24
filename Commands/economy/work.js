module.exports = {
    name: "work",
    cooldown: 1000 * 7200,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
       userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 
          const jobs = ["Cashier", "Bartender", "Chef", "Builder", "Programmer", "Waiter", "Teacher", "Mechanic", "Doctor", "Nurse"]

          const jobIndex = Math.floor(Math.random() * jobs.length);
          const money = Math.floor(Math.random() * 250) + 1;

            await ProfileData.updateOne(userQuery, {
      "$inc": { "coins": money }
          });
          await message.reply(`You worked as a ${jobs[jobIndex]} and received ${money} coins.`);


          
    }
}
