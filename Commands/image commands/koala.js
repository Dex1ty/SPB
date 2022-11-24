module.exports = {
    name: "koala",
    description: "Gets an image of Koala",
  async run(client, message, args){
const fetch = require("node-fetch");
fetch('https://some-random-api.ml/animal/koala')
    .then(res => res.json())
    .then(json => {
      message.channel.send(`${json.image}`)
    });
    }
}
