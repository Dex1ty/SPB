module.exports = {
    name: "craft",
    cooldown: 1000 * 5,
    description: "craft something",
  async run(client, message, args, ProfileData){
   userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 
  if(!args[0]) return message.reply("What are you trying to craft?? Baka, do \`!craftmenu\`")

  const craftingItem = args.slice(0).join(" ");
  switch (craftingItem.toLowerCase()){
    case "fishingrod":  
    case "fishing rod":
    
    const checkingWood = user.oakWood;
    const checkingRope = user.rope;
    if(checkingWood < 2) return message.reply(`You need to have atleast 2 oak wood and 1 rope to craft a fishing rod. You currently have ${user.oakWood} wood and ${user.rope} rope.`)
    if(checkingRope < 1) return message.reply(`You need to have atleast 2 oak wood and 1 rope to craft a fishing rod. You currently have ${user.oakWood} oak wood and ${user.rope} rope.`);
      await ProfileData.findOneAndUpdate({
        userID: message.author.id,
      },{
        "$inc":{
          "oakWood": -2,
          "rope": -1,
        }, 
        "$set": {
          fishingRodTOF: true,
          fishingRodLevel: 2,        
      }
      })
      return message.reply("You have crafted a fishing rod for 2 oak wood and 1 rope.")

    case "pickaxe":
      const pickCheckWood = user.oakWood
      const pickCheckIron = user.stone
      if(pickCheckWood < 2) return message.reply(`You need to have atleast 2 oak wood and 3 stone to craft a pickaxe. You currently have ${user.oakWood} wood and ${user.stone} stone.`)
      if(pickCheckIron < 3) return message.reply(`You need to have atleast 2 wood and 3 iron to craft a pickaxe. You currently have ${user.oakWood} oak wood and ${user.stone} stone.`)
    await ProfileData.findOneAndUpdate({
      userID: message.author.id,
    },{
      "$inc": {
        "oakWood": -2,
        "stone": -3,
      }, 
        "$set": {
          pickaxeTOF: true,
          pickaxeLevel: 2,
        }
      
      })
      return message.reply("You have crafted a pickaxe for 2 oak wood and 3 stone.")


      case "axe":
      const axeCheckWood = user.oakWood
      const axeCheckIron = user.stone
      if(axeCheckWood < 2) return message.reply(`You need to have atleast 2 oak wood and 3 stone to craft an axe. You currently have ${user.oakWood} wood and ${user.stone} stone.`)
      if(axeCheckIron < 3) return message.reply(`You need to have atleast 2 wood and 3 stone to craft an axe. You currently have ${user.oakWood} oak wood and ${user.stone} stone.`)
    await ProfileData.findOneAndUpdate({
      userID: message.author.id,
    },{
      "$inc": {
        "oakWood": -2,
        "stone": -3,
      }, 
        "$set": {
          axeTOF: true,
          axeLevel: 2,
        }
      
      })
      return message.reply("You have crafted an axe for 2 oak wood and 3 stone.")

    case ("fish scalerope"):
    case ("fishscale rope"):
    case ("fishscalerope"):
    case ("fish scale rope"):
      const commonFishCheck = user.commonFish
      const rareFishCheck = user.rareFish
      const fishRopeCheck = user.rope
      const seaweedCheck = user.seaweed
      if(commonFishCheck < 256) return message.reply(`You need to have atleast 256 common fish, 128 rare fish, 32 seaweed and 5 rope. You currently have ${commonFishCheck} common fish, ${rareFishCheck} rare fish, ${seaweedCheck} seaweed and ${fishRopeCheck} rope.`)
      if(rareFishCheck < 128) return message.reply(`You need to have atleast 256 common fish, 128 rare fish, 32 seaweed and 5 rope. You currently have ${commonFishCheck} common fish, ${rareFishCheck} rare fish, ${seaweedCheck} seaweed and ${fishRopeCheck} rope.`)
      if(fishRopeCheck < 5) return message.reply(`You need to have atleast 256 common fish, 128 rare fish, 32 seaweed and 5 rope. You currently have ${commonFishCheck} common fish, ${rareFishCheck} rare fish, ${seaweedCheck} seaweed and ${fishRopeCheck} rope.`)
      if(seaweedCheck < 32) return message.reply(`You need to have atleast 256 common fish, 128 rare fish, 32 seaweed and 5 rope. You currently have ${commonFishCheck} common fish, ${rareFishCheck} rare fish, ${seaweedCheck} seaweed and ${fishRopeCheck} rope.`)


      await ProfileData.findOneAndUpdate({
        userID: message.author.id,
      },{
        "$inc": {
          "commonFish": -256,
          "rareFish": -128,
          "seaweed": -32,
          "rope": -5,
          "fishScaleRope": 1,
        }
      })
      return message.reply(`You have crafted a fish scale rope for 256 common fish, 128 rare fish, 32 seaweed and 5 rope`);
    }
  }
}
