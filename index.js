const fs = require("node:fs");
const path = require("node:path");
const { Client, Message } = require("revolt.js");
const { token } = require("./config.json");
const { daily } = require("./daily");
const { miyabi } = require("./miyabi");
// const { quote } = require("./quote");

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
  if (date.getHours() === 13 && date.getMinutes() === 50) {
    client.channels
      .get("01HM6DKFX0W1D1MYR06RD1D69A")
      .sendMessage(`${await daily()}`);
    console.info(`Daily greeting sent! Post time: ${Date()}`);
  }
}
setInterval(greeting, 60000);

async function adoration() {
  var date = new Date();
  if (date.getHours() === 23 && date.getMinutes() === 56) {
    client.channels
      .get("01K47MW7W4FKDBDAM587A0Q3P3")
      .sendMessage(`${await miyabi()}`);
    console.info(`Daily Miyabi sent! Post time: ${Date()}`);
  }
}
setInterval(adoration, 60000);

/*async function pinger() {
  client.channels
    .get("01HNXT95HQFJVD9KHDVM6K854N")
    .sendMessage(`${await quote()}`);
  console.info(`Ping sent! Post time: ${Date()}`);
}
setInterval(pinger, 1800000);

*/

client.loginBot(token);
