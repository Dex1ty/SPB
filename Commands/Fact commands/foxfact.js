module.exports = {
    name: "foxfact",
    description: "Sends a fact about foxes",
  async run(client, message, args){
      const fetch = require("node-fetch");
        fetch('https://some-random-api.ml/animal/fox')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.fact}`)
    });
    }
}
