module.exports = {
    name: "rps",
    description: "Play rock paper scissors with MEEE!",
  async run(client, message, args){
            const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.reply(`How to play: \`!rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('I won! I chose paper and you chose rock.');
                else return message.reply('You won! I chose paper and you chose rock.');
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('I won! I chose scissors and you chose paper.');
                else return message.reply('You won! I chose rock and you chose paper.');        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply('I won! I chose rock and you chose scissors.');
                else return message.reply('You won! I chose paper and you chose scissors.');
            }
            default: {
                return message.reply(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }

    } 
    }
}
