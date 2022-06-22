import { Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.once("ready", async () => {
        console.log(`Ready!`);
    });
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);
    });
}; 