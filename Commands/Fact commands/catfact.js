module.exports = {
    name: "catfact",
    description: "Sends a fact about a cat",
  async run(client, message, args){
      const fetch = require("node-fetch");

fetch('https://some-random-api.ml/animal/cat')
    .then(res => res.json())
    .then(json => {
      message.reply(`${json.fact}`)
    });
    }
}
