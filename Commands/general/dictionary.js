module.exports = {
    name: "dictionary",
    aliases: ["define"],
    description: "Sends an image of a cat",
  async run(client, message, args){
      const Discord = require("discord.js");
      const fetch = require("node-fetch");
const input = args[0];
        if (!input) return message.reply("Please state what word you would like to get the definition for.");
        fetch('https://some-random-api.ml/dictionary?word=' + input)
    .then(res => res.json())
    .then(json => { 

        const defined = new Discord.MessageEmbed();
        if(!args[0]) return ("Please state the word you would like to be defined.");
        const answer = json.error || defined
        if(answer === json.error) return message.reply("That word could not be found in my dictionary.")
        if (json.definition.length > 500) json.definition = json.definition.slice(0, 497) + "...";
        defined.setTitle(`Word: ${json.word}`)
        .setColor("AQUA")
        .addFields({
            name: "Definition:",
            value: `${json.definition}.`,
            inline: false
        })
        
        if(answer === defined) return message.reply({embeds: [defined] });
        else message.reply("That word could not be found in my dictionary.");
    }  
)
    }
}
