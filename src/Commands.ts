import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { Repeat } from "./commands/Repeat";
import { RepeatAfterId } from "./commands/RepeatAfterId";
import { RepeatAfterUser } from "./commands/RepeatAfterUser";

export const Commands: Command[] = [ Repeat, RepeatAfterUser, RepeatAfterId ];

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}