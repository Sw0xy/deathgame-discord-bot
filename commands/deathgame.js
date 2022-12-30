import { ChannelType, EmbedBuilder, PermissionsBitField } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";
import { setTimeout as wait } from "node:timers/promises";

export default {
  data: new SlashCommandBuilder()
    .setName("deathgame")
    .setDescription("Start game!")
    .addStringOption((option) =>
      option
        .setName("channel-name")
        .setRequired(true)
        .setDescription("The channel to echo into")
    ),

  run: async (client, interaction) => {
    interaction.reply(`Loading...`);
    const channels = interaction.guild.channels.fetch();
    let cArray = [];
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Some title")
      .addFields({ name: "Regular field title", value: "Some value here" });

    await channels.then((x) => {
      x.map((channel) => {
        cArray.push(channel.name);
      });
    });

    const kanalVarMi = await cArray.includes("deathgame");

    if (kanalVarMi === false) {
      interaction.guild.channels.create({
        name: "deathgame",
        type: ChannelType.GuildVoice,
        reason: "Needed a cool new channel",
      });

      interaction.guild.channels
        .create({
          name: "deathgame",
          type: ChannelType.GuildText,
          reason: "Needed a cool new channel",
        })
        .then((xs) =>
          client.channels.cache.get(xs.id).send({ embeds: [embed] })
        );
    }
    console.log(textChannelId);
    //const channelName = interaction.options.getString("channel-name");

    /*   await wait(2000);
   
    await interaction.editReply(`${guild.name}`); */
  },
};
