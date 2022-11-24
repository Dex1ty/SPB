module.exports = {
    name: "raccoonfact",
    description: "Get a fact about a coon.",
  async run(client, message, args){
      const fetch = require("node-fetch");

fetch('https://some-random-api.ml/animal/raccoon')
    .then(res => res.json())
    .then(json => {
      message.reply(`${json.fact}`)
    });
    }
}
