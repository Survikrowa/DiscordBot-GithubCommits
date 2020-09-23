import { Router } from "express";
import type { Client, TextChannel } from "discord.js";

export const webhookRouter = Router();

webhookRouter.post("/payload/:secret", async (req, res) => {
  if (req.params.secret !== process.env.GITHUB_SECRET) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const client: Client = req.body.client;
  const guild = client.guilds.cache.find(
    (g) => g.id === process.env.DISCORD_GUILD_ID
  );
  const channel = guild?.channels.cache.find(
    (ch) => ch.id === process.env.DISCORD_CHANNEL_ID
  ) as TextChannel;

  const branch: string = req.body.ref;
  const date = new Date();
  const author: string = req.body.commits[0].author.name;
  const commits: Commmits[] = req.body.commits;
  const commitsMessages = commits.map((commit) => `- ${commit.message}\n`);

  const messageTemplate = `#Author: ${author}\n#Date: [${date.toLocaleString(
    "en-GB",
    { timeZone: "UTC" }
  )}]\n#Summary: ${branch.slice(11)}:\n${commitsMessages.join("")}`;

  channel.send(messageTemplate, { code: "css" });
  return res.status(201).send("");
});

type Commmits = {
  id: string;
  tree_id: string;
  distinct: boolean;
  message: string;
  timestamp: Date;
  url: string;
  author: Author;
  commiter: Commiter;
  added: string[];
  removed: string[];
  modified: string[];
};

type Author = {
  name: string;
  email: string;
};

type Commiter = {
  name: string;
  email: string;
};
