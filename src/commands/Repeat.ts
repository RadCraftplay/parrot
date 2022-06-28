import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { ApplicationCommandTypes } from "discord.js/typings/enums";
import { Command } from "../Commands";

export const Repeat: Command = {
    name: "repeat",
    description: "Repeats previously sent message",
    type: ApplicationCommandTypes.CHAT_INPUT,
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const channel = interaction.channel!;

        let message = await channel.messages
            .fetch( {limit: 2} )
            .then(messagePage => (messagePage.size === 2 ? messagePage.at(1) : null));

        if (message === null) {
            await interaction.followUp({
                ephemeral: true,
                content: "Unable to fetch messages. Are there any on this channel?"
            });
            return
        }

        let responseContent = message?.content != null ?
            message?.author.username + " said: \n" + message.content :
            message?.author.username + " said:";
        
        let responseEmbeds : MessageEmbed[] = message?.embeds != null ?
            message.embeds : [];

        if (message != null) {
            await interaction.followUp({
                ephemeral: true,
                embeds: responseEmbeds,
                content: responseContent
            });
        }
    }
}; 