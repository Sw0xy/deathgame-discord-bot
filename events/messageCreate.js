export default {
  name: "messageCreate",
  execute: async (message) => {
    let client = message.client;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    console.log("zort");
  },
};
