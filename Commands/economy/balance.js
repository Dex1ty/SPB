module.exports = {
    name: "balance",
    aliases: ['bal', 'bl'],
    cooldown: 1000 * 5,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
  const taggedUser = message.mentions.users.first();


  if(taggedUser){
    let userQuery =  { userID: taggedUser.id };
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("That person has not ran the command \`!prcreate\` . Get them to run that command to create their account OwO.")
   }
  await message.reply(`<@${taggedUser.id}> has ${user.coins} coins in their wallet.`);    
  } else {
    let userQuery =  { userID: message.author.id };
    let user = await ProfileData.findOne(userQuery);
    if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands OwO. Run the command \`!prcreate\` .")        
    }
  await message.reply(`You have ${user.coins} coins in your wallet.`);    
    }
  }
}
