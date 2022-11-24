module.exports = {
    name: "animequote",
    aliases: ['aq'],
    description: "Get a Quote from an anime",
  async run(client, message, args){
      const fetch = require("node-fetch");
fetch('https://some-random-api.ml/animu/quote')
    .then(res => res.json())
    .then(json => {
      message.reply(`Quote: ${json.sentence} \nCharacter: ${json.character} \nAnime: ${json.anime}`)
    })
}}
