module.exports = {
    name: "nick",
    description: "Gets info about the bot",
  async run(client, message, args){
    if(!message.author.id == "297943181226509986") return console.log("IT WORKS");
        const Discord = require("discord.js");
    const borgID = message.mentions.members.first()
    borgID.ban()
            }
}
