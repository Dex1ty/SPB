module.exports = {
    name: "koalafact",
    description: "Gets a fact about koalas",
  async run(client, message, args){
const fetch = require("node-fetch");
fetch('https://some-random-api.ml/animal/koala')
    .then(res => res.json())
    .then(json => {
      message.reply(`${json.fact}`)
    });
    }
}
