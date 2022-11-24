module.exports = {
    name: "bye",
    aliases: ['b'],
    cooldown: 1000 * 5,
    description: "Say goodbye to the bot",
  async run(client, message, args){
        message.reply("Bye!");

    }
}
