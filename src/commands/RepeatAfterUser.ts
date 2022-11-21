import { BaseCommandInteraction,  MessageOptions } from "discord.js";
import { ApplicationCommandOptionTypes, ApplicationCommandTypes } from "discord.js/typings/enums";
import { MessageOptionsFactory } from "src/common/MessageOptionFactory";
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
    run: async (_, interaction: BaseCommandInteraction) => {
        const user = interaction.options.getUser("dest");
        const channel = interaction.channel!;

        let message = await channel.messages.fetch({ limit: 100 })
            .then(messagePage => messagePage.find(msg => msg.author.id === user?.id));

        if (message === undefined) {
            await interaction.reply({
                ephemeral: true,
                content: `No messages by user ${user?.username} found in the last 100 messages!`
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