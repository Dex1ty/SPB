module.exports = {
    name: "raccoon",
    description: "Get an image of a raccoon",
  async run(client, message, args){
      const fetch = require("node-fetch");

fetch('https://some-random-api.ml/animal/raccoon')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
