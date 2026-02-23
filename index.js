import fs from "node:fs";
import path from "node:path";
import { Client, Message } from "revolt.js";
import config from "./config.json" with { type: "json" };
const { token } = config;
import configDaily from "./config-daily.json" with { type: "json" };
const { channelGreeting, channelAdoration } = configDaily;
import { daily } from "./daily.js";
import { miyabi } from "./miyabi.js";

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
  if (date.getHours() === 7 && date.getMinutes() === 25) {
    client.channels
      .get(channelGreeting)
      .sendMessage(`${await daily()}`);
    console.info(`Daily greeting sent! Post time: ${Date()}`);
  }
}
setInterval(greeting, 60000);

async function adoration() {
  var date = new Date();
  if (date.getHours() === 22 && date.getMinutes() === 17) {
    client.channels
      .get(channelAdoration)
      .sendMessage(`${await miyabi()}`);
    console.info(`Daily Miyabi sent! Post time: ${Date()}`);
  }
}
setInterval(adoration, 60000);

client.loginBot(token);
