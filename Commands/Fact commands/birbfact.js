module.exports = {
    name: "birbfact",
    description: "Get a fact of a birb",
  async run(client, message, args){
      const fetch = require("node-fetch");
      fetch('https://some-random-api.ml/animal/bird')
      .then(res => res.json())
      .then(json => {
      message.reply(`${json.fact}`)
    })
}}
