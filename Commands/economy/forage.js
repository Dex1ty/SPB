module.exports = {
    name: "forage",
    cooldown: 1000 * 900,
    description: "Forage for some wood!.",
  async run(client, message, args, ProfileData){
       userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 


    const ifFish = user.axeTOF;
    if(!ifFish) return message.reply("Baka!! You need to craft an axe before you can forage. To do that use the command \`!craft axe\`");
    
      const axeLevel = user.axeLevel

      const coinBagAmount = Math.round(Math.random() * 150 + 1) * axeLevel;
      const oakWoodAmount = Math.round(Math.random() * 10) + 1 * axeLevel
      const darkWoodAmount1 = Math.round(Math.random() * 5 + 1) * axeLevel

    
      const dropChance = Math.round(Math.random() * 1000) + 1;
      if(dropChance > 1 && dropChance < 500){

      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": coinBagAmount, 
          "oakWood": oakWoodAmount,
          "darkWood": darkWoodAmount1, 
        }
      })
      return message.reply(`You have foraged common loot. ${coinBagAmount} coins, ${oakWoodAmount} oakwood and ${darkWoodAmount1} dark wood.`)
      }
      else if(dropChance > 501 && dropChance < 800){
      const oakWoodAmount2 = Math.round(Math.random() * 15) + 1 * axeLevel
      const darkWoodAmount2 = Math.round(Math.random() * 10 + 1) * axeLevel
      const mapleWoodAmount2 = Math.round(Math.random() * 5 + 1) * axeLevel
      const rareCoinBag = Math.round(Math.random() * 300 + 1) * axeLevel;
        
        await ProfileData.updateOne(userQuery, {
          "$inc": {
            "coins": rareCoinBag,
            "oakwood": oakWoodAmount2,
            "darkWood": darkWoodAmount2,
            "mapleWood": mapleWoodAmount2,
              }
        })
      return message.reply(`You have foraged rare loot. ${rareCoinBag} coins, ${oakWoodAmount2} oakwood, ${darkWoodAmount2} dark wood and ${mapleWoodAmount2} maple wood.`) 
      }
      else if(dropChance > 801 && dropChance < 950){
      const oakWoodAmount3 = Math.round(Math.random() * 20) + 1 * axeLevel
      const darkWoodAmount3 = Math.round(Math.random() * 15 + 1) * axeLevel
      const mapleWoodAmount3 = Math.round(Math.random() * 10 + 1) * axeLevel
      const birchWoodAmount3 = Math.round(Math.random() * 5 + 1) * axeLevel
      const epicCoinBag = Math.round(Math.random() *(450 - 300 + 1) + 300) * axeLevel;

      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": epicCoinBag,
          "oakwood": oakWoodAmount3,
          "darkWood": darkWoodAmount3,
          "mapleWood": mapleWoodAmount3,
          "birchWood": birchWoodAmount3
        }
      })
      return message.reply(`You have foraged **EPIC** loot! ${epicCoinBag} coins, ${oakWoodAmount3} oakwood, ${darkWoodAmount3} dark wood, ${mapleWoodAmount3} maple wood and ${birchWoodAmount3} birch wood.`)       
      
      }
      else if(dropChance > 951 && dropChance < 1000){
      const oakWoodAmount4 = Math.round(Math.random() * 25) + 1 * axeLevel
      const darkWoodAmount4 = Math.round(Math.random() * 20 + 1) * axeLevel
      const mapleWoodAmount4 = Math.round(Math.random() * 10 + 1) * axeLevel
      const birchWoodAmount4 = Math.round(Math.random() * 5 + 1) * axeLevel
      const legCoinBag = Math.round(Math.random() * (600 - 450 + 1) + 450) * axeLevel;
      const redMushroomAmount = Math.round(Math.random() * 2 + 1)
      
      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": legCoinBag,
          "oakwood": oakWoodAmount4,
          "darkWood": darkWoodAmount4,
          "mapleWood": mapleWoodAmount4,
          "birchWood": birchWoodAmount4,
          "redMushroom": redMushroomAmount          
        }
      })
        
      return message.reply(`You have foraged ***LEGENDARY*** loot! ${legCoinBag} coins, ${oakWoodAmount4} oakwood, ${darkWoodAmount4} dark wood, ${mapleWoodAmount4} maple wood, ${birchWoodAmount4} birch wood, ${redMushroomAmount} red mushroom.`)
      }


    
    }

}

