module.exports = {
    name: "say",
    description: "Make me say something",
  async run(client, message, args){
      const say = args.join(' ');
      if(!say) return message.reply("Please state what you would like me to say.")
        message.channel.send(`${say}`)

    }
}
