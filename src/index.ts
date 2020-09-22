import discord from "discord.js";
import express from "express";
import bodyParser from "body-parser";
import { webhookRouter } from "./webhookHandler";

const client = new discord.Client();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/",
  (req, _res, next) => {
    req.body.client = client;
    next();
  },
  webhookRouter
);

client.on("ready", () => {
  console.log("Bot is ready!");
});
app.listen(port, () => console.log("Server is ready!"));

client.login(process.env.TOKEN);
