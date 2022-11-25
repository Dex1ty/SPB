const KeepAlive = require("./server");
const { Client, Intents, Collection } = require('discord.js');
//fix

const client = new Client({
	intents: new Intents(32767)
})
const token = process.env['token'];
const PREFIX = process.env['prefix']

const { readdirSync, read } = require("fs");

const Timeout = new Collection();
const ms = require("ms");

const mongoose = require("mongoose");
const ProfileData = require("./Models/ProfileSchema");

//Levels
const Levels = require("discord-xp");
Levels.setURL(process.env['mongodbsrv']);


client.commands = new Collection();
const commandFolders = readdirSync('./Commands');


for(const folder of commandFolders) {
  const commandFiles = readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
  for(const file of commandFiles) {
    const command = require(`./Commands/${folder}/${file}`);
    client.commands.set(command.name, command)
  }
}

client.on("error", console.error);

client.on("guildMemberRemove", (member, guild) => {
  const guildL = member.guild.id
  Levels.deleteUser(member, guildL);
})


client.on('ready', () => {
  const guildTest = "1045550548826472491"
  const guildTests = client.guilds.cache.get(guildTest)

  if(guildTests){
    slashComms = guildTests.commands
  } else {
    slashComms = client.application.commands
  }
  slashComms.create({
    name: "ping",
    description: "Replies with pong"
  })


  //PRESENCE - MORE NEEDS TO BE ADDED
  const status = [
  `My prefix is !`,
  `Vibing with Dex1ty!`,
  `Vibing with Bob`,
  `Gotta Mic?`
  ];

  let index = 0;
  setInterval(() => {
    if(index === status.length) index = 0;
    const statusQ = status[index];
    client.user.setPresence({ activities: [{ name: `${PREFIX}help | ${statusQ}`, type: "PLAYING" }], status: "dnd" }); 
    index++;
  }, 20000)
  console.log("Senpai Bot is now Online.");
  console.log(client.guilds.cache.size)
}) //Sets the bots presence and logs when the bot is online.

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction

  if(commandName === "ping"){
    interaction.reply({
      content: "pong",
      ephemeral: true
    })
  }
})




client.on("messageCreate", async (message) => {
  //If the author of the message is a bot
  if(message.author.bot) return;

  //If the message is a private message
  if(message.channel.type === 'dm') return;

  //Levels
const randomXP = Math.floor(Math.random() *29) + 1; //Gives xp 1 to 30
const hasLeveledUP = await Levels.appendXp(message.author.id, message.guild.id, randomXP);


if (hasLeveledUP) {
//Gets user's level data.
const user = await Levels.fetch(message.author.id, message.guild.id);

//Level up message
message.channel.send(`${message.member}, Conuwulations you have proceeded to level ${user.level}. Continue earning xp.`)
} 
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);

  if(message.content.startsWith(PREFIX)) {


    //Finding command
    const commandNames = args.shift().toLowerCase();
    const command = client.commands.get(commandNames) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandNames));
    if(!command) return;                



    if (command) {
         //Permissions 
         if(!message.member.permissions.has(command.perms || [])) return message.reply("You don't have permission to use that command.");

         //Cooldowns
         if(command.cooldown) {
          if(Timeout.has(`${command.name}${message.author.id}`)) return message.reply(`Please wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true})}\` Before using this command again.`)
          command.run(client, message, args, ProfileData, Timeout)
          Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown);
          setTimeout(() => {
            Timeout.delete(`${command.name}${message.author.id}`)
          }, command.cooldown)
        }else command.run(client, message, args, ProfileData, Timeout);
       }
    }
  })




mongoose.connect(process.env['mongodbsrv'],{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database.')
}).catch((err) =>{
  console.log(err);
})


client.login(token)
KeepAlive();