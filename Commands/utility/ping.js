module.exports = {
    name: "ping",
    aliases: ['p'],
    description: "Shows bot ping",
    cooldown: 5 * 1000,
    premium: true,
  async run(client, message, args){
        const messagee = await message.reply(`Ping: ${client.ws.ping} ms.`);

        messagee.edit(`Ping: ${client.ws.ping} ms.\nMessage Ping: ${messagee.createdTimestamp - message.createdTimestamp} ms.`)
    }
}
