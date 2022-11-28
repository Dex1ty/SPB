const KeepAlive = require("./server");
const { Client, Intents , Collection, ActivityType } = require('discord.js');
const { REST } = require("@discordjs/rest")
const { Routes } = require('discord-api-types/v9')


const client = new Client({
	intents: new Intents(32767)
})
const token = process.env['token'];
const PREFIX = process.env['prefix'];
const clientId = process.env['clientID'];
const guildId = process.env['guildID'] //TEMP FOR TESTING PURPOSES



const { readdirSync, read } = require("fs");

const Timeout = new Collection();
const ms = require("ms");

const mongoose = require("mongoose");
const ProfileData = require("./Models/ProfileSchema");

//Levels
const Levels = require("discord-xp");
Levels.setURL(process.env['mongodbsrv']);




//Prefix Commands
client.commands = new Collection();
const commandFolders = readdirSync('./Commands');


for(const folder of commandFolders) {
  const commandFiles = readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
  for(const file of commandFiles) {
    const command = require(`./Commands/${folder}/${file}`);
    client.commands.set(command.name, command)
  }
}



//Slash Commands
const path = require("path");
const slashCommands = []
client.slashCommands = new Collection();

const commandsPath = path.join(__dirname, 'SlashCommands');
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const slashComm = require(filePath);
if("data" in slashComm && "run" in slashComm) {
client.slashCommands.set(slashComm.data.name, slashComm);
slashCommands.push(slashComm.data.toJSON());
} else {
  console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "run" property.`);
}
}







//EVENTS
client.on("error", console.error);

client.on("guildMemberRemove", (member, guild) => {
  const guildL = member.guild.id
  Levels.deleteUser(member, guildL);
})


client.on('ready', () => {
  const rest = new REST({ version: '10' }).setToken(token);

  (async () => {
    try {
      console.log(`Started refreshing ${slashCommands.length} application (/) commands.`);
  
      // The put method is used to fully refresh all commands in the guild with the current set
      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: slashCommands },
      );
  
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
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
    client.user.setPresence({ activities: [{ name: `${PREFIX}help | ${statusQ}`, type: ActivityType.Playing }], status: "dnd" }); 
    index++;
  }, 20000)
  console.log("Senpai Bot is now Online.");
  console.log(client.guilds.cache.size)
}) //Sets the bots presence and logs when the bot is online.

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }
  const slashComms = client.slashCommands.get(interaction.commandName);
  if (!slashComms) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await slashComms.run({client, interaction});
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
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



//Mongoose Database Connection
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