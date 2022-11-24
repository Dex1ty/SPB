module.exports = {
    name: "prcreate",
    aliases: ['profilecreate'],
    cooldown: 1000 * 5,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
  userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);

   if(user){
     return message.reply("You already have an account created for economy with me <3, baka~");
   }

    if(!user){
      let new_user = await ProfileData.create(userQuery);
      new_user.save();

      user = await ProfileData.findOne(userQuery);
      return message.reply("An account was created for economy with me <3!")
    }else {
      message.reply("An error has occured creating your account, please try again later.")
    }
    
    }
}
