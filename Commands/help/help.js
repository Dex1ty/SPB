module.exports = {
    name: "help",
    aliases: ['h'],
    description: "Say hello to the bot",
  async run(client, message, args){
    const Discord = require("discord.js");
    const help = new Discord.MessageEmbed();

        
        help.setTitle("Help")
        .setColor("AQUA")
        .setDescription("T-thanks for using me, B-baka! \n There is many commands on this bot. \n **Type !help <Category> for the commands.** \n To find what commands do, go to each category individually. \n If you want to report a bug do !bug and if you would like to suggest anything do !suggest. \n These categories are: \n \`All\` \`General\` \`Fun\` \`Utility\` \`Xp\` \`Economy\`");

 
        const helpall = new Discord.MessageEmbed();

        helpall.setTitle("Bot Commands")
            .setColor("AQUA")
            .addFields({
                name: "General Commands",//6
                value: (    
                    "\`about\` \`bye\` \`dictionary\` \`hello\` \`rolldice\` \`say\`" 
                ),
                inline: false
            }) 
            .addFields({
                    name: "Fun Action Commands",//17
                    value: (
                        "\`8ball\` \`animeface\` \`animequote\` \`baka\` \`fight\` \`hug\` \`joke\` \`joust\` \`nom\` \`pat\` \`punch\` \`rate\` \`rps\` \`wink\`"
                    ),
                    inline: false                       
            })
            .addFields({
                name: "Image Commands",//11
                value: (
                    "\`birb\` \`cat\` \`dog\` \`fox\` \`kangaroo\` \`koala\` \`panda\` \`pikachu\` \`raccoon\` \`redpanda\`"
                ),
                inline: false
            }) 
            .addFields({
                name: "Utility Commands",//6
                value: (
                    "\`avatar\` \`joindate\` \`ping\` \`serverinfo\` \`userinfo\` \`ytsearch\`"
                ),
                inline: false
            }) 
            .addFields({
                name: "XP Commands",
                value: (
                    "\`leaderboard\` \`level\`" //2
                ),
                inline: false
            })
            .addFields({
                name: "Fact Commands",//9
                value: (
                    "\`birbfact\` \`catfact\` \`dogfact\` \`foxfact\` \`kangaroofact\` \`koalafact\` \`pandafact\` \`raccoonfact\` \`redpandafact\`"
                ),
                inline: false
            })
            .addFields({
                name: "Economy Commands",//17
                value: (
                    "\`bal\` \`beg\`  \`buy\`  \`craft\` \`daily\` \`fish\` \`forage\` \`hourly\` \`inventory\` \`mine\` \`prcreate\` \`shop\` \`work\`"
                ),
                inline: false
            });


            const helpgeneral = new Discord.MessageEmbed();

            helpgeneral.setTitle("General Commands")
            .setColor("AQUA")
            .addFields({
                name: "Commands",//6
                value: (
                    `!about - get information about meee.. :) \n` +
                    `!bye - Say goodbye to the bot! \n` +
                    `!dictionary - Get the definition of a word. \n` +              
                    `!hello - Say hello to the bot! \n` +
                    `!rolldice - Roll a 6 sided dice. \n`  +
                    `!say - Make me say anything you want. \n` 
                ),
                inline: false
            });

            const helputility = new Discord.MessageEmbed();

            helputility.setTitle("Utility Commands")//5
            .setColor("AQUA")
            .addFields({
                name: "Commands",
                value: (
                    `!avatar - Show a user's avatar. \n` +
                    `!joindate - Checks when a user joined the server. \n` +
                    `!ping - Check the ping of the bot and your messages. \n` +
                    `!userinfo - Gets the info of a user \n` +
                    `!ytsearch - Search Youtube for a video. \n`                     
                ),
                inline: false
            });

            const helpfun = new Discord.MessageEmbed();

            helpfun.setTitle("Fun Action Commands")//14
            .setColor("AQUA")
            .addFields({
                name: "Commands",
                value: (
                    `!8ball - Ask the Magic 8Ball a question. \n` +
                    `!animeface - Get someones animeface. \n` +
                    `!animequote - Get a random anime quote.  \n` +
                    `!baka - Call another user a b-baka... \n` +
                    `!fight - Fight another user. \n` +
                    `!hug - Hug another user. \n` +
                    `!joke - Get a random joke. \n` +
                    `!joust - Joust another user. \n` +
                    `!nom - Nom on another user. Yum~ \n` +
                    `!pat - Pat another user. \n` +
                    `!punch - Punch another user. \n` +
                    `!rate - Rates anything stated out of 10. \n` +
                    `!rps - Play rock paper scissors with me. \n` +
                    `!wink - Get a gif of an anime character winking. \n` 
                ),
                inline: false                       
                });

                const helpfacts = new Discord.MessageEmbed();

                helpfacts.setTitle("Fact Commands")//9
                .setColor("AQUA")
                .addFields({
                    name: "Commands",
                    value: (
                        `!birbfact - Gives a fact about birbs. \n` +
                        `!catfact - Gives a fact about cats. \n` +
                        `!dogfact - Gives a fact about dog. \n` +    
                        `!foxfact - Gives a fact about foxes. \n` +        
                        `!kangaroofact - Gives a fact about kangaroo. \n` +   
                        `!koalafact - Gives a fact about koala. \n` +         
                        `!pandafact - Gives a fact about pandas. \n` +
                        `!raccoonfact - Gives a fact about raccoon. \n` +
                        `!redpandafact - Gives a fact about pandas.`
                    ),
                    inline: false
                });





                const helpxp = new Discord.MessageEmbed();

                helpxp.setTitle("Xp Commands")//2
                .setColor("AQUA")
                .addFields({
                    name: "Commands",
                    value: (
                        `!leaderboard - Shows the top 5 people with the most xp within that specified server. \n` +
                        `!level - Shows a mentioned users level. \n` 
                    ),
                    inline: false
                });

                const helpimage = new Discord.MessageEmbed();

                helpimage.setTitle("Image Commands")//11
                .setColor("AQUA")
                .addFields({
                    name: "Commands",
                    value: (
                        `!birb - Get a random image of a birb. \n` +
                        `!cat - Get a random image of a cat. \n` +
                        `!dog - Get a random image of a dog. \n` +
                        `!fox - Get a random image of a fox. \n` +
                        `!kangaroo - Get a random image of a kangaroo. \n` +
                        `!koala - Get a random image of a koala. \n` +
                        `!panda - Get a random image of a panda. \n` +
                        `!pikachu - Get a random image of pikachu. \n` +
                        `!raccoon - Get a random image of a raccoon. \n` +
                        `!redpanda - Get a random image of a redpanda. \n`
                    ),
                    inline: false
                });
                
                const helpeconomy = new Discord.MessageEmbed();

                helpeconomy.setTitle("Economy Commands")
                .setColor("AQUA")
                .addFields({
                name: "Commands",//17
                value: (
                    `!balance - Check the amount of money inside of your wallet and bank. \n` +
                    `!beg - Beg me for some money UwU. \n` +
                    `!build - Get your builders to build for you. \n` +
                    `!buy - Buy some items from me. \n` +
                    `!craft - Craft yourself an axe, pickaxe or fishing rod. \n` +
                    `!daily - Get your daily allowance. \n` +
                    `!fish - Fish for some fish and get some money for it. \n` +
                    `!forage - Forage the forest for some items. \n` +
                    `!hourly - Get your hourly allowance. \n` +
                    `!inventory - Check what items you have purchased. \n` +
                    `!mine - Get your miners to mine for you. \n` +
                    `!prcreate - Create an economy account with Me <3. ***YOU NEED THIS TO USE ECONOMY COMMANDS!!*** \n` +
                    `!shop - Check out some of the items that I am selling. \n` +
                    `!work - Work for me and receive some cash for it. \n`
                ),
                inline: false
            });







        if(!args[0]) return message.channel.send({ embeds: [help] });
        const type = args[0];
        const helpType = type.toLowerCase();
        if(helpType == "all") return message.channel.send({ embeds: [helpall] });     
        if(helpType == "general") return message.channel.send({ embeds: [helpgeneral] });
        if(helpType == "utility") return message.channel.send({ embeds: [helputility] });
        if(helpType == "fact") return message.channel.send({ embeds: [helpfacts] });
        if(helpType == "facts") return message.channel.send({ embeds: [helpfacts] });
        if(helpType == "fun") return message.channel.send({ embeds: [helpfun] });
        if(helpType == "image") return message.channel.send({ embeds: [helpimage] });
        if(helpType == "xp") return message.channel.send({ embeds: [helpxp] });
        if(helpType == "economy") return message.channel.send({ embeds: [helpeconomy] });
        if(helpType == "eco") return message.channel.send({ embeds: [helpeconomy] });
        if(helpType == "music") return message.channel.send({ embeds: [helpMusic] });
        else message.channel.send({ embeds: [help] });
    }
}
