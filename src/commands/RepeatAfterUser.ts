import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { ApplicationCommandOptionTypes, ApplicationCommandTypes } from "discord.js/typings/enums";
import { Command } from "../Commands";

export const RepeatAfterUser: Command = {
    name: "mimic",
    description: "Repeats last message send by a particullar user",
    type: ApplicationCommandTypes.CHAT_INPUT,
    options: [
        {
            name: "dest",
            description: "User to read message from",
            required: true,
            type: ApplicationCommandOptionTypes.USER
        }
    ],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const user = interaction.options.getUser("dest");
        const channel = interaction.channel!;

        let message = await channel.messages.fetch({ limit: 100 })
            .then(messagePage => messagePage.find(msg => msg.author.id === user?.id));

        if (message === undefined) {
            await interaction.followUp({
                ephemeral: true,
                content: `No messages by user ${user?.username} found in the last 100 messages!`
            });
            return
        }

        let responseContent = message?.content != null ?
            message.content :
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