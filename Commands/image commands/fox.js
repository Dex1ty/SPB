module.exports = {
    name: "fox",
    description: "Sends an image of a fox",
  async run(client, message, args){
      const fetch = require("node-fetch");
        fetch('https://some-random-api.ml/animal/fox')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
