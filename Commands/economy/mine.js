module.exports = {
    name: "mine",
    aliases: ['dig'],
    cooldown: 1000 * 900,
    description: "Shows your balance of coins.",
  async run(client, message, args, ProfileData){
    let userQuery =  { userID: message.author.id };
    let user = await ProfileData.findOne(userQuery);
    if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")        
    }
     if(!user.pickaxeTOF) return message.reply("Baka!! You need to craft a pickaxe before you can mine. To do that use the command \`!craft pickaxe\`")
     const pickaxelevel = user.pickaxeLevel

      const coinBagAmount = Math.round(Math.random() * 150 + 1) * pickaxelevel;
      const stoneAmount = Math.round(Math.random() * 10) + 1 * pickaxelevel
      const bronzeAmount1 = Math.round(Math.random() * 5 + 1) * pickaxelevel

    
      const dropChance = Math.round(Math.random() * 1000) + 1;
      if(dropChance > 1 && dropChance < 500){
      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": coinBagAmount, 
          "stone": stoneAmount,
          "bronze": bronzeAmount1, 
        }
      })
      return message.reply(`You have mined and discovered common loot while mining. ${coinBagAmount} coins, ${stoneAmount} stone and ${bronzeAmount1} bronze.`)
      }
      else if(dropChance > 501 && dropChance < 800){
      const stoneAmount2 = Math.round(Math.random() * 15) + 1 * pickaxelevel
      const bronzeAmount2 = Math.round(Math.random() * 10 + 1) * pickaxelevel
      const ironAmount2 = Math.round(Math.random() * 5 + 1) * pickaxelevel
      const rareCoinBag = Math.round(Math.random() * 300 + 1) * pickaxelevel;
      
        await ProfileData.updateOne(userQuery, {
          "$inc": {
            "coins": rareCoinBag,
            "stone": stoneAmount2,
            "bronze": bronzeAmount2,
            "iron": ironAmount2,
              }
        })
      return message.reply(`You have discovered rare loot while mining. ${rareCoinBag} coins, ${stoneAmount2} stone, ${bronzeAmount2} bronze and ${ironAmount2} iron.`) 
      }
      else if(dropChance > 801 && dropChance < 950){
      const stoneAmount3 = Math.round(Math.random() * 20) + 1 * pickaxelevel
      const bronzeAmount3 = Math.round(Math.random() * 15 + 1) * pickaxelevel
      const ironAmount3 = Math.round(Math.random() * 10 + 1) * pickaxelevel
      const titaniumAmount3 = Math.round(Math.random() * 5 + 1) * pickaxelevel
      const epicCoinBag = Math.round(Math.random() *(450 - 300 + 1) + 300) * pickaxelevel;

      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": epicCoinBag,
          "stone": stoneAmount3,
          "bronze": bronzeAmount3,
          "iron": ironAmount3,
          "titanium": titaniumAmount3
        }
      })
      return message.reply(`You have mined and discovered **EPIC** loot while mining! ${epicCoinBag} coins, ${stoneAmount3} stone, ${bronzeAmount3} bronze, ${ironAmount3} iron and ${titaniumAmount3} titanium.`)       
      
      }
      else if(dropChance > 951 && dropChance < 1000){
      const stoneAmount4 = Math.round(Math.random() * 25) + 1 * pickaxelevel
      const bronzeAmount4 = Math.round(Math.random() * 20 + 1) * pickaxelevel
      const ironAmount4 = Math.round(Math.random() * 10 + 1) * pickaxelevel
      const titaniumAmount4 = Math.round(Math.random() * 5 + 1) * pickaxelevel
      const legCoinBag = Math.round(Math.random() * (600 - 450 + 1) + 450) * pickaxelevel;
      const diamondAmount = Math.round(Math.random() * 2 + 1)
      
      await ProfileData.updateOne(userQuery, {
        "$inc": {
          "coins": legCoinBag,
          "stone": stoneAmount4,
          "bronze": bronzeAmount4,
          "iron": ironAmount4,
          "titanium": titaniumAmount4,
          "diamond": diamondAmount          
        }
      })
        
      return message.reply(`You have mined and discovered ***LEGENDARY*** loot while mining! ${legCoinBag} coins, ${stoneAmount4} stone, ${bronzeAmount4} bronze, ${ironAmount4} iron, ${titaniumAmount4} titanium, ${diamondAmount} diamond.`)
      }



    }
  }

