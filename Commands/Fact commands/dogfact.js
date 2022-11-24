module.exports = {
    name: "dogfact",
    description: "Sends a fact about dogs",
  async run(client, message, args){
      const fetch = require("node-fetch");
        fetch('https://some-random-api.ml/animal/dog')
    .then(res => res.json())
    .then(json => {
      message.reply(`${json.fact}`)
    });
    }
}
