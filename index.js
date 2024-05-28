const fs = require("node:fs");
const path = require("node:path");
const { Client, Message } = require("revolt.js");
const { token } = require("./config.json");
const { daily } = require("./daily");

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
  if (date.getHours() === 14 && date.getMinutes() === 30) {
    client.channels
      .get("01H7JD5MGA7P9YN1628298T06Z")
      .sendMessage(`${await daily()}`);
    console.log(`Daily greeting sent! Post time: ${Date()}`);
  }
}
setInterval(greeting, 60000);

client.loginBot(token);
