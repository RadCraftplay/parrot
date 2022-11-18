import { Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isCommand()) {
           return;
        }

        const slashCommand = Commands.find(c => c.name === interaction.commandName);
        if (!slashCommand) {
            interaction.reply({ content: "An error has occurred", ephemeral: true });
            return;
        }
	
        slashCommand.run(client, interaction);
    });
};