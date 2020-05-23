/* eslint-disable max-lines */
const Language = require("../structures/Language");

module.exports = class English extends Language {
    constructor() {
        super({
            strings: {
                // Global
                userNo: "You must mention an user or provide his ID.",
                channelNo: "You must enter a valid channel.",
                userPerms: (permission) => `You must have the permission \`${permission}\` to execute this command.`,
                botPerms: (permission) => `I must have the permission \`${permission}\` to execute this command.`,
                nsfwChannel: "This command is only available in a NSFW channel.",
                cooldown: (time) => `You need wait ${time} seconds to execute this command.`,
                premiumOnly: "The server must have premium to execute this command.",
                others: (number) => `and ${number} others more...`,
                roles: (number) => `Roles (${number})`,
                id: (id) => `ID: ${id}`,
                nothing: "Nothing to show...",
                imageUrl: "Link with maximum resolution",
                // Ban Command
                banNo: "I don't able to ban that member.",
                banPermissions: "You don't able to ban that member.",
                ban: (member) => `The member **${member}** has been banned from the server.`,
                banError: "An error ocurred while banning the member.",
                // Clear Command
                clearNumber: "You must specify how many messages will be deleted.",
                clearLimit: "You must specify a number between 1 and 100.",
                clear: (number) => `**${number}** messages have been deleted.`,
                clearError: "An error ocurred while deleting messages.",
                // Kick Command
                kickNo: "I don't able to kick that member.",
                kickPermissions: "You don't able to kick that member.",
                kick: (member) => `The member **${member}** has been kicked from the server.`,
                kickError: "An error ocurred while kicking the member.",
                // Mute Command
                muteNo: "That member is already muted!",
                mutePermissions: "You don't able to mute that member.",
                mute: (member) => `The member **${member}** has been muted from the server.`,
                // Unmute Command
                unmuteNo: "That member is not muted!",
                unmute: (member) => `The member **${member}** has been unmuted from the server.`,
                // User Command
                userPermissions: "User permissions",
                userCreated: "Account created at",
                userJoined: "Member joined at",
                userActivity: "User activity",
                userBoosting: "Boosting since",
                userFlags: "User flags",
                // Server Command
                serverVanityUrl: "Vanity URL",
                serverCreated: "Server created at",
                serverOwner: "Server owner",
                serverVerification: "Verification level",
                serverExplicitContentFilter: "Explicit media content filter",
                serverDescription: "Server description",
                serverFeatures: "Features",
                serverEmojis: "Server emojis",
                serverEmojisNormal: "Normal emojis",
                serverEmojisAnimated: "Animated emojis",
                serverBoosts: "Server boosts",
                serverBoostsTotal: (level, number) => `**Level ${level}** - ${number} boosts`,
                // Ping Command
                pingCalculating: "Pong! *calculating...*",
                ping: (ms) => `Pong! **${ms}ms**.`,
                // Premium Command
                premiumNo: (prefix) => `The server don't have premium!\n\nYou have a key? Active premium in the server using \`${prefix}premium [Key]\`.`,
                premiumYes: (date) => `The server has premium until **${date}**!\nYou can use special commands with premium.`,
                premium: (date) => `You improved the server! The server now has premium until **${date}**.\nYou can use special commands with premium.`,
                premiumInvalid: "The key entered isn't valid or is already expired.",
                // Prefix Command
                prefix: (prefix) => `My prefix in this server is \`${prefix}\`.`,
                prefixChange: (prefix) => `You can change the prefix of the server using: \`${prefix}prefix [Prefix]\`.`,
                prefixChanged: (prefix) => `The prefix in this server has been change to \`${prefix}\`.`,
                // Language Command
                language: (language) => `The language actual of the server is \`${language}\`.`,
                languageSupport: "Supported languages",
                languageActual: "Actual language",
                languageChange: (prefix) => `You can change the language of the server using \`${prefix}language [Language Code]\`.`,
                languageChanged: (language) => `Server language is now \`${language}\`.`,
                // Hug Command
                hug: (author, user) => `**${author}** hugged **${user}** ༼ つ ◕_◕ ༽つ`,
                hugBot: "You can't hug a bot.",
                // Slap Command
                slap: (author, user) => `**${author}** slapped **${user}** ',:)`,
                slapBot: "You can't slap a bot.",
                // Pat Command
                pat: (author, user) => `**${author}** patted **${user}** ᓚᘏᗢ`,
                patBot: "You can't pat a bot.",
                // Kiss Command
                kiss: (author, user) => `**${author}** kissed **${user}** 🤍`,
                kissBot: "You can't kiss a bot.",
                // Covid Command
                covidLastUpdate: "Last update",
                covidStatsGlobal: "COVID19 statistics globally",
                covidStatsCountry: (country) => `Statistics of COVID19 in ${country}`,
                covidCases: "Cases",
                covidRecovered: "Recovered people",
                covidDeaths: "Deceased people",
                covidError: "An error ocurred obtaining information about the COVID19",
                // Fortnite Command
                fortniteNo: "You must enter an username or `shop` to display today's store.",
                fortniteNoUser: "You must enter a valid Fortnite username.",
                fortniteUserStats: (player, level) => `${player} player statistic in Fortnite (Level: ${level})`,
                fortniteUserSolo: "Mode singleplayer",
                fortniteUserDuo: "Mode duo",
                fortniteUserSquad: "Mode squad",
                fortniteUserWinrate: "Winrate",
                fortniteUserKD: "KD",
                fortniteUserKills: "Kills",
                fortniteUserMinutes: "Minutes played",
                fortniteUserMatchs: "Matchs played",
                fortniteShop: "Fortnite Daily Shop",
                fortniteShopDescription: "Description",
                fortniteShopType: "Type",
                fortniteShopRarity: "Rarity",
                fortniteShopPrice: "Price",
                fortniteShopCurrency: "V-Bucks",
                fortniteShopItem: (current, max) => `Item ${current}/${max}`,
                fortniteError: "An error occurred obtaining Fortnite player information.",
                // Osu Command
                osuNoMode: "You must enter a valid mode (`normal`, `taiko`, `catch` or `mania`).",
                osuNoUser: "You must enter a valid osu! username.",
                osuStats: (player, mode) => `${player} player statistics in osu!${mode}`,
                osuCountry: "Country",
                osuLevel: "Level",
                osuPP: "Perfomance points",
                osuAccuracy: "Acurracy",
                osuTotalScore: "Total score",
                osuScores: "Scores",
                // Say Command
                sayNo: "You must enter a valid text to send.",
                // Roblox Command
                robloxNo: "You must enter a valid Roblox username.",
                robloxId: (id) => `**ID**: ${id}`,
                robloxOnline: "Online",
                robloxGroups: "Groups",
                robloxFriends: "Friends",
                robloxError: "An error occurred obtaining Roblox player information.",
                // Roles Command
                rolesNoOption: "You must enter a valid option (`add` or `remove`).",
                rolesNoValid: "You must enter at least one valid role.",
                rolesPermissions: "You can't modify the roles of that member.",
                rolesNoneAdd: (user) => `No role has been added to member **${user}**.`,
                rolesNoneRemove: (user) => `No role has been removed from the member **${user}**.`,
                rolesSingularAdd: (quantity, user) => `**${quantity}** role was added to member **${user}**.`,
                rolesSingularRemove: (quantity, user) => `**${quantity}** roles were added to the member **${user}**.`,
                rolesPluralAdd: (quantity, user) => `**${quantity}** role was removed from member **${user}**.`,
                rolesPluralRemove: (quantity, user) => `**${quantity}** roles were removed from member **${user}**.`,
                rolesError: "An error ocurred changing the member's roles",
                // Trump Command
                trumpNo: "You must enter a valid text to write.",
                // Role Command
                roleNo: "You must mention a role or provide his ID or name.",
                roleCreated: "Role created at",
                roleColor: "Role color",
                rolePermissions: "Role permissions",
                roleMembers: "Members with role",
                rolePosition: "Role position",
                rolePositionNote: "to top",
                // Unban Command
                unbanNoUser: "You must enter the ID of a valid user.",
                unbanNo: "That user isn't banned on this server.",
                unban: (user) => `The user **${user}** has been unbaned from the server.`,
                unbanError: "An error ocurred unbanning the user.",
                // MessageUpdate Event
                messageEdit: (user, id) => `**${user}** (${id}) edited a message.`,
                messageBefore: "Before",
                messageAfter: "After",
                messageEdited: "Edited message",
                // MessageDelete Event
                messageDelete: (user, id) => `The message of **${user}** (${id}) has been deleted.`,
                messageDeleted: "Deleted message",
                // Logs Command
                logsNoOption: (options) => `You must enter a valid option (${options}).`,
                logsNoPermissions: "I don't have permission to send messages on that channel.",
                logsReset: (log) => `The logs of **${log}** have been removed.`,
                logs: (log, channel) => `The logs of **${log}** will be sent to the channel **${channel}**.`,
                // Multimedia Command
                multimediaNoPermissions: "I don't have permission to manage messages on that channel.",
                multimediaNo: "No media channel.",
                multimedia: (channel) => `The current multimedia channel is ${channel}, all messages that don't contain a file will be deleted.`,
                multimediaChange: (prefix) => `You can change the multimedia channel using \`${prefix}multimedia <Channel>\` or delete it using \`${prefix}multimedia none\`.`,
                multimediaChanged: (channel) => `The multimedia channel is now ${channel}.`,
                multimediaReset: "The multimedia channel has been deleted.",
                // Voice State Update Event
                updateVoice: "Update voice state",
                joinVoice: (user, id, channel) => `The member **${user}** (${id}) has joined the voice channel ${channel}`,
                leaveVoice: (user, id, channel) => `The member **${user}** (${id}) has leaved the voice channel ${channel}`,
                changeVoice: (user, id, channelOld, channelNew) => `The member **${user}** (${id}) has changed the voice channel ${channelOld} to ${channelNew}`,
                startStreaming: (user, id, channel) => `The member **${user}** (${id}) has started a streaming on the voice channel ${channel}`,
                endStreaming: (user, id, channel) => `The member **${user}** (${id}) has ended the streaming on the voice channel ${channel}`
            }, constants: {
                permissions: {
                    default: "default permissions",
                    ADMINISTRATOR: "administrator",
                    CREATE_INSTANT_INVITE: "create instant invite",
                    KICK_MEMBERS: "kick members",
                    BAN_MEMBERS: "ban members",
                    MANAGE_CHANNELS: "manage channels",
                    MANAGE_GUILD: "manage guild",
                    ADD_REACTIONS: "add reactions",
                    VIEW_AUDIT_LOG: "view audit log",
                    PRIORITY_SPEAKER: "priority speaker",
                    STREAM: "stream",
                    VIEW_CHANNEL: "view channel",
                    SEND_MESSAGES: "send messages",
                    SEND_TTS_MESSAGES: "send TTS messages",
                    MANAGE_MESSAGES: "manage messages",
                    EMBED_LINKS: "embed links",
                    ATTACH_FILES: "attach files",
                    READ_MESSAGE_HISTORY: "read message history",
                    MENTION_EVERYONE: "mention everyone",
                    USE_EXTERNAL_EMOJIS: "use external emojis",
                    VIEW_GUILD_INSIGHTS: "view guild insights",
                    CONNECT: "connect",
                    SPEAK: "speak",
                    MUTE_MEMBERS: "mute members",
                    DEAFEN_MEMBERS: "deafen members",
                    MOVE_MEMBERS: "move members",
                    USE_VAD: "use voice activity",
                    CHANGE_NICKNAME: "change nickname",
                    MANAGE_NICKNAMES: "manage nicknames",
                    MANAGE_ROLES: "manage roles",
                    MANAGE_WEBHOOKS: "manage webhooks",
                    MANAGE_EMOJIS: "manage emojis"
                },
                serverFeatures: {
                    ANIMATED_ICON: "animated icon",
                    BANNER: "banner",
                    COMMERCE: "commerce",
                    DISCOVERABLE: "discoverable",
                    FEATURABLE: "featurable",
                    INVITE_SPLASH: "invite splash",
                    NEWS: "news",
                    PARTNERED: "partnered",
                    PUBLIC: "public",
                    PUBLIC_DISABLED: "public disabled",
                    VANITY_URL: "vanity URL",
                    VERIFIED: "verified",
                    VIP_REGIONS: "VIP regions",
                    WELCOME_SCREEN_ENABLED: "welcome screen enabled"
                },
                activities: {
                    PLAYING: "Playing",
                    STREAMING: "Streaming",
                    LISTENING: "Listening",
                    WATCHING: "Watching",
                    CUSTOM_STATUS: "Custom status"
                },
                verificationLevels: {
                    NONE: "Unrestricted",
                    LOW: "Must have a verified email on their Discord account.",
                    MEDIUM: "Must have a verified email and be registered on Discord for longer than 5 minutes.",
                    HIGH: "Must have a verified email, be registered on Discord for longer than 5 minutes and be a member of this server for longer than 10 minutes.",
                    VERY_HIGH: "Must have a verified email, be registered on Discord for longer than 5 minutes, be a member of this server for longer than 10 minutes and have a verified phone on their Discord account."
                },
                explicitContentFilter: {
                    DISABLED: "Don't scan any media content.",
                    MEMBERS_WITHOUT_ROLES: "Scan media content from members without a role.",
                    ALL_MEMBERS: "Scan media content from all members."
                },
                time: {
                    seconds: (seconds) => `${seconds} seconds`,
                    second: (second) => `${second} second`,
                    minutes: (minutes) => `${minutes} minutes`,
                    minute: (minute) => `${minute} minute`,
                    hours: (hours) => `${hours} hours`,
                    hour: (hour) => `${hour} hour`,
                    days: (days) => `${days} days`,
                    day: (day) => `${day} day`,
                    weeks: (weeks) => `${weeks} weeks`,
                    week: (week) => `${week} week`,
                    months: (months) => `${months} months`,
                    month: (month) => `${month} month`,
                    years: (years) => `${years} years`,
                    year: (year) => `${year} year`,
                    ago: (date) => `${date} ago`,
                    within: (date) => `within ${date}`,
                    elapsed: (time) => `**${time}** elapsed.`,
                    left: (time) => `**${time}** left.`,
                    now: "right now"
                },
                logs: {
                    messages: "messages",
                    voice: "voice",
                    all: "all"
                }
            }, help: {
                // Help Command
                title: "Help",
                titleCommands: "List of commands",
                description: (name, prefix, links) => `Hello, I'm ${name}. I'm here to help you in everything you wanna do, you can get information about the server and/or of an user, you can also have a lot of fun playing games incorporated in me with your friends or just execute the administrative part.\n\nMy prefix in this server is \`${prefix}\` but you can mention me as a replacement for the prefix.\nYou can find different categories with the different commands I have available with the command \`${prefix}commands\`, each one of them starts with the previously mentioned prefix.\n\nDo you want more detailed information about a command? Use \`${prefix}help [Command]\`.\n\nUsefull links: ${links}`,
                categories: ["Information", "Utility", "Entertainment", "Configuration", "Administration", "NSFW"],
                nsfw: "Use this command on an NSFW channel to view NSFW commands.",
                footer: (count) => `${count} commands available`,
                usage: "Usage",
                aliases: "Aliases",
                // Commands Description
                banDescription: "Bans a member by ID or mention, reason can be added.",
                softbanDescription: "Bans a member by ID or mention, deleting messages for the specified days old, a reason can be added.",
                clearDescription: "Deletes messages according to the specified quantity between 1 and 100.",
                kickDescription: "Kicks a member, a reason can be added.",
                muteDescription: "Mutes a member, no defined time limit.",
                unmuteDescription: "Unmutes a member already muted.",
                helpDescription: "Shows this message.",
                userDescription: "Shows detailed information of an user.",
                serverDescription: "Shows detailed information of the server.",
                pingDescription: "Shows the latency of the bot when responding and with Discord API.",
                prefixDescription: "Shows and changes the server prefix settings.",
                languageDescription: "Shows and changes the server language settings.",
                avatarDescription: "Shows the avatar of a member by ID, mention or just you.",
                hugDescription: "Hugs a member by ID or mention.",
                slapDescription: "Slaps a member by ID or mention.",
                patDescription: "Pats a member by ID or mention.",
                kissDescription: "Kisses a member by ID or mention.",
                covid19Description: "Shows the progress of the COVID19 worldwide or in each country.",
                fortniteDescription: "Shows information from today's store or a Fortnite player.",
                osuDescription: "Shows information of a osu! player.",
                commandsDescription: "Shows all available commands.",
                sayDescription: "The bot will repeat what you indicate",
                robloxDescription: "Shows information of a Roblox player.",
                rolesDescription: "Add or Remove a rol(s) of a member in your server.",
                triggeredDescription: "Makes an image __***triggered***_ using a member's avatar or an attached image.",
                trumpDescription: "Donald Trump writes something.",
                scaredDescription: "Someone sees a member's avatar or an image attached by you and is scared...",
                rainbowDescription: "Makes a member's avatar or an image attached by you in a rainbow.",
                roleDescription: "Shows the information of a role by the name, mention or ID.",
                unbanDescription: "Unbans a member by ID, a reason can be added.",
                logsDescription: "Configure a channel for the diferents server logs.",
                multimediaDescription: "Shows and changes the server multimedia channel, all messages that don't contain a file will be deleted. It doesn't affect people who have permission to manage messages on that channel.",
                // Commands Usage
                banUsage: (prefix) => `${prefix}ban <Member> [Reason]\n${prefix}ban @Deivid\n${prefix}ban 123123123123123123 >:[`,
                softbanUsage: (prefix) => `${prefix}softban <Member> <Antiquity of messages in days to delete> [Reason]\n${prefix}softban @Deivid 1\n${prefix}softban 123123123123123123 1 >:[`,
                clearUsage: (prefix) => `${prefix}clear <Quantity 1-100>\n${prefix}clear 10`,
                kickUsage: (prefix) => `${prefix}kick <Member> [Reason]\n${prefix}kick @Someone\n${prefix}ban 123123123123123123 Are you spamming? Yes? Ookay, kicked.`,
                muteUsage: (prefix) => `${prefix}mute <Member>\n${prefix}mute @Free\n${prefix}mute 123123123123123123`,
                unmuteUsage: (prefix) => `${prefix}unmute <Member>\n${prefix}unmute @Free\n${prefix}unmute 123123123123123123`,
                helpUsage: (prefix) => `${prefix}help`,
                userUsage: (prefix) => `${prefix}user`,
                serverUsage: (prefix) => `${prefix}server`,
                pingUsage: (prefix) => `${prefix}ping`,
                prefixUsage: (prefix) => `${prefix}prefix [Prefix]\n${prefix}prefix\n${prefix}prefix !`,
                languageUsage: (prefix) => `${prefix}language [Language]\n${prefix}language\n${prefix}language es`,
                avatarUsage: (prefix) => `${prefix}avatar <Member>\n${prefix}avatar @Free`,
                hugUsage: (prefix) => `${prefix}hug <Member>\n${prefix}hug @Deivid`,
                slapUsage: (prefix) => `${prefix}slap <Member>\n${prefix}slap @Free`,
                patUsage: (prefix) => `${prefix}pat <Member>\n${prefix}pat @Free`,
                kissUsage: (prefix) => `${prefix}kiss <Member>\n${prefix}kiss @Deivid`,
                covid19Usage: (prefix) => `${prefix}covid19 [Country]\n${prefix}covid19\n${prefix}covid19 United States`,
                fortniteUsage: (prefix) => `${prefix}fortnite <shop|Player> [Objeto de tienda]\n${prefix}fortnite shop\n${prefix}fortnite shop 4\n${prefix}fortnite Drylotranz`,
                osuUsage: (prefix) => `${prefix}osu <normal|taiko|catch|mania> <Player>\n${prefix}osu normal Motxi`,
                commandsUsage: (prefix) => `${prefix}commands`,
                sayUsage: (prefix) => `${prefix}say <Text>\n${prefix}say I'm the best bot forever`,
                robloxUsage: (prefix) => `${prefix}roblox [Player]\n${prefix}roblox Dlodian131`,
                rolesUsage: (prefix) => `${prefix}roles <Member> <remove|add> <Role(s)>\n${prefix}roles @Free add @Member\n${prefix}roles 123123123123123123 add @Member\n${prefix}roles @Free remove @Member\n${prefix}roles 123123123123123123 remove @Member`,
                triggeredUsage: (prefix) => `${prefix}triggered [Member]\n${prefix}triggered\n${prefix}triggered @Motxi`,
                trumpUsage: (prefix) => `${prefix}trump <Text>\n${prefix}trump This is the best bot`,
                scaredUsage: (prefix) => `${prefix}scared [Member]\n${prefix}scared\n${prefix}scared @Free`,
                rainbowUsage: (prefix) => `${prefix}rainbow [Member]\n${prefix}rainbow\n${prefix}rainbow @Free`,
                roleUsage: (prefix) => `${prefix}role <Role>\n${prefix}role @Member\n${prefix}role Administrator`,
                unbanUsage: (prefix) => `${prefix}unban <User>\n${prefix}unban 123123123123123123`,
                logsUsage: (prefix) => `${prefix}logs <messages|voice|all> <Channel|none>\n${prefix}logs messages #logs\n${prefix}logs all #logs\n${prefix}logs messages none`,
                multimediaUsage: (prefix) => `${prefix}multimedia <Channel|none>\n${prefix}multimedia #pictures\n${prefix}multimedia none`
            }
        });

        this.displayName = "english";
        this.nativeName = "english";
        this.languageCode = "en";
        this.flag = "🇺🇸";
    }
}