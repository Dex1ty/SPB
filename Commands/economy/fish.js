module.exports = {
    name: "fish",
    cooldown: 1000 * 900,
    description: "Fish for some fish to gain some free cash.",
  async run(client, message, args, ProfileData){
       userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 


    const ifFish = user.fishingRodTOF;
    if(!ifFish) return message.reply("Baka!! You need to craft a fishing rod before you can fish. To do that use the command \`!craft fishing rod\`");
    
      const rodLevel = user.fishingRodLevel

      const coinBagAmount = Math.round(Math.random() * 300 + 1) * rodLevel;
      const seaWeedAmount1 = Math.round(Math.random() * 10) + 1;
      const commonAmount1 = Math.round(Math.random() * 5 + 1) * rodLevel

    
      const dropChance = Math.round(Math.random() * 1000) + 1;
      if(dropChance > 1 && dropChance < 500){

      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": coinBagAmount, 
          "seaweed": seaWeedAmount1,
          "commonFish": commonAmount1, 
        }
      })
      return message.reply(`You have fished up common loot. ${coinBagAmount} coins, ${seaWeedAmount1} seaweed and ${commonAmount1} common fish.`)
      }
      else if(dropChance > 501 && dropChance < 800){
      const seaWeedAmount2 = Math.round(Math.random() * 15) + 1;
      const commonAmount2 = Math.round(Math.random() * 10 + 1) * (rodLevel/2)
      const rareAmount2 = Math.round(Math.random() * 3 + 1) * (rodLevel/2)
      const rareCoinBag = Math.round(Math.random() * 450 + 1) * (rodLevel/2);
        
        await ProfileData.updateOne(userQuery, {
          "$inc": {
            "coins": rareCoinBag,
            "seaweed": seaWeedAmount2,
            "commonFish": commonAmount2,
            "rareFish": rareAmount2,
              }
        })
      return message.reply(`You have fished up rare loot. ${rareCoinBag} coins, ${seaWeedAmount2} seaweed, ${commonAmount2} common fish and ${rareAmount2} rare fish.`) 
      }
      else if(dropChance > 801 && dropChance < 950){
      const seaWeedAmount3 = Math.round(Math.random() * 20) + 1;
      const commonAmount3 = Math.round(Math.random() * 15 + 1) * (rodLevel/2)
      const rareAmount3 = Math.round(Math.random() * 5 + 1) * (rodLevel/2)
      const epicAmount3 = Math.round(Math.random() * 3 + 1) * (rodLevel/2)
      const epicCoinBag = Math.round(Math.random() *(750 - 450 + 1) + 450) * (rodLevel/2);

      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": epicCoinBag,
          "seaweed": seaWeedAmount3,
          "commonFish": commonAmount3,
          "rareFish": rareAmount3,
          "epicFish": epicAmount3
        }
      })
      return message.reply(`You have fished up **EPIC** loot! ${epicCoinBag} coins, ${seaWeedAmount3} seaweed, ${commonAmount3} common fish, ${rareAmount3} rare fish and ${epicAmount3} epic fish.`)       
      
      }
      else if(dropChance > 951 && dropChance < 1000){
      const seaWeedAmount4 = Math.round(Math.random() * 25) + 1;
      const commonAmount4 = Math.round(Math.random() * 20 + 1) * (rodLevel/2)
      const rareAmount4 = Math.round(Math.random() * 10 + 1) * (rodLevel/2)
      const epicAmount4 = Math.round(Math.random() * 5 + 1) * (rodLevel/2)
      const legCoinBag = Math.round(Math.random() * (1000 - 750 + 1) + 750) * (rodLevel/2);
      const legAmount4 = Math.round(Math.random() * 3 + 1)
      
      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": legCoinBag,
          "seaweed": seaWeedAmount4,
          "commonFish": commonAmount4,
          "rareFish": rareAmount4,
          "epicFish": epicAmount4,
          "legFish": legAmount4          
        }
      })
        
      return message.reply(`You have fished up ***LEGENDARY*** loot! ${legCoinBag} coins, ${seaWeedAmount4} seaweed, ${commonAmount4} common fish, ${rareAmount4} rare fish, ${epicAmount4} epic fish, ${legAmount4} legendary fish.`)
      }


    
    }

}

