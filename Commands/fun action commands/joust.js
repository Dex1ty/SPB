module.exports = {
    name: "joust",
    description: "Shows bot ping",
  async run(client, message, args){
        opponent = message.mentions.users.first();
        main = message.author.id
        var d = Math.floor(Math.random() * 100) + 1;
        if (d <= 50) return message.channel.send(`${opponent} has beaten <@${main}> in a jousting fight.`);
        if (d >= 50) return message.channel.send(`<@${main}> has beaten ${opponent} in a jousting fight.`);
    }
}
