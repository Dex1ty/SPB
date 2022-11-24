module.exports = {
    name: "fight",
    description: "Fight someone",
  async run(client, message, args){
        opponent = message.mentions.users.first();
        main = message.author.id
        var d = Math.floor(Math.random() * 100) + 1;
        if (d <= 50) return message.channel.send(`${opponent} has beat up <@${main}> in a fight.`);
        if (d >= 50) return message.channel.send(`<@${main}> has beat up ${opponent} in a fight.`);
    }
}
