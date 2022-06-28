import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { Repeat } from "./commands/Repeat";
import { RepeatAfterUser } from "./commands/RepeatAfterUser";

export const Commands: Command[] = [ Repeat, RepeatAfterUser ];

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}