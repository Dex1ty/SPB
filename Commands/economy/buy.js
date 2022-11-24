const fs = require("fs");

module.exports = {
    name: "buy",
    aliases: ['purchase'],
    cooldown: 1000 * 5,
    description: "buys things",
  async run(client, message, args, ProfileData){
   userQuery = { userID: message.author.id };
  
   let user = await ProfileData.findOne(userQuery);
   if(!user){
     return message.reply("Oh, I forgot to mention, you need to create an account for economy commands. Run the command \`!prcreate\` .")
   } 
       
    if(!args[0]) return message.reply("Please state an item to purchase, do \`!shop\` to find purchasable items. Usage: \`!buy <item/worker>\`")
    switch (args[0].toLowerCase()){
             
    case "oakwood":
    const woodCost = 250;
    let amountWood;
    try{
      amountWood = args[1];
      if(!amountWood) amountWood = 1
    } catch (err){
      amountWood = 1
      console.log(err)
    }

    
    if(isNaN(amountWood)) return message.reply("Please specify the amountWood of wood you would like to purchase. **USAGE:**  \`!buy oakwood <amount>\`")
    const priceWood = amountWood * woodCost    
    if(priceWood > user.coins){
      return message.reply(`You do not have enough to purchase ${amountWood} wood for ${priceWood} coins.`);
    }
    await ProfileData.findOneAndUpdate({
      userID: message.author.id,
    }, {
      "$inc": {
        "coins": -priceWood,
        "oakWood": amountWood
      }
    })
  return message.reply(`You have purchased ${amountWood} wood for ${priceWood} coins.`)
    


  
  case "stone":
  const stoneCost = 350;
  let amountStone;
  try{
    amountStone = args[1];
    if(!amountStone) amountStone = 1
  } catch (err){
    amountStone = 1
    console.log(err)
  }
  if(isNaN(amountStone)) return message.reply("Please specify the amount of stone you would like to purchase. **USAGE:**  \`!buy stone <amount>\`")
  const priceStone = amountStone * stoneCost
  if(priceStone > user.coins){
    return message.reply(`You do not have enough to purchase ${amountStone} stone for ${priceStone} coins.`)
  }
  await ProfileData.findOneAndUpdate({
    userID: message.author.id,
  }, {
    "$inc": {
      "coins": -priceStone,
      "stone": amountStone
    }
  })
  return message.reply(`You have purchased ${amountStone} stone for ${priceStone} coins.`)



  case "rope":
  const ropeCost = 150;
  let amountRope;
  try{
    amountRope = args[1];
    if(!amountRope) amountRope = 1
  } catch (err){
    amountRope = 1
    console.log(err);
  }
  if(isNaN(amountRope)) return message.reply("Please specify the amount of rope you would like to purchase. **USAGE:**  \`!buy rope <amount>\`")
  const priceRope = amountRope * ropeCost
  if(priceRope > user.coins){
    return message.reply(`You do not have enough to purchase ${amountRope} rope for ${priceRope} coins.`)    
  }
  await ProfileData.findOneAndUpdate({
    userID: message.author.id,
  }, {
    "$inc": {
      "coins": -priceRope,
      "rope": amountRope
    }
  })
  return message.reply(`You have purchased ${amountRope} rope for ${priceRope} coins.`);



  case "metal":
  const metalCost = 500;
  let amountMetal;
  try{
    amountMetal = args[1];
    if(!amountMetal) amountMetal = 1
  } catch (err){
    amountRope = 1
    console.log(err);
  }
  if(isNaN(amountMetal)) return message.reply("Please specify the amount of metal you would like to purchase. **USAGE:**  \`!buy metal <amount>\`")
  const priceMetal = amountMetal * metalCost
  if(priceMetal > user.coins){
    return message.reply(`You do not have enough to purchase ${amountMetal} metal for ${priceMetal} coins.`)
  }
  await ProfileData.findOneAndUpdate({
    userID: message.author.id,
  }, {
    "$inc": {
      "coins": -priceMetal,
      "rope": amountMetal
    }
  })
  return message.reply(`You have purchased ${amountMetal} metal for ${priceMetal} coins.`)

  //Default to a !item  

    }
  
      
    }
  }

