const fs = require("node:fs");
const path = require("node:path");
const { Client, Message } = require("revolt.js");
const { token } = require("./config.json");
const { daily } = require("./daily");
const { quote } = require("./quote");

const client = new Client();
const message = new Message();

client.on("ready", async () => {
  console.info(`Logged in as ${client.user.username}! Current time: ${Date()}`);
  client.channels
    .get("01HM6DKFX0W1D1MYR06RD1D69A")
    .sendMessage(`${await daily()}`);
  console.info(`Daily greeting posted! Post time: ${Date()}`);
});

async function pinger() {
  client.channels
    .get("01H10DJPQ01GMQ7N86J2JBTDW7")
    .sendMessage(`${await quote()}`);
  console.info(`Ping sent! Post time: ${Date()}`);
}
setInterval(pinger, 600000);

client.loginBot(token);
