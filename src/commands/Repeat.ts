import { BaseCommandInteraction, Client, MessageEmbed, MessageOptions } from "discord.js";
import { ApplicationCommandTypes } from "discord.js/typings/enums";
import { MessageOptionsFactory } from "../common/MessageOptionFactory";
import { Command } from "../Commands";

export const Repeat: Command = {
    name: "repeat",
    description: "Repeats previously sent message",
    type: ApplicationCommandTypes.CHAT_INPUT,
    run: async (_, interaction: BaseCommandInteraction) => {
        const channel = interaction.channel!;

        let message = await channel.messages
            .fetch( {limit: 1} )
            .then(messagePage => (messagePage.size === 1 ? messagePage.at(0) : null));

        if (message === undefined || message === null) {
            await interaction.reply({
                ephemeral: true,
                content: "Unable to fetch messages. Are there any on this channel?"
            });
            return
        }

        let options : MessageOptions = MessageOptionsFactory
            .getFactory()
            .withContent(message.content)
            .withEmbeds(message.embeds)
            .getMessageOptions();
        

        if (message != null) {
            await message.channel.send(options)
        }

        await interaction.reply({
            ephemeral: true,
            content: "Done!"
        });
    }
}; 