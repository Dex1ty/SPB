module.exports = {
    name: "pikachu",
    description: "Get an image of pikachu",
  async run(client, message, args){
      const fetch = require("node-fetch");

      fetch('https://some-random-api.ml/img/pikachu')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.link}`)
    });
    }
}
