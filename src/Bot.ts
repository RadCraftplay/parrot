import { Client, Intents } from "discord.js";
import { token } from "./config.json";
import interactionCreate from "./listeners/interactionCreate"
import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});
client.login(token);

ready(client);
interactionCreate(client);