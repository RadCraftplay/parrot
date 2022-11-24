import { Collection, MessageAttachment, MessageEmbed, MessageOptions } from "discord.js";

export class MessageOptionsFactory {

    private content : string | null = null;
    private embeds : MessageEmbed[] | null = null;
    private attachments : MessageAttachment[] | null = null;

    private constructor()
    {
        
    }

    public static getFactory() : MessageOptionsFactory
    {
        return new MessageOptionsFactory();
    }

    public withContent(c : string | null) : MessageOptionsFactory {
        if (c == null || c.length == 0) {
            this.content = null;
        } else {
            this.content = c;
        }
        
        return this;
    }

    public withEmbeds(e : MessageEmbed[] | null) : MessageOptionsFactory {
        this.embeds = e;
        return this;
    }

    // TODO(#1): Add proper attachment support
    /*
    public withAttachments(a : MessageAttachment[] | Collection<string, MessageAttachment> | null) : MessageOptionsFactory {
        if (a instanceof Collection<string, MessageAttachment>) {
            this.attachments = a != null ?
                a.map(e => e) : null;
                
        } else {
            this.attachments = a;
        }
        
        return this;
    }
    */

    public getMessageOptions() : MessageOptions {
        let options : MessageOptions = {};

        if (this.content != null) {
            options.content = this.content;
        }

        if (this.embeds != null) {
            options.embeds = this.embeds;
        }

        if (this.attachments != null) {
            options.attachments = this.attachments;
        }

        return options;
    }
}
