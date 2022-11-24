import { BaseCommandInteraction, MessageAttachment, MessageEmbed, MessageOptions, MessagePayload } from "discord.js";
import { ApplicationCommandOptionTypes, ApplicationCommandTypes } from "discord.js/typings/enums";
import { MessageOptionsFactory } from "../common/MessageOptionFactory";
import { Command } from "../Commands";

export const RepeatAfterId: Command = {
    name: "mimicid",
    description: "Repeats last message send by a particullar user with a specified id",
    type: ApplicationCommandTypes.CHAT_INPUT,
    options: [
        {
            name: "destid",
            description: "Id of the user to read the message from",
            required: true,
            type: ApplicationCommandOptionTypes.STRING
        }
    ],
    run: async (_, interaction: BaseCommandInteraction) => {
        const userId = interaction.options.get("destid");
        const channel = interaction.channel!;
        const pattern : RegExp = /^\d+$/;

        if (userId === null) {
            await interaction.reply({
                ephemeral: true,
                content: "No user id provided!"
            });
            return;
        }

        if (!pattern.test(userId?.value as string)) {
            await interaction.reply({
                ephemeral: true,
                content: "Invalid user id format"
            });
            return;
        }

        let message = await channel.messages.fetch({ limit: 100 })
            .then(messagePage => messagePage.find(msg => msg.author.id === userId?.value));

        if (message === undefined) {
            await interaction.reply({
                ephemeral: true,
                content: `No messages by user with id ${userId?.value} found in the last 100 messages!`
            });
            return;
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