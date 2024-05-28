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
});

client.on("logout", () =>
  console.log(`Client disconnected at ${new Date().toISOString()}`)
);

async function greeting() {
  var date = new Date();
  if (date.getHours() === 23 && date.getMinutes() === 00) { //Time in GMT! (2100GMT/0600JST)
    client.channels
      .get("01H7JD5MGA7P9YN1628298T06Z")
      .sendMessage(`${await daily()}`);
    console.info(`Daily greeting sent! Post time: ${Date()}`);
  }
}
setInterval(greeting, 60000);

async function pinger() {
  client.channels
    .get("01H7JD5MGA7P9YN1628298T06Z")
    .sendMessage(`${await quote()}`);
  console.info(`Ping sent! Post time: ${Date()}`);
}
setInterval(pinger, 1800000);

client.loginBot(token);
