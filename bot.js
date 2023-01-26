require('dotenv').config();
const Discord = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
})

client.login(process.env.TOKEN)
.then(console.log("logged in"))
.catch(console.error);

client.on("message", (message) => {
  if (message.content.includes("ines")) {
    message.channel.send("Hello, ines was detected in this message!");
  }
  else {
    console.log("Incoming message");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

