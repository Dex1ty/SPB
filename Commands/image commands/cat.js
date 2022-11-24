module.exports = {
    name: "cat",
    description: "Sends an image of a cat",
  async run(client, message, args){
      const fetch = require("node-fetch");

      fetch('https://some-random-api.ml/animal/cat')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
