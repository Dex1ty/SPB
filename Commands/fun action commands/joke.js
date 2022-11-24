module.exports = {
    name: "joke",
    description: "Sends a random joke",
  async run(client, message, args){
      const Memer = require("random-jokes-api");
      let jokes = Memer.joke();



        message.reply(`Here is your joke: \n${jokes}`);
    }
}
