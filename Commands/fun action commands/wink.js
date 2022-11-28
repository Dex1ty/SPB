module.exports = {
    name: "wink",
    description: "Wink",
  async run(client, message, args){
      const fetch = require("node-fetch");
      const Discord = require("discord.js")
              fetch('https://some-random-api.ml/animu/wink')
            .then(res => res.json())
            .then(json => {
                const wink = new Discord.MessageEmbed();

                wink.setImage(`${json.link}`)
                    .setColor("AQUA");
                message.reply({embeds: [wink] })

            });


    }
}
