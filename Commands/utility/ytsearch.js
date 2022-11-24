module.exports = {
    name: "ytsearch",
    description: "Search youtube for a video",
    aliases: ['youtubesearch', 'youtube'],
  async run(client, message, args){
      const yts = require("yt-search");

      if (!args.length) return message.reply('A search query is required.')
        message.reply("Searching Youtube for videos.... This may take a minute or two.")
        const searched = await yts.search(args.join(' '));
        message.channel.send(!searched.videos.length ? 'No Results were found.' : searched.videos[0].url);
    }
}
