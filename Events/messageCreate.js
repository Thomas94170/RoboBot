const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (bot, message) => {
  let prefix = "?";

  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");

  let commandName = messageArray[0].slice(prefix.length);

  let args = messageArray.slice(1);

  let commandFile = `../Commandes/${commandName}.js`;
  if (!fs.existsSync(commandFile)) return;

  let command = require(commandFile);
  if (!command) return message.reply("aucune commande !");

  command.run(bot, message, args);
};
