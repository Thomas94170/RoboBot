const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (bot, message) => {
  let prefix = "?";

  let messageArray = message.content.split(" ");

  let commandName = messageArray[0].slice(prefix.length);

  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  let command = require(`../Commandes/${commandName}`);
  if (!command) return message.reply("aucune commande !");

  command.run(bot, message, args);
};
