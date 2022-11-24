module.exports = {
    name: "pandafact",
    description: "Gets a fact about a panda",
  async run(client, message, args){
      const fetch = require("node-fetch");

      fetch('https://some-random-api.ml/animal/panda')
    .then(res => res.json())
    .then(json => {
      message.reply(`${json.fact}`)
    });
    }
}
