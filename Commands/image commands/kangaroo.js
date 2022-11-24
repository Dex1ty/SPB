module.exports = {
    name: "kangaroo",
    description: "Gets an image of a kangaroo",
  async run(client, message, args){
      const fetch = require("node-fetch");
fetch('https://some-random-api.ml/animal/kangaroo')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
