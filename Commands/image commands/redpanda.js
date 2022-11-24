module.exports = {
    name: "redpanda",
    description: "Get an image of a red panda",
  async run(client, message, args){
      const fetch = require("node-fetch");
      fetch('https://some-random-api.ml/animal/red_panda')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
