const fs = require("node:fs");
const path = require("node:path");
const { Client, Message } = require("revolt.js");
const { token } = require("./config.json");
const { channelGreeting, channelAdoration } = require("./config-daily.json");
const { daily } = require("./daily");
const { miyabi } = require("./miyabi");

const client = new Client();
const message = new Message();

client.on("ready", async () => {
  console.info(`Logged in as ${client.user.username}! Current time: ${Date()}`);
});

client.on("logout", () =>
  console.log(`Client disconnected at ${new Date().toISOString()}`)
);

async function greeting() {
  var date = new Date();
  if (date.getHours() === 22 && date.getMinutes() === 15) {
    client.channels
      .get(channelGreeting)
      .sendMessage(`${await daily()}`);
    console.info(`Daily greeting sent! Post time: ${Date()}`);
  }
}
setInterval(greeting, 60000);

async function adoration() {
  var date = new Date();
  if (date.getHours() === 14 && date.getMinutes() === 20) {
    client.channels
      .get(channelAdoration)
      .sendMessage(`${await miyabi()}`);
    console.info(`Daily Miyabi sent! Post time: ${Date()}`);
  }
}
setInterval(adoration, 60000);

client.loginBot(token);
