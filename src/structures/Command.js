/*
Permissions: {
  CREATE_INSTANT_INVITE
  KICK_MEMBERS
  BAN_MEMBERS
  ADMINISTRATOR
  MANAGE_CHANNELS
  MANAGE_GUILD
  ADD_REACTIONS
  READ_MESSAGES
  SEND_MESSAGES
  SEND_TTS_MESSAGES
  MANAGE_MESSAGES
  EMBED_LINKS
  ATTACH_FILES
  READ_MESSAGE_HISTORY
  MENTION_EVERYONE
  EXTERNAL_EMOJIS
  CONNECT
  SPEAK
  MUTE_MEMBERS
  DEAFEN_MEMBERS
  MOVE_MEMBERS
  USE_VAD
  CHANGE_NICKNAME
  MANAGE_NICKNAMES
  MANAGE_ROLES_OR_PERMISSIONS
  MANAGE_WEBHOOKS
  MANAGE_EMOJIS
}
 */

module.exports = class Command {
    constructor(client, options) {
        this.client = client;
        this.name = options.name;
        this.aliases = options.alises || [];
        this.cooldown = options.cooldown || 3000;
        this.nsfw = options.nsfw || false;
        this.ownerOnly = options.ownerOnly || false;
        this.category = options.category;
        this.botPermissions = options.botPermissions || [];
        this.userPermissions = options.userPermissions || [];
        this.description = options.description || "This command doesn't have description yet.";

        //this.usersCooldown = new Collection();
    }

    prepare({ guild }) {
        this.guild = guild;
    }

    validate({ message }) {
        let conditionals = {
            ownerOnly: false,
            userPermissions: false,
            botPermissions: false,
            nsfw: false
        };

        if (this.ownerOnly)
            if (!this.client.ownersId.includes(message.author.id)) conditionals.ownerOnly = true;

        if (this.userPermissions.length > 0)
            if (!message.member.hasPermission(this.userPermissions)) {
                message.channel.send("You don't have permission to execute this command.");
                conditionals.userPermissions = true;
            }

        if (this.botPermissions.length > 0)
            if (!message.guild.me.hasPermission(this.botPermissions)) {
                conditionals.botPermissions = true;
                message.channel.send("I don't have permission to execute this command.");
            }

        if (this.nsfw)
            if (!message.channel.nsfw) {
                message.channel.send("This command must be executed in a NSFW channel.");
                conditionals.nsfw = true
            }

            /*
            if (this.cooldown > 0)
                if (!this.usersCooldown.has(message.author.id)) {
                    this.usersCooldown.set(message.author.id, Date.now());

                    setTimeout(() => {
                        this.usersCooldown.delete(message.author.id);
                    }, this.cooldown);

                    conditionals.cooldown = true;
                } else {
                    message.channel.send(`You need wait ${((Date.now() - this.usersCooldown.get(message.author.id)) / 1000).toFixed(1)} seconds to execute this command.`);
                    conditionals.cooldown = false;
                }
            */

        return conditionals;
    }
}