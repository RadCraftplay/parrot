import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import { Repeat } from "./commands/Repeat";

export const Commands: Command[] = [ Repeat ];

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}