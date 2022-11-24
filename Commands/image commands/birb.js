module.exports = {
    name: "birb",
    description: "Get an image of a birb",
  async run(client, message, args){
      const fetch = require("node-fetch");
      fetch('https://some-random-api.ml/animal/birb')
      .then(res => res.json())
      .then(json => {
        message.channel.send(`${json.image}`)
    })
}}
