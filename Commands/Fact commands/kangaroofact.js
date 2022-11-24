module.exports = {
    name: "kangaroofact",
    description: "Gets a fact about kangaroos",
  async run(client, message, args){
      const fetch = require("node-fetch");
fetch('https://some-random-api.ml/animal/kangaroo')
    .then(res => res.json())
    .then(json => {
      message.reply(`${json.fact}`)
    });
    }
}
