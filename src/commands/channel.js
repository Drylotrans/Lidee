const Command = require("../structures/Command");
const { MessageEmbed } = require("discord.js");

module.exports = class Channel extends Command {
    constructor(client) {
        super(client, {
            name: "channel",
            category: 5
        });
    }

    async run(message, args) {
        let channel = message.guild.channels.resolve(args[0]) || message.mentions.channels.first() || (args.join(" ").length > 2 ? message.guild.channels.cache.sort((a, b) => a.name.localeCompare(b.name)).find((c) => c.name.toLowerCase().includes(args.join(" ").toLowerCase())) : null) || message.channel;
        let alloweds = [];
        let denieds = [];
        message.guild.roles.cache
            .sort((a, b) => b.rawPosition - a.rawPosition)
            .forEach((role) => {
                let permissions = channel.permissionsFor(role.id);
                if (!permissions.has("SEND_MESSAGES") || !permissions.has("VIEW_CHANNEL"))
                    denieds.push(`<@&${role.id}>`)
                else
                    alloweds.push(`<@&${role.id}>`);
            });

        message.channel.send(new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(`${channel.parent ? `${channel.parent}\n` : ""}> **<#${channel.id}>** ${channel.nsfw ? "🔞 " : ""}${this.lang.get("id", channel.id)}${channel.topic ? `\n\n> ${channel.topic}` : ""}`)
            .addField(this.lang.get("channelCreated"), this.lang.parseCompleteDate(message.channel.createdAt))
            .addField(this.lang.get("channelCooldown"), this.lang.parseTime(message.channel.rateLimitPerUser * 1000))
            .addField(this.lang.get("channelSee"), alloweds.includes(`<@&${channel.guild.id}>`) ? "@everyone" : alloweds.join(", "))
            .addField(this.lang.get("channelNoSee"), denieds.includes(`<@&${channel.guild.id}>`) ? "@everyone" : denieds.join(", "))
            .setColor(0x6666ff));
    }
}