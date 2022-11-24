module.exports = {
    name: "dog",
    description: "Sends an image of a dog",
  async run(client, message, args){
      const fetch = require("node-fetch");
        fetch('https://some-random-api.ml/animal/dog')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
