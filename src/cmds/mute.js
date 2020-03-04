const Command = require("../structures/Command.js");

module.exports = class Mute extends Command {
  constructor(client) {
    super(client, {
      name: "mute",
      category: "Moderation",
      description: "Mutes an user from the member",
      botPermissions: ["MANAGE_ROLES"],
      userPermissions: ["MANAGE_ROLES"]
    });
  }

  async run(message, args) {
    let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
    if (!member) return message.channel.send("You need to mention an user or provide his ID.");

    let role = message.guild.roles.cache.find(r => r.name === "Tryxer Mute");
    if (!role) {
      role = await message.guild.roles.create({
        data: {
          name: "Tryxer Mute",
          color: 0x010101,
          position: message.guild.me.roles.cache.sort((a, b) => b.position - a.position).first().position - 1,
          permissions: 0
        }
      });
      message.guild.channels.cache.filter(channel => channel.manageable).forEach((channel) => {
        channel.updateOverwrite([{
          id: role.id,
          deny: ["SEND_MESSAGES", "ADD_REACTIONS"],
        }, ], 'Needed to change permissions')
      });
    }

    if (member.roles.cache.has(role.id)) return message.channel.send("That member is already muted!");
    await member.roles.add(role.id);
    message.channel.send(`The member **${member.user.tag}** has been muted from the server.`);
  }
}
