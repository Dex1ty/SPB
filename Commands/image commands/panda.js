module.exports = {
    name: "panda",
    description: "Gets an image of a panda",
  async run(client, message, args){
      const fetch = require("node-fetch");

      fetch('https://some-random-api.ml/animal/panda')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
