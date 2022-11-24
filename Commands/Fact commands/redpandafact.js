module.exports = {
    name: "redpandafact",
    description: "Get a fact about redpandas",
  async run(client, message, args){
      const fetch = require("node-fetch");
      fetch('https://some-random-api.ml/animal/red_panda')
    .then(res => res.json())
    .then(json => {
      message.reply(`${json.fact}`)
    });
    }
}
